import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function SearchBar() {
  return (
    <div className="flex w-full items-center rounded-md bg-white pl-6 shadow-md focus-within:outline dark:bg-slate-800 max-md:mb-6 md:max-w-[480px]">
      <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6" />
      <input
        type="text"
        placeholder="Search by Country, Capital"
        className="w-full bg-transparent py-3.5 pl-6 focus:outline-none md:py-4"
      />
    </div>
  );
}
