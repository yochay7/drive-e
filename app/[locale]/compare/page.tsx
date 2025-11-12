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
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const MAX_COMPARE = 5;

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
  const [searchQuery, setSearchQuery] = useState('');

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

  // Helper function to determine if value is best (higher is better)
  const isBest = (value: number, allValues: number[], lowerIsBetter = false) => {
    if (allValues.length <= 1) return false;
    const bestValue = lowerIsBetter ? Math.min(...allValues) : Math.max(...allValues);
    return value === bestValue;
  };

  // Filter EVs by search query
  const filteredEVs = evDatabase.filter((ev) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      ev.brand.toLowerCase().includes(query) ||
      ev.model.toLowerCase().includes(query) ||
      `${ev.brand} ${ev.model}`.toLowerCase().includes(query)
    );
  });

  // Get all values for comparison
  const getNumericValues = (accessor: (ev: EVModel) => number) => {
    return selectedEVs.map(accessor);
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{t('selectVehicles')}</h3>
            <button
              onClick={() => setShowSelector(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="mb-4 relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {filteredEVs
              .filter((ev) => !selectedEVs.find((e) => e.id === ev.id))
              .map((ev) => (
                <button
                  key={ev.id}
                  onClick={() => handleAddEV(ev)}
                  className="card p-4 hover:shadow-lg transition-all text-left hover:border-primary-500 dark:hover:border-primary-500"
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
          {filteredEVs.filter((ev) => !selectedEVs.find((e) => e.id === ev.id)).length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {t('noResults')}
            </p>
          )}
        </div>
      )}

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Vehicle Headers */}
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-100 dark:bg-dark-card sticky left-0 z-10 border-r border-gray-200 dark:border-dark-border">
                <div className="w-40 font-bold text-lg">{t('specifications')}</div>
              </th>
              {selectedEVs.map((ev) => (
                <th key={ev.id} className="p-4 bg-gray-100 dark:bg-dark-card min-w-[250px] border-r border-gray-200 dark:border-dark-border">
                  <div className="relative">
                    <button
                      onClick={() => handleRemoveEV(ev.id)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all z-20 shadow-lg"
                      title="Remove vehicle"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden shadow-md">
                      <Image src={ev.images.main} alt={`${ev.brand} ${ev.model}`} fill className="object-cover" />
                    </div>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                      {ev.brand}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{ev.model}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{ev.year}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* PRICING SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                💰 {t('pricing')}
              </td>
            </tr>
            
            {/* Base Price */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {t('basePrice')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.pricing.basePrice);
                const isWinner = isBest(ev.pricing.basePrice, values, true);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    ${ev.pricing.basePrice.toLocaleString()}
                  </td>
                );
              })}
            </tr>

            {/* Max Price */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {t('maxPrice')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.pricing.maxPrice || e.pricing.basePrice);
                const isWinner = isBest(ev.pricing.maxPrice || ev.pricing.basePrice, values, true);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.pricing.maxPrice ? `$${ev.pricing.maxPrice.toLocaleString()}` : 'N/A'}
                  </td>
                );
              })}
            </tr>

            {/* RATING & SAFETY SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                ⭐ {t('ratingSafety')}
              </td>
            </tr>

            {/* Average Rating */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('averageRating')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.averageRating || 0);
                const isWinner = isBest(ev.averageRating || 0, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className={`font-semibold ${isWinner ? 'text-green-800 dark:text-green-300' : ''}`}>
                        {ev.averageRating || 'N/A'}
                      </span>
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Safety Rating */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('safetyRating')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.safety.rating);
                const isWinner = isBest(ev.safety.rating, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.safety.rating}/5 ⭐
                  </td>
                );
              })}
            </tr>

            {/* BATTERY & RANGE SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                🔋 {t('batteryRange')}
              </td>
            </tr>

            {/* Battery Capacity */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('battery')} (kWh)
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.battery.capacity);
                const isWinner = isBest(ev.specifications.battery.capacity, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.battery.capacity} kWh
                  </td>
                );
              })}
            </tr>

            {/* Battery Type */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('battery.type')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center text-sm border-r border-gray-200 dark:border-dark-border">
                  {ev.specifications.battery.type}
                </td>
              ))}
            </tr>

            {/* EPA Range */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('range')} (EPA)
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.range.epa);
                const isWinner = isBest(ev.specifications.range.epa, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.range.epa} mi
                  </td>
                );
              })}
            </tr>

            {/* WLTP Range */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('range')} (WLTP)
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.range.wltp);
                const isWinner = isBest(ev.specifications.range.wltp, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.range.wltp} km
                  </td>
                );
              })}
            </tr>

            {/* PERFORMANCE SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                🏁 {tDetail('performance.title')}
              </td>
            </tr>

            {/* Acceleration */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('acceleration')} (0-60 mph)
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.performance.acceleration);
                const isWinner = isBest(ev.specifications.performance.acceleration, values, true);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.performance.acceleration}s
                  </td>
                );
              })}
            </tr>

            {/* Top Speed */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('topSpeed')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.performance.topSpeed);
                const isWinner = isBest(ev.specifications.performance.topSpeed, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.performance.topSpeed} mph
                  </td>
                );
              })}
            </tr>

            {/* Horsepower */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('performance.horsepower')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.performance.horsepower);
                const isWinner = isBest(ev.specifications.performance.horsepower, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.performance.horsepower} hp
                  </td>
                );
              })}
            </tr>

            {/* Torque */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('performance.torque')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.performance.torque);
                const isWinner = isBest(ev.specifications.performance.torque, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.performance.torque} lb-ft
                  </td>
                );
              })}
            </tr>

            {/* CHARGING SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                ⚡ {tDetail('charging.title')}
              </td>
            </tr>

            {/* DC Fast Charging */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('charging.dcFast')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center border-r border-gray-200 dark:border-dark-border">
                  {ev.specifications.charging.dcFastCharging ? '✅ Yes' : '❌ No'}
                </td>
              ))}
            </tr>

            {/* Max Charging Speed */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('charging.maxSpeed')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.charging.maxChargingSpeed);
                const isWinner = isBest(ev.specifications.charging.maxChargingSpeed, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.charging.maxChargingSpeed} kW
                  </td>
                );
              })}
            </tr>

            {/* Charging Time 0-80% */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('charging.time')} (0-80%)
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.charging.time0to80);
                const isWinner = isBest(ev.specifications.charging.time0to80, values, true);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.charging.time0to80} min
                  </td>
                );
              })}
            </tr>

            {/* DIMENSIONS SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                📏 {tDetail('dimensions.title')}
              </td>
            </tr>

            {/* Seats */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('seats')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.seats);
                const isWinner = isBest(ev.specifications.seats, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.seats}
                  </td>
                );
              })}
            </tr>

            {/* Drivetrain */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tSpecs('drivetrain')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border">
                  {ev.specifications.drivetrain}
                </td>
              ))}
            </tr>

            {/* Cargo Space */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('dimensions.cargo')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.cargo);
                const isWinner = isBest(ev.specifications.cargo, values);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.cargo} cu ft
                  </td>
                );
              })}
            </tr>

            {/* Weight */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {tDetail('dimensions.weight')}
              </td>
              {selectedEVs.map((ev) => {
                const values = getNumericValues((e) => e.specifications.weight);
                const isWinner = isBest(ev.specifications.weight, values, true);
                return (
                  <td
                    key={ev.id}
                    className={`p-4 text-center font-semibold border-r border-gray-200 dark:border-dark-border ${
                      isWinner ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''
                    }`}
                  >
                    {ev.specifications.weight.toLocaleString()} lbs
                  </td>
                );
              })}
            </tr>

            {/* AVAILABILITY SECTION */}
            <tr className="bg-gray-50 dark:bg-dark-border">
              <td colSpan={selectedEVs.length + 1} className="p-3 font-bold text-lg border-t-2 border-gray-300 dark:border-gray-600">
                🌍 {tDetail('availability')}
              </td>
            </tr>

            {/* Status */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {t('status')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center border-r border-gray-200 dark:border-dark-border">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      ev.availability.status === 'available'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : ev.availability.status === 'pre-order'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}
                  >
                    {ev.availability.status === 'available'
                      ? tDetail('available')
                      : ev.availability.status === 'pre-order'
                      ? tDetail('preOrder')
                      : tDetail('comingSoon')}
                  </span>
                </td>
              ))}
            </tr>

            {/* Markets */}
            <tr className="border-t border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card/50">
              <td className="p-4 font-semibold bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border">
                {t('markets')}
              </td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center text-sm border-r border-gray-200 dark:border-dark-border">
                  {ev.availability.markets.join(', ')}
                </td>
              ))}
            </tr>

            {/* View Details */}
            <tr className="border-t-2 border-gray-300 dark:border-gray-600">
              <td className="p-4 bg-gray-50 dark:bg-dark-card sticky left-0 border-r border-gray-200 dark:border-dark-border"></td>
              {selectedEVs.map((ev) => (
                <td key={ev.id} className="p-4 text-center border-r border-gray-200 dark:border-dark-border">
                  <Link href={`/${locale}/vehicles/${ev.slug}`} className="btn-primary w-full block">
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

