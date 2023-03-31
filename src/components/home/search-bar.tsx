import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ onChange, value }: SearchBarProps) {
  return (
    <div className="flex w-full items-center rounded-md bg-white pl-6 shadow-md focus-within:outline dark:bg-slate-800 max-md:mb-6 md:max-w-[480px]">
      <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by Country, Capital"
        className="w-full bg-transparent px-6 py-3.5 focus:outline-none md:py-4"
      />
    </div>
  );
}
