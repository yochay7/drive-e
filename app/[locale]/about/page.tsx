import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('title')}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('mission.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('mission.description')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('features.title')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('features.compare')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('features.specs')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('features.multilingual')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('features.darkMode')}</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('contact.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('contact.description')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

