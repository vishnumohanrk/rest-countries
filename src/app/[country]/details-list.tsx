import { InfoText } from '@/components/info-text';
import type { TCountry } from '@/lib/types';

type DetailsListProps = Omit<TCountry, 'name' | 'flag' | 'borders'>;

export function DetailsList({
  region,
  capital,
  languages,
  subregion,
  currencies,
  nativeName,
  population,
  topLevelDomain,
}: DetailsListProps) {
  return (
    <div className="flex-1 lg:flex">
      <dl className="lg:w-1/2">
        <InfoText keyText="Native Name" value={nativeName} />
        <InfoText keyText="Population" value={population} />
        <InfoText keyText="Region" value={region} />
        <InfoText keyText="Sub Region" value={subregion} />
        <InfoText keyText="Capital" value={capital} />
      </dl>
      <dl className="max-lg:mt-8 lg:w-1/2">
        <InfoText keyText="Top Level Domain" value={topLevelDomain} />
        <InfoText keyText="Currencies" value={currencies} />
        <InfoText keyText="Languages" value={languages} />
      </dl>
    </div>
  );
}
