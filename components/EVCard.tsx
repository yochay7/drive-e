'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { EVModel } from '@/types/ev';
import { StarIcon, BoltIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface EVCardProps {
  ev: EVModel;
  locale: string;
}

export function EVCard({ ev, locale }: EVCardProps) {
  const t = useTranslations('vehicles.specs');

  return (
    <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={ev.images.main}
          alt={`${ev.brand} ${ev.model}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {ev.averageRating && (
          <div className="absolute top-3 right-3 bg-white dark:bg-dark-card px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">{ev.averageRating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Model */}
        <div className="mb-3">
          <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
            {ev.brand}
          </p>
          <h3 className="text-xl font-bold">{ev.model}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {ev.description.short}
          </p>
        </div>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <BoltIcon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('range')}</p>
              <p className="text-sm font-semibold">{ev.specifications.range.epa} mi</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('acceleration')}</p>
            <p className="text-sm font-semibold">{ev.specifications.performance.acceleration}s</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('seats')}</p>
            <p className="text-sm font-semibold">{ev.specifications.seats}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('drivetrain')}</p>
            <p className="text-sm font-semibold">{ev.specifications.drivetrain}</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-border">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('price')}</p>
            <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
              ${ev.pricing.basePrice.toLocaleString()}
            </p>
          </div>
          <Link
            href={`/${locale}/vehicles/${ev.slug}`}
            className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
          >
            View
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

