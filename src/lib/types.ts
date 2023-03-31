export type TResp = {
  name: string;
  topLevelDomain: string[];
  capital: string;
  region: string;
  population: number;
  borders: string[];
  nativeName: string;
  currencies: { name: string }[];
  languages: { name: string }[];
  flag: string;
  cioc: string;
  independent: boolean;
};

type TConvertToString<T, E extends keyof T> = Pick<T, E> & {
  [key in keyof Omit<T, E>]: string;
};

export type TCountry = TConvertToString<TResp, 'borders'>;

export type TCountryCard = Pick<
  TCountry,
  'flag' | 'name' | 'population' | 'region' | 'capital'
>;
