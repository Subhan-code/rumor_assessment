import React from 'react';
import { HOSTS } from '../data';

interface RumorHostsSectionProps {
  onContactOrganizer: () => void;
}

export const RumorHostsSection: React.FC<RumorHostsSectionProps> = ({
  onContactOrganizer,
}) => {
  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <h2 className="text-base leading-5 font-medium text-foreground">
          Hosts
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onContactOrganizer}
            className="flex size-9 items-center justify-center gap-2 rounded-full bg-white/40 whitespace-nowrap transition-colors hover:bg-white/70 md:h-auto md:w-auto md:px-3.5 md:py-2 border border-white/40 cursor-pointer backdrop-blur-md"
            aria-label="Contact organizer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-foreground"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.66666 9.99996C1.66666 5.39759 5.39762 1.66663 9.99999 1.66663C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996C18.3333 14.6023 14.6024 18.3333 9.99999 18.3333C8.89306 18.3333 7.83457 18.117 6.866 17.7237C6.77851 17.6881 6.72801 17.6677 6.69071 17.6537C6.6863 17.652 6.68247 17.6506 6.67919 17.6494C6.67796 17.6496 6.67664 17.6498 6.67523 17.65C6.64448 17.6541 6.60256 17.661 6.52253 17.6744L3.55762 18.1685C3.54971 18.1698 3.54173 18.1712 3.53369 18.1725C3.39984 18.1949 3.25008 18.2199 3.12002 18.2297C2.9782 18.2404 2.75259 18.2441 2.51416 18.1419C2.2194 18.0154 1.98452 17.7805 1.8581 17.4858C1.75583 17.2474 1.75956 17.0217 1.77026 16.8799C1.78008 16.7499 1.80509 16.6001 1.82744 16.4663C1.82878 16.4582 1.83011 16.4502 1.83143 16.4423L2.32559 13.4774C2.33892 13.3974 2.34582 13.3555 2.34999 13.3247C2.35018 13.3233 2.35036 13.322 2.35052 13.3207C2.34933 13.3175 2.34792 13.3136 2.34626 13.3092C2.33225 13.2719 2.31182 13.2214 2.27629 13.1339C1.88292 12.1654 1.66666 11.1069 1.66666 9.99996ZM9.99999 3.33329C6.31809 3.33329 3.33332 6.31806 3.33332 9.99996C3.33332 10.8883 3.50662 11.734 3.82046 12.5068C3.82543 12.519 3.83053 12.5315 3.83574 12.5443C3.88662 12.6689 3.94713 12.8171 3.97814 12.9554C4.00631 13.0811 4.01848 13.1909 4.0185 13.3197C4.01851 13.4611 3.99441 13.604 3.97497 13.7193C3.97312 13.7303 3.97132 13.741 3.96957 13.7514L3.51378 16.4862L6.24853 16.0304C6.25898 16.0286 6.2697 16.0268 6.28067 16.025C6.39596 16.0055 6.53886 15.9814 6.68021 15.9815C6.809 15.9815 6.91885 15.9936 7.04452 16.0218C7.18288 16.0528 7.33106 16.1133 7.45567 16.1642C7.46841 16.1694 7.48091 16.1745 7.49313 16.1795C8.26591 16.4933 9.11168 16.6666 9.99999 16.6666C13.6819 16.6666 16.6667 13.6819 16.6667 9.99996C16.6667 6.31806 13.6819 3.33329 9.99999 3.33329Z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden text-xs font-mono tracking-wider uppercase font-semibold text-foreground sm:inline">
              Contact Organizer
            </span>
          </button>
        </div>
      </div>

      {/* Host List */}
      <div className="relative px-4">
        <div className="divide-y divide-white/20">
          {HOSTS.map((host) => (
            <div key={host.id} className="flex items-center justify-between py-3 first:pt-1 last:pb-0">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-85 transition-opacity group"
                href={host.profileUrl}
              >
                <div className="shrink-0">
                  <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full border border-white/40 bg-neutral-200 md:size-11">
                    <img
                      alt={host.name}
                      className="aspect-square size-full object-cover"
                      src={host.avatarUrl}
                      referrerPolicy="no-referrer"
                    />
                  </span>
                </div>
                <div>
                  <p className="text-base font-normal tracking-[-0.25px] text-foreground group-hover:text-[#D33E0B] transition-colors leading-tight">
                    {host.name}
                  </p>
                  <p className="text-xs text-[#737373] font-mono tracking-wide mt-0.5">
                    {host.role}
                  </p>
                </div>
              </a>

              <a
                href={host.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${host.name} on Instagram`}
                className="flex size-9 items-center justify-center rounded-full bg-white/40 hover:bg-white/70 p-2 border border-white/40 transition-colors shadow-xs backdrop-blur-md"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-foreground"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9958 6.60935C9.0208 6.60935 6.60414 9.02233 6.60414 12.0021C6.60414 14.9818 9.01664 17.3948 11.9958 17.3948C14.975 17.3948 17.3875 14.9818 17.3875 12.0021C17.3875 9.02233 14.975 6.60935 11.9958 6.60935ZM11.9958 15.4986C10.0625 15.4986 8.4958 13.9316 8.4958 11.9979C8.4958 10.0642 10.0625 8.49722 11.9958 8.49722C13.9291 8.49722 15.4958 10.0642 15.4958 11.9979C15.4958 13.9316 13.9291 15.4986 11.9958 15.4986Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.8584 6.39289C18.8584 7.08812 18.2951 7.65172 17.6001 7.65172C16.9051 7.65172 16.3418 7.08812 16.3418 6.39289C16.3418 5.69765 16.9051 5.13405 17.6001 5.13405C18.2951 5.13405 18.8584 5.69765 18.8584 6.39289Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9958 1.5C9.14584 1.5 8.7875 1.5125 7.66667 1.56251C6.55 1.61252 5.7875 1.79172 5.12083 2.05011C4.42917 2.31683 3.84583 2.6794 3.2625 3.26285C2.67917 3.8463 2.32083 4.43392 2.05 5.12155C1.79167 5.78835 1.6125 6.551 1.5625 7.67206C1.5125 8.78895 1.5 9.14735 1.5 11.9979C1.5 14.8485 1.5125 15.2069 1.5625 16.3279C1.6125 17.4448 1.79167 18.2075 2.05 18.8785C2.31667 19.5703 2.67917 20.1537 3.2625 20.7372C3.84583 21.3206 4.43333 21.679 5.12083 21.9499C5.7875 22.2083 6.55 22.3875 7.67084 22.4375C8.79167 22.4875 9.14584 22.5 12 22.5C14.8542 22.5 15.2083 22.4875 16.3292 22.4375C17.4458 22.3875 18.2083 22.2083 18.8792 21.9499C19.5708 21.6832 20.1542 21.3206 20.7375 20.7372C21.3208 20.1537 21.6792 19.5661 21.95 18.8785C22.2083 18.2117 22.3875 17.449 22.4375 16.3279C22.4875 15.2069 22.5 14.8526 22.5 11.9979C22.5 9.14318 22.4875 8.78895 22.4375 7.66789C22.3875 6.551 22.2083 5.78835 21.95 5.11738C21.6833 4.42558 21.3208 3.84213 20.7375 3.25868C20.1542 2.67523 19.5667 2.31683 18.8792 2.04594C18.2125 1.78756 17.45 1.60835 16.3292 1.55834C15.2042 1.5125 14.8458 1.5 11.9958 1.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
