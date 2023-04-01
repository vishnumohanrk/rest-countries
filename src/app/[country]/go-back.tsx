'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export function GoBack() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="my-6 flex items-center rounded-md bg-white py-2 pl-8 pr-10 font-medium shadow-md dark:bg-slate-800 md:my-8"
    >
      <ArrowLeftIcon className="mr-2 h-5 w-5" />
      Back
    </button>
  );
}
