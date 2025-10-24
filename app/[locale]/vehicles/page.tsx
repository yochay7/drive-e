'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { EVCard } from '@/components/EVCard';
import { evDatabase, filterEVs, sortEVs, getAllBrands } from '@/data/evs';
import { FilterOptions, SortOption } from '@/types/ev';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';

export default function VehiclesPage() {
  const t = useTranslations('vehicles');
  const params = useParams();
  const locale = params.locale as string;

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');
  const [filters, setFilters] = useState<Partial<FilterOptions>>({
    brands: [],
    priceRange: [0, 200000],
    rangeMin: 0,
    seats: [],
    drivetrain: [],
  });

  const brands = getAllBrands();
  const availableSeats = [4, 5, 7];
  const drivetrains = ['RWD', 'FWD', 'AWD'];

  // Filter and sort EVs
  const filteredAndSortedEVs = useMemo(() => {
    let evs = evDatabase;

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      evs = evs.filter(
        (ev) =>
          ev.brand.toLowerCase().includes(query) ||
          ev.model.toLowerCase().includes(query) ||
          ev.description.short.toLowerCase().includes(query)
      );
    }

    // Apply filters (pass the search-filtered results)
    evs = filterEVs(filters, evs);

    // Apply sorting
    evs = sortEVs(evs, sortBy);

    return evs;
  }, [searchQuery, filters, sortBy]);

  const handleBrandToggle = (brand: string) => {
    setFilters((prev) => {
      const brands = prev.brands || [];
      const newBrands = brands.includes(brand)
        ? brands.filter((b) => b !== brand)
        : [...brands, brand];
      return { ...prev, brands: newBrands };
    });
  };

  const handleSeatsToggle = (seats: number) => {
    setFilters((prev) => {
      const currentSeats = prev.seats || [];
      const newSeats = currentSeats.includes(seats)
        ? currentSeats.filter((s) => s !== seats)
        : [...currentSeats, seats];
      return { ...prev, seats: newSeats };
    });
  };

  const handleDrivetrainToggle = (drivetrain: string) => {
    setFilters((prev) => {
      const currentDrivetrain = prev.drivetrain || [];
      const newDrivetrain = currentDrivetrain.includes(drivetrain)
        ? currentDrivetrain.filter((d) => d !== drivetrain)
        : [...currentDrivetrain, drivetrain];
      return { ...prev, drivetrain: newDrivetrain };
    });
  };

  const clearFilters = () => {
    setFilters({
      brands: [],
      priceRange: [0, 200000],
      rangeMin: 0,
      seats: [],
      drivetrain: [],
    });
    setSearchQuery('');
  };

  const hasActiveFilters =
    searchQuery ||
    (filters.brands && filters.brands.length > 0) ||
    (filters.seats && filters.seats.length > 0) ||
    (filters.drivetrain && filters.drivetrain.length > 0) ||
    (filters.rangeMin && filters.rangeMin > 0) ||
    (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 200000));

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      {/* Search and Controls */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('filters.title')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-secondary flex items-center gap-2 justify-center"
        >
          <FunnelIcon className="w-5 h-5" />
          {t('filters.title')}
        </button>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="rating-desc">{t('sort.ratingDesc')}</option>
          <option value="price-asc">{t('sort.priceAsc')}</option>
          <option value="price-desc">{t('sort.priceDesc')}</option>
          <option value="range-desc">{t('sort.rangeDesc')}</option>
          <option value="newest">{t('sort.newest')}</option>
        </select>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{t('filters.title')}</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
              >
                <XMarkIcon className="w-4 h-4" />
                {t('filters.clearAll')}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('filters.brand')}</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.brands?.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Range Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('filters.range')}
              </label>
              <input
                type="range"
                min="0"
                max="500"
                step="25"
                value={filters.rangeMin || 0}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, rangeMin: parseInt(e.target.value) }))
                }
                className="w-full"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {filters.rangeMin || 0}+ {t('filters.miles')}
              </div>
            </div>

            {/* Seats Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('filters.seats')}</label>
              <div className="space-y-2">
                {availableSeats.map((seats) => (
                  <label key={seats} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.seats?.includes(seats)}
                      onChange={() => handleSeatsToggle(seats)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{seats} {t('filters.seats')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Drivetrain Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('filters.drivetrain')}</label>
              <div className="space-y-2">
                {drivetrains.map((drivetrain) => (
                  <label key={drivetrain} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.drivetrain?.includes(drivetrain)}
                      onChange={() => handleDrivetrainToggle(drivetrain)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{drivetrain}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          {filteredAndSortedEVs.length} {filteredAndSortedEVs.length === 1 ? 'vehicle' : 'vehicles'} found
        </p>
      </div>

      {/* EV Table */}
      {filteredAndSortedEVs.length > 0 ? (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    0-60 mph
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Battery
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-dark-bg divide-y divide-gray-200 dark:divide-dark-border">
                {filteredAndSortedEVs.map((ev) => (
                  <tr key={ev.id} className="hover:bg-gray-50 dark:hover:bg-dark-card transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-24 mr-4">
                          <img
                            src={ev.images.main}
                            alt={`${ev.brand} ${ev.model}`}
                            className="h-16 w-24 object-cover rounded"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {ev.brand}
                          </div>
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            {ev.model}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {ev.specifications.drivetrain} • {ev.specifications.seats} seats
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {ev.specifications.range.epa} mi
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">EPA</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {ev.specifications.performance.acceleration}s
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {ev.specifications.battery.capacity} kWh
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        ${ev.pricing.basePrice.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Starting at</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {ev.averageRating || 'N/A'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={`/${locale}/vehicles/${ev.slug}`}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        View Details →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            No vehicles found matching your criteria
          </p>
          <button onClick={clearFilters} className="btn-primary">
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

