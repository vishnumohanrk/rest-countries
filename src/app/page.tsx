import { HomePage } from '@/components/home';
import { getCountryList } from '@/lib/api';

export default async function AppHome() {
  const countryList = await getCountryList();

  return <HomePage fullList={countryList} />;
}
