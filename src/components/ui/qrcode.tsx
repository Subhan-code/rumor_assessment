import React, { useMemo } from 'react'
import QRCodeLib, { QRCodeErrorCorrectionLevel } from 'qrcode'

export interface QRCodeProps {
  /** The encoded text or URL used to generate the QR code */
  value: string
  /** Controls the rendered width and height of the SVG in pixels */
  size?: number
  /** Sets the foreground color used for the modules and finder patterns */
  fgColor?: string
  /** Sets the background color of the QR surface */
  bgColor?: string
  /** Controls the QR error correction level passed to the generator */
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
  /** Custom classes merged onto the root SVG element */
  class?: string
  className?: string
}

interface QRModule {
  x: number
  y: number
  isDark: boolean
  isFinderPattern: boolean
}

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 268,
  fgColor = 'var(--foreground)',
  bgColor = 'var(--background)',
  errorCorrectionLevel = 'M',
  class: classAlias = '',
  className = '',
}) => {
  const mergedClass = [classAlias, className].filter(Boolean).join(' ')

  const { modules, moduleCount } = useMemo(() => {
    if (!value) return { modules: [], moduleCount: 0 }
    try {
      const qr = QRCodeLib.create(value, {
        errorCorrectionLevel: errorCorrectionLevel as QRCodeErrorCorrectionLevel,
      })
      const count = qr.modules.size
      const mods: QRModule[] = []

      // Finder pattern positions (top-left, top-right, bottom-left 7x7 corner modules)
      const isFinderPattern = (r: number, c: number, total: number) => {
        const inTopLeft = r < 7 && c < 7
        const inTopRight = r < 7 && c >= total - 7
        const inBottomLeft = r >= total - 7 && c < 7
        return inTopLeft || inTopRight || inBottomLeft
      }

      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          const isDark = Boolean(qr.modules.get(r, c))
          mods.push({
            x: c,
            y: r,
            isDark,
            isFinderPattern: isFinderPattern(r, c, count),
          })
        }
      }
      return { modules: mods, moduleCount: count }
    } catch (err) {
      console.error('Failed to generate QR code:', err)
      return { modules: [], moduleCount: 0 }
    }
  }, [value, errorCorrectionLevel])

  if (!moduleCount) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex items-center justify-center text-xs text-muted-foreground ${mergedClass}`}
      />
    )
  }

  const moduleSize = size / moduleCount
  const dotRadius = moduleSize * 0.42

  // Render the three finder pattern squares with rounded corners
  const renderFinderPatterns = () => {
    const positions = [
      { row: 0, col: 0 },                        // top-left
      { row: 0, col: moduleCount - 7 },          // top-right
      { row: moduleCount - 7, col: 0 },          // bottom-left
    ]

    return positions.map(({ row, col }, i) => {
      const x = col * moduleSize
      const y = row * moduleSize
      const outerSize = 7 * moduleSize
      const innerOffset = moduleSize
      const innerSize = 5 * moduleSize
      const coreOffset = 2 * moduleSize
      const coreSize = 3 * moduleSize
      const r = moduleSize * 1.0

      const cutoutFill = bgColor === 'transparent' ? '#ffffff' : bgColor

      return (
        <g key={`fp-${i}`}>
          {/* Outer ring with smooth rounded corners */}
          <rect
            x={x}
            y={y}
            width={outerSize}
            height={outerSize}
            rx={r}
            ry={r}
            fill={fgColor}
          />
          {/* Inner cutout */}
          <rect
            x={x + innerOffset}
            y={y + innerOffset}
            width={innerSize}
            height={innerSize}
            rx={r * 0.6}
            ry={r * 0.6}
            fill={cutoutFill}
          />
          {/* Center core dot */}
          <rect
            x={x + coreOffset}
            y={y + coreOffset}
            width={coreSize}
            height={coreSize}
            rx={r * 0.5}
            ry={r * 0.5}
            fill={fgColor}
          />
        </g>
      )
    })
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={mergedClass}
    >
      {/* Surface Background */}
      {bgColor !== 'transparent' && (
        <rect width={size} height={size} fill={bgColor} rx={moduleSize * 0.8} />
      )}

      {/* Dot-style data modules — skip finder pattern zones */}
      {modules
        .filter((m) => m.isDark && !m.isFinderPattern)
        .map((m, i) => (
          <circle
            key={i}
            cx={m.x * moduleSize + moduleSize / 2}
            cy={m.y * moduleSize + moduleSize / 2}
            r={dotRadius}
            fill={fgColor}
          />
        ))}

      {/* Finder patterns with rounded borders */}
      {renderFinderPatterns()}
    </svg>
  )
}

export default QRCode
