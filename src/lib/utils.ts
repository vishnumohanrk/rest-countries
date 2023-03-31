export const REGION_OPTIONS = [
  'Filter by Region',
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
] as const;

export type TRegion = (typeof REGION_OPTIONS)[number];
