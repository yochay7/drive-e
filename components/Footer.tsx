'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { BoltIcon } from '@heroicons/react/24/outline';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const pathname = usePathname();

  // Extract locale from pathname
  const locale = pathname.split('/')[1] || 'en';

  const quickLinks = [
    { name: tNav('home'), href: `/${locale}` },
    { name: tNav('about'), href: `/${locale}/about` },
  ];

  const legalLinks = [
    { name: t('privacy'), href: `/${locale}/privacy` },
    { name: t('terms'), href: `/${locale}/terms` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 text-2xl font-bold gradient-text mb-4">
              <BoltIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <span>Drive-E</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-border text-center text-gray-600 dark:text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

