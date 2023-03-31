import { matchSorter } from 'match-sorter';

import type { TCountryCard } from './types';

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

type TFilterArgs = {
  query: string;
  region: TRegion;
  fullList: TCountryCard[];
};

export function filterList({ fullList, query, region }: TFilterArgs) {
  const data =
    region === 'Filter by Region'
      ? fullList
      : fullList.filter((i) => i.region === region);

  if (!query) {
    return data;
  }

  return matchSorter(data, query, { keys: ['name', 'capital'] });
}
