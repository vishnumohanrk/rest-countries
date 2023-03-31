/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import type { TCountryCard } from '@/lib/types';

import { InfoText } from '../info-text';

export function CountryCard({
  flag,
  name,
  region,
  capital,
  population,
}: TCountryCard) {
  return (
    <li>
      <Link
        prefetch={false}
        href={`/${name}`}
        className="block origin-bottom overflow-hidden rounded-md bg-white shadow-md transition-transform duration-200 will-change-transform hover:scale-105 focus:scale-105 dark:bg-slate-800"
      >
        <img
          src={flag}
          loading="lazy"
          alt={`Flag of ${name}`}
          className="aspect-video w-full object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold">{name}</h2>
          <dl className="my-4">
            <InfoText keyText="Population" value={population} />
            <InfoText keyText="Region" value={region} />
            <InfoText keyText="Capital" value={capital} />
          </dl>
        </div>
      </Link>
    </li>
  );
}
