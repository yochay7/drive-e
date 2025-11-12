import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getEVBySlug, evDatabase } from '@/data/evs';
import {
  BoltIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { 
  ArrowLeftIcon,
  Battery100Icon,
  CubeIcon,
} from '@heroicons/react/24/outline';

export async function generateStaticParams() {
  const locales = ['en', 'es', 'fr', 'de', 'zh'];
  
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const ev of evDatabase) {
      params.push({
        locale,
        slug: ev.slug,
      });
    }
  }
  
  return params;
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const ev = getEVBySlug(slug);

  if (!ev) {
    notFound();
  }

  const t = await getTranslations('detail');
  const tSpecs = await getTranslations('vehicles.specs');
  const tNav = await getTranslations('nav');

  return (
    <div className="container-custom py-8">
      {/* Back Button */}
      <Link
        href={`/${locale}/vehicles`}
        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        {tNav('vehicles')}
      </Link>

      {/* Header */}
      <div className="mb-12">
        {/* Info */}
        <div>
          <div className="mb-4">
            <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
              {ev.brand}
            </p>
            <h1 className="text-4xl font-bold mb-2">{ev.model}</h1>
            <p className="text-gray-600 dark:text-gray-400">{ev.description.full}</p>
          </div>

          {/* Rating */}
          {ev.averageRating && (
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(ev.averageRating || 0)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{ev.averageRating}</span>
              <span className="text-gray-600 dark:text-gray-400">
                {t('basedOn', { count: ev.reviews?.length || 0 })}
              </span>
            </div>
          )}

          {/* Price */}
          <div className="card p-6 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{tSpecs('price')}</p>
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              ${ev.pricing.basePrice.toLocaleString()}
            </p>
            {ev.pricing.maxPrice && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Up to ${ev.pricing.maxPrice.toLocaleString()}
              </p>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <BoltIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{tSpecs('range')}</p>
                  <p className="text-lg font-bold">{ev.specifications.range.epa} mi</p>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{tSpecs('acceleration')}</p>
                  <p className="text-lg font-bold">{ev.specifications.performance.acceleration}s</p>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <Battery100Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{tSpecs('battery')}</p>
                  <p className="text-lg font-bold">{ev.specifications.battery.capacity} kWh</p>
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <CubeIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{tSpecs('seats')}</p>
                  <p className="text-lg font-bold">{ev.specifications.seats}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-6">
            <span
              className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                ev.availability.status === 'available'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                  : ev.availability.status === 'coming-soon'
                  ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
              }`}
            >
              {ev.availability.status === 'available' && t('available')}
              {ev.availability.status === 'coming-soon' && t('comingSoon')}
              {ev.availability.status === 'pre-order' && t('preOrder')}
            </span>
          </div>
        </div>
      </div>

      {/* Detailed Specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Battery */}
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Battery100Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            {t('battery.title')}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('battery.capacity')}</span>
              <span className="font-semibold">{ev.specifications.battery.capacity} kWh</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('battery.type')}</span>
              <span className="font-semibold">{ev.specifications.battery.type}</span>
            </div>
          </div>
        </div>

        {/* Range */}
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BoltIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            {t('range.title')}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('range.epa')}</span>
              <span className="font-semibold">{ev.specifications.range.epa} mi</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('range.wltp')}</span>
              <span className="font-semibold">{ev.specifications.range.wltp} km</span>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <RocketLaunchIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            {t('performance.title')}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('performance.topSpeed')}</span>
              <span className="font-semibold">{ev.specifications.performance.topSpeed} mph</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('performance.acceleration')}</span>
              <span className="font-semibold">{ev.specifications.performance.acceleration}s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('performance.horsepower')}</span>
              <span className="font-semibold">{ev.specifications.performance.horsepower} hp</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('performance.torque')}</span>
              <span className="font-semibold">{ev.specifications.performance.torque} lb-ft</span>
            </div>
          </div>
        </div>

        {/* Charging */}
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Battery100Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            {t('charging.title')}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('charging.dcFast')}</span>
              <span className="font-semibold">
                {ev.specifications.charging.dcFastCharging ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('charging.maxSpeed')}</span>
              <span className="font-semibold">{ev.specifications.charging.maxChargingSpeed} kW</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('charging.time')}</span>
              <span className="font-semibold">{ev.specifications.charging.time0to80} min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="card p-6 mb-12">
        <h3 className="text-2xl font-bold mb-4">{t('features')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {ev.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Safety */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ShieldCheckIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          {t('safety')}
        </h3>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400 mb-2">{t('safetyRating')}</p>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-8 h-8 ${
                  i < ev.safety.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ev.safety.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

