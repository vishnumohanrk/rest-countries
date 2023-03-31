import 'server-only';

import type { TCountryCard, TResp } from './types';

async function getFullList() {
  const resp = await fetch(
    'https://restcountries.com/v2/all?fields=name,flag,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages,borders,alpha2code,alpha3code,cioc'
  );

  if (resp.ok) {
    const data: TResp[] = await resp.json();
    return data;
  }

  throw new Error(`${resp.status} - ${resp.statusText}`);
}

export async function getCountryList(): Promise<TCountryCard[]> {
  const data = await getFullList();

  return data.map((i) => ({
    flag: i.flag,
    name: i.name,
    region: i.region,
    capital: i.capital,
    population: i.population.toLocaleString(),
  }));
}
