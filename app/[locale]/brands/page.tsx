import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getAllBrands, getEVsByBrand } from '@/data/evs';
import { BoltIcon } from '@heroicons/react/24/outline';

export default async function BrandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('brands');
  const brands = getAllBrands();

  const brandStats = brands.map((brand) => {
    const vehicles = getEVsByBrand(brand);
    const avgPrice =
      vehicles.reduce((sum, ev) => sum + ev.pricing.basePrice, 0) / vehicles.length;
    const maxRange = Math.max(...vehicles.map((ev) => ev.specifications.range.epa));
    
    return {
      name: brand,
      count: vehicles.length,
      avgPrice: Math.round(avgPrice),
      maxRange,
    };
  });

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandStats.map((brand) => (
          <Link
            key={brand.name}
            href={`/${locale}/vehicles?brand=${encodeURIComponent(brand.name)}`}
            className="card p-6 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
                  {brand.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {brand.count} {brand.count === 1 ? t('model') : t('models')}
                </p>
              </div>
              <BoltIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('avgPrice')}</span>
                <span className="font-semibold">${brand.avgPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('maxRange')}</span>
                <span className="font-semibold">{brand.maxRange} mi</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
              <span className="text-primary-600 dark:text-primary-400 font-semibold group-hover:underline">
                {t('viewModels')} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

