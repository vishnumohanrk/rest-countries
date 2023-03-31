import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import type { TRegion } from '@/lib/utils';
import { REGION_OPTIONS } from '@/lib/utils';

type RegionFilterProps = {
  selectedRegion: TRegion;
  onChange: (val: TRegion) => void;
};

export function RegionFilter({ selectedRegion, onChange }: RegionFilterProps) {
  return (
    <div className="relative w-52">
      <Listbox value={selectedRegion} onChange={onChange}>
        <Listbox.Button className="flex w-full items-center justify-between rounded-md bg-white px-6 py-3.5 shadow-md dark:bg-slate-800 md:py-4">
          {selectedRegion}
          <ChevronDownIcon aria-hidden className="h-5 w-5" />
        </Listbox.Button>
        <Listbox.Options className="absolute z-40 mt-1 w-full overflow-auto rounded-md bg-white shadow-md dark:bg-slate-800">
          {REGION_OPTIONS.map((region) => (
            <Listbox.Option
              key={region}
              value={region}
              className="cursor-pointer px-6 py-3 ui-active:bg-slate-200 dark:ui-active:bg-slate-900"
            >
              {region === 'Filter by Region' ? 'All' : region}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
