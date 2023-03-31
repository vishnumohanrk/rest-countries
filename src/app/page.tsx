import { AppForm } from '@/components/home/app-form';
import { CountryCard } from '@/components/home/country-card';
import { getCountryList } from '@/lib/api';

export default async function AppHome() {
  const countryList = await getCountryList();

  return (
    <>
      <AppForm />
      <ul className="grid grid-cols-1 gap-10 pb-20 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        {countryList.map((i) => (
          <CountryCard key={i.name} {...i} />
        ))}
      </ul>
    </>
  );
}
