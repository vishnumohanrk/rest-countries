'use client';

import { useFilter } from '@/hooks/use-filter';
import type { TCountryCard } from '@/lib/types';

import { CardContainer } from './card-container';
import { CountryCard } from './country-card';
import { RegionFilter } from './region-filter';
import { SearchBar } from './search-bar';

export function HomePage({ fullList }: { fullList: TCountryCard[] }) {
  const { displayData, handleDropDown, handleInp, isPending, query, region } =
    useFilter(fullList);

  return (
    <>
      <form className="justify-between py-6 max-md:text-sm md:flex md:py-8">
        <SearchBar value={query} onChange={handleInp} />
        <RegionFilter selectedRegion={region} onChange={handleDropDown} />
      </form>
      <CardContainer isPending={isPending}>
        {displayData.map((i) => (
          <CountryCard key={i.name} {...i} />
        ))}
      </CardContainer>
    </>
  );
}
