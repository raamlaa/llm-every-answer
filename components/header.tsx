'use client';

import { useState } from 'react';
import { IconExternalLink, IconGitHub } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 border-b h-14 shrink-0  bg-white backdrop-blur-xl">
        <span className="inline-flex items-center home-links whitespace-nowrap">
          <a href="/" rel="noopener">
            <span className="block sm:inline text-lg sm:text-xl lg:text-2xl font-semibold  text-black">LLM <span className="linear-wipe"> Every</span>Answer</span>
          </a>
        </span>
        <div className="flex items-center justify-end space-x-2">

          <Button variant="outline" asChild>
            <a
              target="_blank"
              href="https://https://github.com/raamlaa"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-2 px-4 rounded shadow"
            >
              <IconGitHub />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              target="_blank"
              href="https://portfolio-ramla-azouni.vercel.app/"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-2 px-4 rounded shadow"
            >
              <IconExternalLink /> Portfolio
            </a>
          </Button>
        </div>
      </header>
      
    </>
  );
}
