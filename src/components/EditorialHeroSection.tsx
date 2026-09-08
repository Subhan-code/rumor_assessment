'use client';

import React from 'react';

export const EditorialHeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-between pt-4 pb-8 sm:pb-12 select-none">
      <div className="flex items-center justify-between pb-4">
        <span className="font-sans text-xs sm:text-sm font-medium tracking-tight text-[#F0E9DC]">
          AFTERTASTE × USM
        </span>
        <span className="text-xs text-[#AAA195]">
          Armory Week 2026
        </span>
      </div>

      <div className="pt-8 sm:pt-12 max-w-2xl">
        <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#F0E9DC] tracking-tight leading-[1.08] mb-4">
          The collector is away. <br />
          <span className="text-[#DDD5C4]">The apartment is open.</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-[#AAA195] font-normal max-w-xl">
          A phone-free evening of design, culinary craft, vinyl sound, and contemporary art.
        </p>
      </div>
    </section>
  );
};

export default EditorialHeroSection;
