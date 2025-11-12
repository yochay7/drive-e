/**
 * Determines if the user's location uses metric system by default
 * Based on browser locale/language settings
 */
export function useMetricByDefault(): boolean {
  // Countries that use Imperial system (miles, mph, etc.)
  const imperialCountries = ['US', 'LR', 'MM']; // United States, Liberia, Myanmar
  
  // Try to get the user's country from browser locale
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    // Get browser language/locale (e.g., 'en-US', 'en-GB', 'fr-FR')
    const locale = navigator.language || navigator.languages?.[0] || 'en-US';
    
    // Extract country code (last 2 characters after hyphen)
    const countryCode = locale.split('-')[1]?.toUpperCase();
    
    // If country code exists and is in imperial list, return false (use imperial)
    if (countryCode && imperialCountries.includes(countryCode)) {
      return false;
    }
    
    // Default to metric for all other locations
    return true;
  }
  
  // Server-side default to metric (most common worldwide)
  return true;
}

/**
 * Get the user's unit preference from localStorage or location-based default
 */
export function getUnitPreference(): boolean {
  if (typeof window !== 'undefined') {
    // Check if user has a saved preference
    const saved = localStorage.getItem('useMetric');
    if (saved !== null) {
      return saved === 'true';
    }
  }
  
  // No saved preference, use location-based default
  return useMetricByDefault();
}

/**
 * Save the user's unit preference to localStorage
 */
export function saveUnitPreference(useMetric: boolean): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('useMetric', String(useMetric));
  }
}




