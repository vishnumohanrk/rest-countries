'use client';

import { MoonIcon as MoonOutline } from '@heroicons/react/24/outline';
import { MoonIcon as MoonSolid } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleClick() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }

  const Icon = resolvedTheme === 'light' ? MoonOutline : MoonSolid;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle Dark Mode"
      className="flex h-full items-center font-semibold tracking-wide"
    >
      <Icon aria-hidden className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
      Dark Mode
    </button>
  );
}
