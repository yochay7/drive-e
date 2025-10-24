'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { evDatabase, getEVById } from '@/data/evs';
import { EVModel } from '@/types/ev';
import {
  XMarkIcon,
  PlusIcon,
  BoltIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const MAX_COMPARE = 3;

export default function ComparePage() {
  const t = useTranslations('compare');
  const tSpecs = useTranslations('vehicles.specs');
  const tDetail = useTranslations('detail');
  const tCommon = useTranslations('common');
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const [selectedEVs, setSelectedEVs] = useState<EVModel[]>([]);
  const [showSelector, setShowSelector] = useState(false);

  // Load EVs from URL params
  useEffect(() => {
    const ids = searchParams.get('ids')?.split(',') || [];
    const evs = ids.map((id) => getEVById(id)).filter((ev): ev is EVModel => ev !== undefined);
    setSelectedEVs(evs);
  }, [searchParams]);

  const updateURL = (evs: EVModel[]) => {
    const ids = evs.map((ev) => ev.id).join(',');
    if (ids) {
      router.push(`/${locale}/compare?ids=${ids}`);
    } else {
      router.push(`/${locale}/compare`);
    }
  };

  const handleAddEV = (ev: EVModel) => {
    if (selectedEVs.length < MAX_COMPARE && !selectedEVs.find((e) => e.id === ev.id)) {
      const newEVs = [...selectedEVs, ev];
      setSelectedEVs(newEVs);
      updateURL(newEVs);
      setShowSelector(false);
    }
  };

  const handleRemoveEV = (evId: string) => {
    const newEVs = selectedEVs.filter((ev) => ev.id !== evId);
    setSelectedEVs(newEVs);
    updateURL(newEVs);
  };

  const handleClearAll = () => {
    setSelectedEVs([]);
    router.push(`/${locale}/compare`);
  };

  if (selectedEVs.length === 0) {
    return (
      <div className="container-custom py-8">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t('subtitle')}</p>

        <div className="text-center py-20">
          <div className="mb-6">
            <BoltIcon className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{t('empty')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('emptyDescription')}</p>
          <Link href={`/${locale}/vehicles`} className="btn-primary">
            {t('selectVehicles')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('comparing', { count: selectedEVs.length })}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        {selectedEVs.length < MAX_COMPARE && (
          <button onClick={() => setShowSelector(!showSelector)} className="btn-primary">
            <PlusIcon className="w-5 h-5 inline mr-2" />
            {t('addMore')}
          </button>
        )}
        <button onClick={handleClearAll} className="btn-secondary">
          <XMarkIcon className="w-5 h-5 inline mr-2" />
          {t('clear')}
        </button>
      </div>

      {/* Vehicle Selector */}
      {showSelector && (
        <div className="card p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">{t('selectVehicles')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {evDatabase
              .filter((ev) => !selectedEVs.find((e) => e.id === ev.id))
              .map((ev) => (
                <button
                  key={ev.id}
                  onClick={() => handleAddEV(ev)}
                  className="card p-4 hover:shadow-lg transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={ev.images.main}
                        alt={`${ev.brand} ${ev.model}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {ev.brand}
                      </p>
                      <p className="font-semibold">{ev.model}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ${ev.pricing.basePrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Vehicle Headers */}
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-50 dark:bg-dark-card sticky left-0 z-10">
                <div className="w-40"></div>
              </th>
              {selectedEVs.map((ev) => (
                <th key={ev.id} className="p-4 bg-gray-50 dark:bg-dark-card min-w-[280px]">
                  <div className="relative">
                    <button
                      onClick={() => handleRemoveEV(ev.id)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image src={ev.images.main} alt={`${ev.brand} ${ev.model}`} fill className="object-cover" />
                    </div>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                      {ev.brand}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{ev.model}</h3>
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ${ev.pricing.basePrice.toLocaleString()}
                    </p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Rating */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tDetail('averageRating')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{ev.averageRating || 'N/A'}</span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Range */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('range')} (EPA)
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center font-semibold">
                  {ev.specifications.range.epa} mi
                </td>
              ))}
            </tr>

            {/* Battery */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('battery')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.battery.capacity} kWh
                </td>
              ))}
            </tr>

            {/* Acceleration */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('acceleration')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.performance.acceleration}s
                </td>
              ))}
            </tr>

            {/* Top Speed */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('topSpeed')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.performance.topSpeed} mph
                </td>
              ))}
            </tr>

            {/* Horsepower */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tDetail('performance.horsepower')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.performance.horsepower} hp
                </td>
              ))}
            </tr>

            {/* Charging Speed */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('charging')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.charging.maxChargingSpeed} kW
                </td>
              ))}
            </tr>

            {/* Charging Time */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tDetail('charging.time')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.charging.time0to80} min
                </td>
              ))}
            </tr>

            {/* Seats */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('seats')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.seats}
                </td>
              ))}
            </tr>

            {/* Drivetrain */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tSpecs('drivetrain')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.drivetrain}
                </td>
              ))}
            </tr>

            {/* Cargo */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0">
                {tDetail('dimensions.cargo')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  {ev.specifications.cargo} cu ft
                </td>
              ))}
            </tr>

            {/* View Details */}
            <tr className="border-t border-gray-200 dark:border-dark-border">
              <td className="p-4 bg-gray-50 dark:bg-dark-card sticky left-0"></td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center">
                  <Link href={`/${locale}/vehicles/${ev.slug}`} className="btn-primary w-full">
                    {tCommon('viewDetails')}
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

