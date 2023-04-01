'use client';

import { useFilter } from '@/hooks/use-filter';
import type { TCountryCard } from '@/lib/types';

import { CardContainer } from './card-container';
import { CountryCard } from './country-card';
import { FormContainer } from './form-container';
import { RegionFilter } from './region-filter';
import { SearchBar } from './search-bar';

export function HomePage({ fullList }: { fullList: TCountryCard[] }) {
  const { displayData, handleDropDown, handleInp, isPending, query, region } =
    useFilter(fullList);

  return (
    <>
      <FormContainer>
        <SearchBar value={query} onChange={handleInp} />
        <RegionFilter selectedRegion={region} onChange={handleDropDown} />
      </FormContainer>
      <CardContainer isPending={isPending}>
        {displayData.map((i) => (
          <CountryCard key={i.name} {...i} />
        ))}
      </CardContainer>
    </>
  );
}
