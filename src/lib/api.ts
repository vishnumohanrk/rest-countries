import 'server-only';

import { matchSorter } from 'match-sorter';
import { notFound } from 'next/navigation';

import type { TCountry, TCountryCard, TResp } from './types';

const API_URLS = {
  CODES: 'https://restcountries.com/v2/all?fields=name,alpha3Code',
  ALL: 'https://restcountries.com/v2/all?fields=name,flag,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,alpha2Code,alpha3Code,cioc',
} as const;

async function getCodesToNames() {
  const resp = await fetch(API_URLS.CODES);

  if (resp.ok) {
    const data: Pick<TResp, 'name' | 'alpha3Code'>[] = await resp.json();

    return data.reduce<Record<string, string>>((obj, { alpha3Code, name }) => {
      obj[alpha3Code] = name;

      return obj;
    }, {});
  }

  throw new Error(`${resp.status} - ${resp.statusText}`);
}

async function getFullList(): Promise<TCountry[]> {
  const resp = await fetch(API_URLS.ALL);
  const codesToNames = await getCodesToNames();

  if (resp.ok) {
    const data: TResp[] = await resp.json();
    return data.map((i) => ({
      ...i,
      population: i.population.toLocaleString(),
      topLevelDomain: i.topLevelDomain.join(', '),
      borders: i.borders?.map((i) => codesToNames[i]),
      languages: i.languages.map((j) => j.name).join(', '),
      currencies: i.currencies?.map((j) => j.name).join(', ') || '',
    }));
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
    population: i.population,
  }));
}

export async function getCountryDetails(name: string): Promise<TCountry> {
  const data = await getFullList();
  const query = decodeURIComponent(name);

  let result: TCountry | undefined = undefined;

  if (query.length === 2 || query.length === 3) {
    result = matchSorter(data, query, {
      keys: [`alpha${query.length}Code`, 'cioc'],
    })[0];
  }

  if (query.length > 3) {
    result = matchSorter(data, query, { keys: ['name', 'nativeName'] })[0];
  }

  if (!result) {
    notFound();
  }

  return result;
}
