"use client";

import Image from "next/image";
import { useState } from "react";
import { OFFICE_LOCATIONS, type OfficeLocation } from "./footer-locations-data";

/**
 * FooterLocations component.
 * Displays interactive country pills with circular flags that reveal
 * the corresponding office address when selected.
 *
 * Implements accessible WAI-ARIA tab semantics.
 */
export default function FooterLocations() {
  const [selectedId, setSelectedId] = useState<string>(OFFICE_LOCATIONS[0].id);

  const activeLocation =
    OFFICE_LOCATIONS.find((loc) => loc.id === selectedId) ??
    OFFICE_LOCATIONS[0];

  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      {/* Country Selection Tabs */}
      <div
        role="tablist"
        aria-label="Office locations by country"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {OFFICE_LOCATIONS.map((location: OfficeLocation) => {
          const isActive = location.id === selectedId;

          return (
            <button
              key={location.id}
              type="button"
              role="tab"
              id={`tab-${location.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${location.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setSelectedId(location.id)}
              className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm sm:text-base font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
                isActive
                  ? "bg-white text-office-brown-800 font-medium shadow-xs border border-grey-300"
                  : "bg-transparent text-office-brown-700 hover:text-office-brown-800 hover:bg-white/50 border border-grey-300/70"
              }`}
            >
              {/* Circular Flag Asset */}
              <div className="relative h-4.5 w-4.5 shrink-0 overflow-hidden rounded-full ring-1 ring-grey-300 sm:h-5 sm:w-5">
                <Image
                  src={location.flagUrl}
                  alt={location.alt}
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>

              {/* Country Name */}
              <span className="font-sans font-medium tracking-tight">
                {location.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Location Address Details */}
      <div
        role="tabpanel"
        id={`panel-${activeLocation.id}`}
        aria-labelledby={`tab-${activeLocation.id}`}
        className="mt-3.5"
      >
        <p className="max-w-xl font-sans text-sm leading-relaxed text-office-brown-800 sm:text-base">
          {activeLocation.address}
        </p>
      </div>
    </div>
  );
}
