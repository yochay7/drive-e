'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { LanguageIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export function LanguageSelector() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  const handleLocaleChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
          <LanguageIcon className="w-5 h-5" />
          <span className="hidden sm:inline">{currentLocale.flag}</span>
          <span className="hidden md:inline">{currentLocale.name}</span>
          <ChevronDownIcon className="w-4 h-4" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-white dark:bg-dark-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locales.map((loc) => (
              <Menu.Item key={loc.code}>
                {({ active }) => (
                  <button
                    onClick={() => handleLocaleChange(loc.code)}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } ${
                      locale === loc.code ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                    } flex items-center gap-3 px-4 py-2 text-sm w-full text-left`}
                  >
                    <span className="text-xl">{loc.flag}</span>
                    <span>{loc.name}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

