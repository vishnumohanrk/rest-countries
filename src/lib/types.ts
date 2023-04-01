export type TResp = {
  name: string;
  topLevelDomain: string[];
  capital: string;
  region: string;
  population: number;
  borders: string[] | undefined;
  nativeName: string;
  currencies: { name: string }[] | undefined;
  languages: { name: string }[];
  flag: string;
  cioc: string;
  alpha2Code: string;
  alpha3Code: string;
  subregion: string;
};

type TConvertToString<T, E extends keyof T> = Pick<T, E> & {
  [key in keyof Omit<T, E>]: string;
};

export type TCountry = TConvertToString<TResp, 'borders'>;

export type TCountryCard = Pick<
  TCountry,
  'flag' | 'name' | 'population' | 'region' | 'capital'
>;
