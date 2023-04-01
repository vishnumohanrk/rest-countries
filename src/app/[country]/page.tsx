/* eslint-disable @next/next/no-img-element */
import { getCountryDetails } from '@/lib/api';

import { BorderList } from './border-list';
import { DetailsList } from './details-list';
import { GoBack } from './go-back';

type PageProps = {
  params: { country: string };
};

export default async function CountryPage({ params: { country } }: PageProps) {
  const { name, flag, borders, ...rest } = await getCountryDetails(country);

  return (
    <>
      <GoBack />
      <section className="items-start gap-4 sm:flex lg:gap-8">
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className="aspect-video w-full object-cover sm:sticky sm:top-24 sm:w-1/2"
        />
        <div className="flex flex-col self-stretch max-sm:mt-8 sm:w-1/2">
          <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
            {name}
          </h2>
          <DetailsList {...rest} />
          <BorderList borders={borders} />
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({ params: { country } }: PageProps) {
  const { name } = await getCountryDetails(country);

  return {
    title: `${name} | Frontend Mentor | Rest Countries`,
  };
}
