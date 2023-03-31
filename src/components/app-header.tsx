import { ThemeToggle } from './theme-toggle';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-800">
      <div className="mx-auto flex h-20 w-full max-w-screen-xl items-center justify-between px-4">
        <h1 className="truncate text-lg font-bold sm:text-2xl">
          Where in the world?
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
