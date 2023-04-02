import Link from 'next/link';

import type { TCountry } from '@/lib/types';

export function BorderList({ borders }: Pick<TCountry, 'borders'>) {
  return borders?.length ? (
    <div className="mt-8">
      <p className="mb-2 font-semibold">Border Countries:</p>
      <ul className="flex flex-wrap gap-2.5">
        {borders.map((i) => (
          <li key={i}>
            <Link
              href={`/${encodeURIComponent(i)}`}
              className="block rounded-md bg-white px-5 py-1 shadow-md dark:bg-slate-800"
            >
              {i}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
