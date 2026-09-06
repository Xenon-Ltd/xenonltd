export interface OfficeLocation {
  id: string;
  name: string;
  flagUrl: string;
  alt: string;
  address: string;
}

/**
 * List of Xenon office locations.
 * Flags are sourced locally from public/images/flags/.
 */
export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "usa",
    name: "USA",
    flagUrl: "/images/flags/us.png",
    alt: "United States flag",
    address: "1415 Bali Court, San Jose, CA 95122, United States",
  },
  {
    id: "canada",
    name: "Canada",
    flagUrl: "/images/flags/ca.png",
    alt: "Canada flag",
    address: "9 Clegg Rd, Markham, ON L6G 0H3, Canada",
  },
  {
    id: "ghana",
    name: "Ghana",
    flagUrl: "/images/flags/gh.png",
    alt: "Ghana flag",
    address: "377 George Walker Bush Highway, Accra- Ghana",
  },
];
