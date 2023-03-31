import { useCallback, useState, useTransition } from 'react';

import type { TCountryCard } from '@/lib/types';
import type { TRegion } from '@/lib/utils';
import { filterList } from '@/lib/utils';

export function useFilter(fullList: TCountryCard[]) {
  const [isPending, startTransition] = useTransition();
  const [displayData, setDisplayData] = useState(() => fullList);

  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<TRegion>('Filter by Region');

  const handleInp = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      startTransition(() => {
        setDisplayData(filterList({ fullList, query: e.target.value, region }));
      });
    },
    [fullList, region]
  );

  const handleDropDown = useCallback(
    (val: TRegion) => {
      setRegion(val);
      startTransition(() => {
        setDisplayData(filterList({ fullList, query, region: val }));
      });
    },
    [fullList, query]
  );

  return {
    query,
    region,
    isPending,
    displayData,

    handleInp,
    handleDropDown,
  };
}
