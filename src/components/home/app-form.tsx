'use client';

import { RegionFilter } from './region-filter';
import { SearchBar } from './search-bar';

export function AppForm() {
  return (
    <form className="justify-between py-6 max-md:text-sm md:flex md:py-8">
      <SearchBar />
      <RegionFilter selectedRegion="Filter by Region" onChange={console.log} />
    </form>
  );
}
