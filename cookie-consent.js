/**
 * Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition with Dark Mode
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 * - Premium UI with enhanced UX
 * - Dark mode support
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // Theme configuration
    theme: {
        mode: 'light', // Default mode: 'light' or 'dark'
        allowToggle: true, // Allow users to switch between light/dark mode
    },
    
    // UI Styling configuration
    uiStyles: {
        // Main banner styles
        banner: {
            background: '#ffffff',
            backgroundDark: '#1a1a1a',
            border: 'none',
            borderRadius: '12px',
            padding: '24px',
            width: '440px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
            text: {
                titleColor: '#2c3e50',
                titleColorDark: '#ffffff',
                titleFontWeight: '600',
                descriptionColor: '#7f8c8d',
                descriptionColorDark: '#a0a0a0',
                descriptionFontWeight: 'normal'
            }
        },
        
        // Button styles
        buttons: {
            accept: {
                background: '#2ecc71',
                backgroundHover: '#27ae60',
                border: '1px solid #2ecc71',
                borderRadius: '8px',
                color: '#ffffff',
                colorHover: '#ffffff',
                fontWeight: '600',
                padding: '12px 20px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: '0 2px 12px rgba(46, 204, 113, 0.3)',
                boxShadowHover: '0 4px 16px rgba(46, 204, 113, 0.4)'
            },
            reject: {
                background: '#ffffff',
                backgroundHover: '#ffeeed',
                border: '1px solid #e74c3c',
                borderRadius: '8px',
                color: '#e74c3c',
                colorHover: '#e74c3c',
                fontWeight: '600',
                padding: '12px 20px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: 'none',
                boxShadowHover: '0 2px 8px rgba(231, 76, 60, 0.15)'
            },
            adjust: {
                background: '#f8f9fa',
                backgroundHover: '#f0f2f5',
                backgroundDark: '#2d2d2d',
                backgroundDarkHover: '#3a3a3a',
                border: '1px solid #e0e0e0',
                borderDark: '1px solid #444444',
                borderRadius: '8px',
                color: '#333333',
                colorHover: '#333333',
                colorDark: '#ffffff',
                colorDarkHover: '#ffffff',
                fontWeight: '600',
                padding: '12px 20px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: 'none',
                boxShadowHover: '0 2px 8px rgba(0, 0, 0, 0.08)'
            },
            save: {
                background: '#3498db',
                backgroundHover: '#2980b9',
                border: '1px solid #3498db',
                borderRadius: '8px',
                color: '#ffffff',
                colorHover: '#ffffff',
                fontWeight: '600',
                padding: '12px 20px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: 'none',
                boxShadowHover: '0 5px 10px rgba(0,0,0,0.15)',
                backgroundGradient: 'linear-gradient(to right, #3498db, #2980b9)'
            }
        },
        
        // Admin dashboard styles
        dashboard: {
            background: '#ffffff',
            backgroundDark: '#1a1a1a',
            border: 'none',
            borderRadius: '12px',
            padding: '25px 30px',
            width: '900px',
            maxHeight: '600px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            text: {
                titleColor: '#2c3e50',
                titleColorDark: '#ffffff',
                titleFontWeight: '600'
            }
        },
        
        // Admin button styles
        adminButton: {
            background: '#3498db',
            backgroundHover: '#2980b9',
            border: '2px solid white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            boxShadowHover: '0 8px 25px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
        }
    },
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: [],
        showLanguageSelector: true,
        autoDetectLanguage: true
    },
    
    // Geo-targeting configuration
    geoConfig: {
        allowedCountries: [],
        allowedRegions: [],
        allowedCities: [],
        blockedCountries: [],
        blockedRegions: [],
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30,
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123',
        passwordCookieDuration: 365
    },
    
    // Banner behavior
    behavior: {
        autoShow: true,
        bannerDelay: 0,
        showFloatingButton: true,
        showAdminButton: true,
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: true,
        floatingButtonPosition: 'right',
        adminButtonPosition: 'left',
        bannerPosition: 'right'
    },
    
    // UI Theme
    uiTheme: 'default'
};

// ============== COLOR SCHEMES ============== //
const colorSchemes = {
    light: {
        primary: '#2ecc71',
        secondary: '#3498db',
        danger: '#e74c3c',
        textDark: '#2c3e50',
        textLight: '#7f8c8d',
        background: '#ffffff',
        toggleActive: '#2ecc71',
        toggleInactive: '#bdc3c7'
    },
    dark: {
        primary: '#27ae60',
        secondary: '#2980b9',
        danger: '#c0392b',
        textDark: '#ffffff',
        textLight: '#a0a0a0',
        background: '#1a1a1a',
        toggleActive: '#27ae60',
        toggleInactive: '#4a4a4a'
    },
    classic: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        danger: '#f44336',
        textDark: '#212121',
        textLight: '#757575',
        background: '#ffffff',
        toggleActive: '#4CAF50',
        toggleInactive: '#9E9E9E'
    }
};

// ============== COOKIE DATABASE ============== //
const cookieDatabase = {
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// ============== TRANSLATIONS ============== //
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
    },
    fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours",
        passwordPrompt: "Entrez le mot de passe pour voir les analyses",
        passwordSubmit: "Soumettre",
        passwordIncorrect: "Mot de passe incorrect",
        dashboardTitle: "Tableau de bord des analyses de consentement",
        darkMode: "Mode sombre",
        lightMode: "Mode clair"
    }
};

// ============== COUNTRY TO LANGUAGE MAPPING ============== //
const countryLanguageMap = {
    'AT': 'de', 'BE': 'nl', 'BE': 'fr', 'BG': 'bg', 'HR': 'hr', 'CY': 'el', 'CZ': 'cs', 'DK': 'da', 'EE': 'et',
    'FI': 'fi', 'FR': 'fr', 'DE': 'de', 'GR': 'el', 'HU': 'hu', 'IE': 'en', 'IT': 'it', 'LV': 'lv', 'LT': 'lt',
    'LU': 'fr', 'LU': 'de', 'MT': 'mt', 'NL': 'nl', 'PL': 'pl', 'PT': 'pt', 'RO': 'ro', 'SK': 'sk', 'SI': 'sl',
    'ES': 'es', 'SE': 'sv', 'AL': 'en', 'BA': 'en', 'IS': 'en', 'LI': 'de', 'MK': 'en', 'NO': 'en', 'RS': 'en',
    'CH': 'de', 'CH': 'fr', 'CH': 'it', 'UA': 'uk', 'GB': 'en', 'US': 'en', 'CA': 'en', 'CA': 'fr', 'AU': 'en',
    'NZ': 'en', 'ZA': 'en', 'IN': 'en', 'CN': 'zh', 'JP': 'ja', 'KR': 'ko', 'BR': 'pt', 'MX': 'es', 'AR': 'es', 'RU': 'ru'
};

// ============== ANALYTICS STORAGE ============== //
let consentAnalytics = {
    total: { accepted: 0, rejected: 0, custom: 0 },
    daily: {},
    weekly: {},
    monthly: {}
};

let isDashboardAuthenticated = false;
let currentThemeMode = config.theme.mode;

// ============== MAIN IMPLEMENTATION ============== //
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Load analytics data
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
    
    // Load theme preference
    const savedTheme = getCookie('theme_preference');
    if (savedTheme) {
        currentThemeMode = savedTheme;
    }
}

// Save analytics data
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update consent stats
function updateConsentStats(status) {
    const today = new Date().toISOString().split('T')[0];
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    updateTimeBasedStats(today, status);
    saveAnalyticsData();
}

// Update time-based stats
function updateTimeBasedStats(date, status) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const week = getWeekNumber(dateObj);
    
    const weekKey = `${year}-W${week}`;
    if (!consentAnalytics.weekly[weekKey]) {
        consentAnalytics.weekly[weekKey] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    const monthKey = `${year}-${month}`;
    if (!consentAnalytics.monthly[monthKey]) {
        consentAnalytics.monthly[monthKey] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    if (status === 'accepted') {
        consentAnalytics.weekly[weekKey].accepted++;
        consentAnalytics.monthly[monthKey].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.weekly[weekKey].rejected++;
        consentAnalytics.monthly[monthKey].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.weekly[weekKey].custom++;
        consentAnalytics.monthly[monthKey].custom++;
    }
}

// Get week number
function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    const week1 = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Generate analytics dashboard HTML
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    const total = consentAnalytics.total.accepted + consentAnalytics.total.rejected + consentAnalytics.total.custom;
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

// Generate password prompt HTML
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Check domain allowance
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting
function checkGeoTargeting(geoData) {
    if (config.geoConfig.blockedCountries.length > 0 && config.geoConfig.blockedCountries.includes(geoData.country)) return false;
    if (config.geoConfig.blockedRegions.length > 0 && config.geoConfig.blockedRegions.includes(geoData.region)) return false;
    if (config.geoConfig.blockedCities.length > 0 && config.geoConfig.blockedCities.includes(geoData.city)) return false;
    if (config.geoConfig.allowedCountries.length > 0 && !config.geoConfig.allowedCountries.includes(geoData.country)) return false;
    if (config.geoConfig.allowedRegions.length > 0 && !config.geoConfig.allowedRegions.includes(geoData.region)) return false;
    if (config.geoConfig.allowedCities.length > 0 && !config.geoConfig.allowedCities.includes(geoData.city)) return false;
    return true;
}

// Detect user language
function detectUserLanguage(geoData) {
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) return preferredLanguage;
    }
    
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) return countryLang;
    }
    
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) return browserLang;
    
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages
function getAvailableLanguages() {
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    return Object.keys(translations);
}

// Change language
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
        banner.querySelector('#themeToggleBtn').textContent = currentThemeMode === 'light' ? lang.darkMode : lang.lightMode;
    }
    
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        const categories = {
            'functional': 'essential',
            'analytics': 'analytics',
            'performance': 'performance',
            'advertising': 'advertising',
            'uncategorized': 'other'
        };
        
        for (const [category, key] of Object.entries(categories)) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[key];
                container.querySelector('p').textContent = lang[`${key}Desc`];
            }
        }
        
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
    }
    
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) floatingButton.title = lang.title;
    
    const dashboard = document.querySelector('.analytics-dashboard');
    if (dashboard) dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
    
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Toggle theme
function toggleTheme() {
    currentThemeMode = currentThemeMode === 'light' ? 'dark' : 'light';
    setCookie('theme_preference', currentThemeMode, 365);
    updateTheme();
    
    const lang = translations[document.getElementById('cookieLanguageSelect')?.value || 'en'] || translations.en;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = currentThemeMode === 'light' ? lang.darkMode : lang.lightMode;
    }
}

// Update theme
function updateTheme() {
    const root = document.documentElement;
    const isDark = currentThemeMode === 'dark';
    const colors = isDark ? colorSchemes.dark : (config.uiTheme === 'classic' ? colorSchemes.classic : colorSchemes.light);
    
    root.style.setProperty('--banner-background', isDark ? config.uiStyles.banner.backgroundDark : config.uiStyles.banner.background);
    root.style.setProperty('--banner-title-color', isDark ? config.uiStyles.banner.text.titleColorDark : config.uiStyles.banner.text.titleColor);
    root.style.setProperty('--banner-description-color', isDark ? config.uiStyles.banner.text.descriptionColorDark : config.uiStyles.banner.text.descriptionColor);
    root.style.setProperty('--dashboard-background', isDark ? config.uiStyles.dashboard.backgroundDark : config.uiStyles.dashboard.background);
    root.style.setProperty('--dashboard-title-color', isDark ? config.uiStyles.dashboard.text.titleColorDark : config.uiStyles.dashboard.text.titleColor);
    root.style.setProperty('--button-adjust-background', isDark ? config.uiStyles.buttons.adjust.backgroundDark : config.uiStyles.buttons.adjust.background);
    root.style.setProperty('--button-adjust-background-hover', isDark ? config.uiStyles.buttons.adjust.backgroundDarkHover : config.uiStyles.buttons.adjust.backgroundHover);
    root.style.setProperty('--button-adjust-border', isDark ? config.uiStyles.buttons.adjust.borderDark : config.uiStyles.buttons.adjust.border);
    root.style.setProperty('--button-adjust-color', isDark ? config.uiStyles.buttons.adjust.colorDark : config.uiStyles.buttons.adjust.color);
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    if (config.analytics.enabled) loadAnalyticsData();
    
    let geoData = {};
    if (window.dataLayer && window.dataLayer.length > 0) {
        const geoItem = window.dataLayer.find(item => item.country || item.region || item.city);
        if (geoItem) {
            geoData = {
                country: geoItem.country || '',
                region: geoItem.region || '',
                city: geoItem.city || '',
                language: geoItem.language || ''
            };
        }
    }
    
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    const detectedLanguage = detectUserLanguage(geoData);
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    trackMarketingParameters();
    
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000);
    
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
});

// Handle scroll acceptance
function handleScrollAcceptance() {
    if (getCookie('cookie_consent')) {
        window.removeEventListener('scroll', handleScrollAcceptance);
        return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        window.removeEventListener('scroll', handleScrollAcceptance);
    }
}

// Auto-categorize cookies
function autoCategorizeCookies(uncategorizedCookies) {
    return uncategorizedCookies.map(cookie => {
        const category = determineCookieCategory(cookie.name);
        if (category) {
            cookieDatabase[cookie.name] = {
                category: category,
                duration: cookie.duration,
                description: cookie.description || 'Automatically categorized'
            };
        }
        return cookie;
    });
}

// Determine cookie category
function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) return 'analytics';
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid/.test(lowerName)) return 'advertising';
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) return 'functional';
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) return 'performance';
    return null;
}

// Scan and categorize cookies
function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (!name) return;
        
        let categorized = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: value || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

// Get cookie duration
function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? `Expires ${expiryDate.toLocaleDateString()}` : "Expired";
    }
    return "Session";
}

// Track marketing parameters
function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    if (params.has('gclid')) marketingData.gclid = params.get('gclid');
    if (params.has('fbclid')) marketingData.fbclid = params.get('fbclid');
    if (params.has('utm_source')) marketingData.utm_source = params.get('utm_source');
    if (params.has('utm_medium')) marketingData.utm_medium = params.get('utm_medium');
    if (params.has('utm_campaign')) marketingData.utm_campaign = params.get('utm_campaign');
    
    if (Object.keys(marketingData).length > 0) {
        window.dataLayer.push({
            'event': 'marketingParameters',
            ...marketingData
        });
    }
}

// Inject consent HTML
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? generateCookieTable(cookies) : `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    const themeToggle = config.theme.allowToggle ? `
    <button id="themeToggleBtn" class="theme-toggle-btn">${currentThemeMode === 'light' ? lang.darkMode : lang.lightMode}</button>` : '';
    
    const adminButton = config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            ${themeToggle}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>

    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">×</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    
    ${adminButton}
    
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">×</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? generatePasswordPrompt(language) : generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    :root {
        --banner-background: ${config.uiStyles.banner.background};
        --banner-title-color: ${config.uiStyles.banner.text.titleColor};
        --banner-description-color: ${config.uiStyles.banner.text.descriptionColor};
        --dashboard-background: ${config.uiStyles.dashboard.background};
        --dashboard-title-color: ${config.uiStyles.dashboard.text.titleColor};
        --button-adjust-background: ${config.uiStyles.buttons.adjust.background};
        --button-adjust-background-hover: ${config.uiStyles.buttons.adjust.backgroundHover};
        --button-adjust-border: ${config.uiStyles.buttons.adjust.border};
        --button-adjust-color: ${config.uiStyles.buttons.adjust.color};
    }

    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${config.behavior.bannerPosition === 'left' ? 'left: 20px;' : 'right: 20px;'}
        width: ${config.uiStyles.banner.width};
        background: var(--banner-background);
        border: ${config.uiStyles.banner.border};
        border-radius: ${config.uiStyles.banner.borderRadius};
        box-shadow: ${config.uiStyles.banner.boxShadow};
        z-index: 9999;
        padding: ${config.uiStyles.banner.padding};
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: ${config.uiStyles.banner.transition};
        overflow: hidden;
    }

    .cookie-consent-banner.show {
        transform: translateY(0);
        opacity: 1;
        display: block;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: var(--banner-title-color);
        font-weight: ${config.uiStyles.banner.text.titleFontWeight};
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: var(--banner-description-color);
        font-weight: ${config.uiStyles.banner.text.descriptionFontWeight};
        line-height: 1.5;
    }

    .privacy-policy-link {
        color: ${colorSchemes[currentThemeMode].secondary};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: #1d6fa5;
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .accept-btn {
        background-color: ${config.uiStyles.buttons.accept.background};
        color: ${config.uiStyles.buttons.accept.color};
        border: ${config.uiStyles.buttons.accept.border};
        box-shadow: ${config.uiStyles.buttons.accept.boxShadow};
    }

    .accept-btn:hover {
        background-color: ${config.uiStyles.buttons.accept.backgroundHover};
        color: ${config.uiStyles.buttons.accept.colorHover};
        transform: translateY(-1px);
        box-shadow: ${config.uiStyles.buttons.accept.boxShadowHover};
    }

    .reject-btn {
        background-color: ${config.uiStyles.buttons.reject.background};
        color: ${config.uiStyles.buttons.reject.color};
        border: ${config.uiStyles.buttons.reject.border};
        box-shadow: ${config.uiStyles.buttons.reject.boxShadow};
    }

    .reject-btn:hover {
        background-color: ${config.uiStyles.buttons.reject.backgroundHover};
        color: ${config.uiStyles.buttons.reject.colorHover};
        transform: translateY(-1px);
        box-shadow: ${config.uiStyles.buttons.reject.boxShadowHover};
    }

    .adjust-btn {
        background-color: var(--button-adjust-background);
        color: var(--button-adjust-color);
        border: var(--button-adjust-border);
    }

    .adjust-btn:hover {
        background-color: var(--button-adjust-background-hover);
        color: ${config.uiStyles.buttons.adjust.colorHover};
        transform: translateY(-1px);
        box-shadow: ${config.uiStyles.buttons.adjust.boxShadowHover};
    }

    .save-btn {
        background: ${config.uiStyles.buttons.save.backgroundGradient};
        color: ${config.uiStyles.buttons.save.color};
        border: ${config.uiStyles.buttons.save.border};
    }

    .save-btn:hover {
        background: ${config.uiStyles.buttons.save.backgroundHover};
        color: ${config.uiStyles.buttons.save.colorHover};
        transform: translateY(-2px);
        box-shadow: ${config.uiStyles.buttons.save.boxShadowHover};
    }

    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        background-color: #f8f9fa;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .language-selector select:hover {
        border-color: ${colorSchemes[currentThemeMode].secondary};
        background-color: #fff;
    }

    .theme-toggle-btn {
        position: absolute;
        top: 15px;
        left: 15px;
        padding: 6px 12px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        background-color: #f8f9fa;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .theme-toggle-btn:hover {
        background-color: #e0e0e0;
        border-color: ${colorSchemes[currentThemeMode].secondary};
    }

    .cookie-settings-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-settings-content {
        background-color: var(--banner-background);
        margin: 0 auto;
        width: 845px;
        max-height: 470px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }

    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: var(--banner-title-color);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${colorSchemes[currentThemeMode].textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: ${colorSchemes[currentThemeMode].danger};
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: ${currentThemeMode === 'dark' ? '#222222' : '#fefefe'};
        overflow-y: auto;
        flex: 1;
    }

    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ecf0f1;
        transition: all 0.3s ease;
    }

    .cookie-category:hover {
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#f8f9fa'};
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .cookie-category:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .toggle-container h3 {
        margin: 0;
        font-size: 1.1rem;
        color: var(--banner-title-color);
        font-weight: 600;
    }

    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${colorSchemes[currentThemeMode].toggleInactive};
        transition: .4s;
        border-radius: 34px;
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    input:checked + .toggle-slider {
        background-color: ${colorSchemes[currentThemeMode].toggleActive};
    }

    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }

    input:disabled + .toggle-slider {
        background-color: #95a5a6;
        cursor: not-allowed;
    }

    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid ${currentThemeMode === 'dark' ? '#444444' : '#e0e0e0'};
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .cookie-details-container:hover {
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border-color: ${colorSchemes[currentThemeMode].primary};
    }

    .cookie-details-header {
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#f5f5f5'};
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .cookie-details-header:hover {
        background-color: ${currentThemeMode === 'dark' ? '#3a3a3a' : '#eeeeee'};
    }

    .cookie-details-content {
        padding: 18px;
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#fafafa'};
        border-top: 1px solid ${currentThemeMode === 'dark' ? '#444444' : '#e0e0e0'};
        display: none;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .cookie-details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .cookie-details-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: ${currentThemeMode === 'dark' ? '#3a3a3a' : '#f0f0f0'};
        font-weight: 600;
        border-bottom: 2px solid ${currentThemeMode === 'dark' ? '#444444' : '#e0e0e0'};
        color: ${colorSchemes[currentThemeMode].textDark};
    }

    .cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#444444' : '#e0e0e0'};
        color: ${colorSchemes[currentThemeMode].textLight};
    }

    .cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-details-table tr:hover {
        background-color: ${currentThemeMode === 'dark' ? '#3a3a3a' : '#f5f5f5'};
    }

    .cookie-details-table code {
        background-color: ${currentThemeMode === 'dark' ? '#3a3a3a' : '#f0f0f0'};
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: ${colorSchemes[currentThemeMode].textDark};
    }

    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: ${colorSchemes[currentThemeMode].textLight};
        font-style: italic;
    }

    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        ${config.behavior.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: 60px;
        height: 60px;
        background-color: ${colorSchemes[currentThemeMode].primary};
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-settings-button:hover {
        background-color: ${colorSchemes[currentThemeMode].primary === '#2ecc71' ? '#27ae60' : '#2196F3'};
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-settings-button:hover svg {
        transform: rotate(15deg);
    }

    .cookie-admin-button {
        position: fixed;
        ${config.behavior.adminButtonPosition === 'left' ? 'left: 30px; bottom: 100px;' : 'right: 30px; bottom: 100px;'}
        width: ${config.uiStyles.adminButton.width};
        height: ${config.uiStyles.adminButton.height};
        background-color: ${config.uiStyles.adminButton.background};
        border: ${config.uiStyles.adminButton.border};
        border-radius: ${config.uiStyles.adminButton.borderRadius};
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: ${config.uiStyles.adminButton.boxShadow};
        z-index: 9997;
        transition: ${config.uiStyles.adminButton.transition};
        opacity: 0;
        transform: translateY(20px);
    }

    .cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-admin-button:hover {
        background-color: ${config.uiStyles.adminButton.backgroundHover};
        transform: translateY(-3px) scale(1.05);
        box-shadow: ${config.uiStyles.adminButton.boxShadowHover};
    }

    .cookie-admin-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-admin-button:hover svg {
        transform: rotate(15deg);
    }

    .cookie-analytics-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10001;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-analytics-content {
        background-color: var(--dashboard-background);
        margin: 0 auto;
        width: ${config.uiStyles.dashboard.width};
        max-height: ${config.uiStyles.dashboard.maxHeight};
        border-radius: ${config.uiStyles.dashboard.borderRadius};
        box-shadow: ${config.uiStyles.dashboard.boxShadow};
        overflow: hidden;
        transform: translateY(20px);
        transition: ${config.uiStyles.dashboard.transition};
        display: flex;
        flex-direction: column;
    }

    .cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }

    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#444444' : '#ecf0f1'};
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#f8f9fa'};
    }

    .cookie-analytics-header h2 {
        margin: 0;
        color: var(--dashboard-title-color);
        font-size: 1.5rem;
        font-weight: ${config.uiStyles.dashboard.text.titleFontWeight};
    }

    .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${colorSchemes[currentThemeMode].textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-analytics-modal:hover {
        color: ${colorSchemes[currentThemeMode].danger};
    }

    .cookie-analytics-body {
        padding: ${config.uiStyles.dashboard.padding};
        background-color: ${currentThemeMode === 'dark' ? '#222222' : '#fefefe'};
        overflow-y: auto;
        flex: 1;
    }

    .password-prompt {
        text-align: center;
        padding: 30px;
    }

    .password-prompt h3 {
        color: var(--dashboard-title-color);
        margin-bottom: 20px;
    }

    .password-prompt input {
        padding: 12px 15px;
        border-radius: 6px;
        border: 1px solid ${currentThemeMode === 'dark' ? '#444444' : '#e0e0e0'};
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#ffffff'};
        color: ${colorSchemes[currentThemeMode].textDark};
    }

    .password-prompt button {
        padding: 12px 25px;
        background-color: ${colorSchemes[currentThemeMode].primary};
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .password-prompt button:hover {
        background-color: ${colorSchemes[currentThemeMode].primary === '#2ecc71' ? '#27ae60' : '#2196F3'};
    }

    .error-message {
        color: ${colorSchemes[currentThemeMode].danger};
        margin-top: 10px;
        font-size: 14px;
    }

    .analytics-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .analytics-dashboard h3 {
        color: var(--dashboard-title-color);
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    .stats-summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }

    .stat-card {
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#f8f9fa'};
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-card.accepted {
        border-top: 4px solid ${colorSchemes[currentThemeMode].primary};
    }

    .stat-card.rejected {
        border-top: 4px solid ${colorSchemes[currentThemeMode].danger};
    }

    .stat-card.custom {
        border-top: 4px solid ${colorSchemes[currentThemeMode].secondary};
    }

    .stat-card.total {
        border-top: 4px solid #9b59b6;
    }

    .stat-card h4 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: ${colorSchemes[currentThemeMode].textLight};
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${colorSchemes[currentThemeMode].textDark};
        margin-bottom: 5px;
    }

    .stat-percentage {
        font-size: 1rem;
        color: ${colorSchemes[currentThemeMode].textLight};
    }

    .time-based-stats {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .time-stat {
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#f8f9fa'};
        border-radius: 8px;
        padding: 20px;
    }

    .time-stat h4 {
        margin: 0 0 15px 0;
        font-size: 1.1rem;
        color: ${colorSchemes[currentThemeMode].textDark};
    }

    .stat-bars {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .stat-bar-container {
        margin-bottom: 15px;
    }

    .stat-bar-label {
        font-size: 0.85rem;
        color: ${colorSchemes[currentThemeMode].textLight};
        margin-bottom: 5px;
    }

    .stat-bar {
        height: 20px;
        background-color: ${currentThemeMode === 'dark' ? '#444444' : '#ecf0f1'};
        border-radius: 10px;
        overflow: hidden;
        display: flex;
    }

    .stat-bar-segment {
        height: 100%;
    }

    .stat-bar-segment.accepted {
        background-color: ${colorSchemes[currentThemeMode].primary};
    }

    .stat-bar-segment.rejected {
        background-color: ${colorSchemes[currentThemeMode].danger};
    }

    .stat-bar-segment.custom {
        background-color: ${colorSchemes[currentThemeMode].secondary};
    }

    .stat-bar-legend {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: ${colorSchemes[currentThemeMode].textLight};
        margin-top: 5px;
    }

    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: ${currentThemeMode === 'dark' ? '#2d2d2d' : '#f8f9fa'};
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid ${currentThemeMode === 'dark' ? '#444444' : '#ecf0f1'};
    }

    @media (max-width: 900px) {
        .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .cookie-analytics-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .stats-summary {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: 90%;
            ${config.behavior.bannerPosition === 'left' ? 'left: 5%;' : 'right: 5%;'}
            bottom: 10px;
            padding: 20px;
        }
        
        .cookie-consent-buttons {
            flex-direction: column;
        }
        
        .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .cookie-settings-header {
            padding: 15px 20px;
        }
        
        .cookie-settings-body {
            padding: 15px 20px;
        }
        
        .cookie-settings-footer {
            flex-direction: column;
            padding: 15px 20px;
        }
        
        .cookie-settings-footer .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-settings-footer .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .stats-summary {
            grid-template-columns: 1fr;
        }
    }

  @media (max-width: 480px) {
    .cookie-consent-banner {
        padding: 15px;
        width: calc(100% - 30px);
        ${config.behavior.bannerPosition === 'left' ? 'left: 15px;' : 'right: 15px;'}
        bottom: 10px;
    }

    .cookie-consent-content h2 {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .cookie-consent-content p {
        font-size: 13px;
        margin-bottom: 16px;
    }

    .privacy-policy-link {
        font-size: 12px;
        margin-bottom: 16px;
    }

    .cookie-consent-buttons {
        gap: 8px;
    }

    .cookie-btn {
        padding: 10px;
        font-size: 13px;
    }

    .language-selector select,
    .theme-toggle-btn {
        padding: 5px 8px;
        font-size: 12px;
    }

    .cookie-settings-content {
        width: 95%;
        max-height: 90vh;
    }

    .cookie-settings-header {
        padding: 12px 15px;
    }

    .cookie-settings-header h2 {
        font-size: 1.2rem;
    }

    .close-modal {
        font-size: 24px;
    }

    .cookie-settings-body {
        padding: 12px 15px;
    }

    .cookie-category {
        margin-bottom: 15px;
        padding-bottom: 15px;
    }

    .toggle-container h3 {
        font-size: 1rem;
    }

    .cookie-details-header {
        padding: 10px 15px;
        font-size: 14px;
    }

    .cookie-details-content {
        padding: 12px;
    }

    .cookie-details-table {
        font-size: 12px;
    }

    .cookie-details-table th,
    .cookie-details-table td {
        padding: 8px 10px;
    }

    .cookie-settings-footer {
        padding: 12px 15px;
        gap: 10px;
    }

    .cookie-settings-footer .cookie-btn {
        padding: 10px;
        font-size: 13px;
    }

    .cookie-settings-button {
        width: 50px;
        height: 50px;
        bottom: 20px;
        ${config.behavior.floatingButtonPosition === 'left' ? 'left: 20px;' : 'right: 20px;'}
    }

    .cookie-settings-button svg {
        width: 24px;
        height: 24px;
    }

    .cookie-admin-button {
        width: 50px;
        height: 50px;
        bottom: 80px;
        ${config.behavior.adminButtonPosition === 'left' ? 'left: 20px;' : 'right: 20px;'}
    }

    .cookie-admin-button svg {
        width: 24px;
        height: 24px;
    }

    .cookie-analytics-content {
        width: 95%;
        max-height: 90vh;
    }

    .cookie-analytics-header {
        padding: 12px 15px;
    }

    .cookie-analytics-header h2 {
        font-size: 1.2rem;
    }

    .close-analytics-modal {
        font-size: 24px;
    }

    .cookie-analytics-body {
        padding: 12px 15px;
    }

    .analytics-dashboard h3 {
        font-size: 1.1rem;
        margin-bottom: 15px;
    }

    .stats-summary {
        gap: 10px;
    }

    .stat-card {
        padding: 12px;
    }

    .stat-card h4 {
        font-size: 0.9rem;
    }

    .stat-value {
        font-size: 1.5rem;
    }

    .stat-percentage {
        font-size: 0.9rem;
    }

    .time-stat {
        padding: 15px;
    }

    .time-stat h4 {
        font-size: 1rem;
    }

    .stat-bar {
        height: 15px;
    }

    .stat-bar-label {
        font-size: 0.8rem;
    }

    .stat-bar-legend {
        font-size: 0.7rem;
    }

    .password-prompt {
        padding: 20px;
    }

    .password-prompt input {
        padding: 10px;
        font-size: 13px;
    }

    .password-prompt button {
        padding: 10px 20px;
        font-size: 13px;
    }
}

/* Animation for Floating Button */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.cookie-settings-button.show,
.cookie-admin-button.show {
    animation: pulse 2s infinite;
}

/* Ensure smooth scrolling for modals */
.cookie-settings-modal,
.cookie-analytics-modal {
    -webkit-overflow-scrolling: touch;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .cookie-consent-banner,
    .cookie-settings-content,
    .cookie-analytics-content {
        border: 2px solid #000 !important;
    }

    .cookie-btn {
        border: 2px solid #000 !important;
    }

    .accept-btn {
        background-color: #00ff00 !important;
        color: #000 !important;
    }

    .reject-btn {
        background-color: #ff0000 !important;
        color: #fff !important;
    }

    .adjust-btn,
    .save-btn {
        background-color: #ffff00 !important;
        color: #000 !important;
    }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    .cookie-consent-banner,
    .cookie-settings-modal,
    .cookie-settings-content,
    .cookie-settings-button,
    .cookie-admin-button,
    .cookie-analytics-modal,
    .cookie-analytics-content {
        transition: none !important;
        animation: none !important;
    }

    .cookie-btn:hover,
    .cookie-settings-button:hover,
    .cookie-admin-button:hover {
        transform: none !important;
    }
}

    </style>
</div>`;

// Generate cookie table
function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
                <tr>
                    <td><code>${cookie.name}</code></td>
                    <td>${cookie.duration}</td>
                    <td>${cookie.description}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}

// Update cookie tables
function updateCookieTables(newCookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category')?.querySelector('.cookie-details-content');
        if (container) {
            const cookies = newCookies[category];
            if (cookies.length > 0) {
                container.innerHTML = generateCookieTable(cookies);
            } else {
                container.innerHTML = `<p class="no-cookies-message">No cookies in this category detected.</p>`;
            }
        }
    });
}

// Initialize cookie consent
function initializeCookieConsent(detectedCookies, language) {
    const banner = document.getElementById('cookieConsentBanner');
    const modal = document.getElementById('cookieSettingsModal');
    const floatingButton = document.getElementById('cookieFloatingButton');
    const adminButton = document.getElementById('cookieAdminButton');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    const languageSelect = document.getElementById('cookieLanguageSelect');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    if (!getCookie('cookie_consent') && config.behavior.autoShow) {
        setTimeout(() => {
            banner.classList.add('show');
        }, config.behavior.bannerDelay);
    }

    if (config.behavior.showFloatingButton) {
        floatingButton.style.display = 'block';
    }

    if (config.behavior.showAdminButton && adminButton) {
        adminButton.style.display = 'block';
        adminButton.classList.add('show');
    }

    // Event Listeners
    document.getElementById('acceptAllBtn')?.addEventListener('click', () => {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });

    document.getElementById('rejectAllBtn')?.addEventListener('click', () => {
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });

    document.getElementById('adjustConsentBtn')?.addEventListener('click', () => {
        showCookieSettingsModal();
    });

    document.getElementById('acceptAllSettingsBtn')?.addEventListener('click', () => {
        acceptAllCookies();
        hideCookieSettingsModal();
        showFloatingButton();
    });

    document.getElementById('rejectAllSettingsBtn')?.addEventListener('click', () => {
        rejectAllCookies();
        hideCookieSettingsModal();
        showFloatingButton();
    });

    document.getElementById('saveSettingsBtn')?.addEventListener('click', () => {
        saveCustomSettings(detectedCookies);
        hideCookieSettingsModal();
        showFloatingButton();
    });

    document.querySelector('.close-modal')?.addEventListener('click', () => {
        hideCookieSettingsModal();
    });

    floatingButton?.addEventListener('click', () => {
        showCookieSettingsModal();
    });

    document.querySelector('.close-analytics-modal')?.addEventListener('click', () => {
        hideAnalyticsModal();
    });

    if (adminButton) {
        adminButton.addEventListener('click', () => {
            showAnalyticsModal();
        });
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Toggle cookie details
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const toggle = header.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });

    // Setup password prompt events
    setupPasswordPromptEvents();

    // Update theme on load
    updateTheme();

    // Handle click outside to close modals
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideCookieSettingsModal();
        }
    });

    analyticsModal.addEventListener('click', (e) => {
        if (e.target === analyticsModal) {
            hideAnalyticsModal();
        }
    });

    // Handle continue acceptance
    if (config.behavior.acceptOnContinue) {
        document.addEventListener('click', (e) => {
            if (!getCookie('cookie_consent') && !modal.classList.contains('show') && !analyticsModal.classList.contains('show')) {
                if (!banner.contains(e.target) && !floatingButton.contains(e.target) && (adminButton && !adminButton.contains(e.target))) {
                    acceptAllCookies();
                    hideCookieBanner();
                    showFloatingButton();
                }
            }
        });
    }
}

// Setup password prompt events
function setupPasswordPromptEvents() {
    const submitBtn = document.getElementById('dashboardPasswordSubmit');
    const input = document.getElementById('dashboardPasswordInput');
    const error = document.getElementById('passwordError');
    const language = document.getElementById('cookieLanguageSelect')?.value || 'en';
    const lang = translations[language] || translations.en;

    if (submitBtn && input) {
        submitBtn.addEventListener('click', () => {
            if (input.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                const modalBody = document.querySelector('.cookie-analytics-body');
                modalBody.innerHTML = generateAnalyticsDashboard(language);
            } else {
                if (error) {
                    error.textContent = lang.passwordIncorrect;
                }
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        });
    }
}

// Cookie management functions
function setCookie(name, value, days) {
    const expires = days ? `; expires=${new Date(Date.now() + days * 86400000).toUTCString()}` : '';
    document.cookie = `${name}=${value}${expires}; path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(';').shift() : null;
}

function deleteCookiesByCategory(category) {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [name] = cookie.trim().split('=');
        if (name && cookieDatabase[name]?.category === category) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
    });
}

// Consent actions
function acceptAllCookies() {
    const consent = {
        functional: true,
        analytics: true,
        performance: true,
        advertising: true,
        timestamp: new Date().toISOString()
    };
    
    setCookie('cookie_consent', JSON.stringify(consent), 365);
    updateConsentStats('accepted');
    
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'personalization_storage': 'granted',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
    });
}

function rejectAllCookies() {
    const consent = {
        functional: true,
        analytics: false,
        performance: false,
        advertising: false,
        timestamp: new Date().toISOString()
    };
    
    setCookie('cookie_consent', JSON.stringify(consent), 365);
    updateConsentStats('rejected');
    
    ['analytics', 'performance', 'advertising'].forEach(category => {
        deleteCookiesByCategory(category);
    });
    
    gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
    });
}

function saveCustomSettings(detectedCookies) {
    const consent = {
        functional: true,
        analytics: document.querySelector('input[data-category="analytics"]').checked,
        performance: document.querySelector('input[data-category="performance"]').checked,
        advertising: document.querySelector('input[data-category="advertising"]').checked,
        timestamp: new Date().toISOString()
    };
    
    setCookie('cookie_consent', JSON.stringify(consent), 365);
    updateConsentStats('custom');
    
    const categoriesToDelete = [];
    if (!consent.analytics) categoriesToDelete.push('analytics');
    if (!consent.performance) categoriesToDelete.push('performance');
    if (!consent.advertising) categoriesToDelete.push('advertising');
    
    categoriesToDelete.forEach(category => {
        deleteCookiesByCategory(category);
    });
    
    gtag('consent', 'update', {
        'ad_storage': consent.advertising ? 'granted' : 'denied',
        'analytics_storage': consent.analytics ? 'granted' : 'denied',
        'ad_user_data': consent.advertising ? 'granted' : 'denied',
        'ad_personalization': consent.advertising ? 'granted' : 'denied',
        'personalization_storage': consent.performance ? 'granted' : 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
    });
}

// UI Control Functions
function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
}

function showCookieSettingsModal() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.add('show');
}

function hideCookieSettingsModal() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
}

function showFloatingButton() {
    if (config.behavior.showFloatingButton) {
        const floatingButton = document.getElementById('cookieFloatingButton');
        floatingButton.classList.add('show');
    }
}

function showAnalyticsModal() {
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    analyticsModal.classList.add('show');
}


function hideAnalyticsModal() {
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    analyticsModal.classList.remove('show');
}

// Function to handle keyboard accessibility
function handleKeyboardAccessibility() {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    const banner = document.getElementById('cookieConsentBanner');
    const floatingButton = document.getElementById('cookieFloatingButton');
    const adminButton = document.getElementById('cookieAdminButton');

    // Trap focus in modals
    function trapFocus(modalElement) {
        const focusableContent = modalElement.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        modalElement.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        });

        firstFocusableElement.focus();
    }

    // Add keyboard event listeners for modals
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideCookieSettingsModal();
        }
    });

    analyticsModal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideAnalyticsModal();
        }
    });

    // Make banner and buttons keyboard accessible
    banner.querySelectorAll(focusableElements).forEach(element => {
        element.setAttribute('tabindex', '0');
    });

    floatingButton.setAttribute('tabindex', '0');
    floatingButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showCookieSettingsModal();
            trapFocus(modal);
        }
    });

    if (adminButton) {
        adminButton.setAttribute('tabindex', '0');
        adminButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showAnalyticsModal();
                trapFocus(analyticsModal);
            }
        });
    }
}

// Function to handle screen reader support
function addAriaAttributes() {
    const banner = document.getElementById('cookieConsentBanner');
    const modal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    const floatingButton = document.getElementById('cookieFloatingButton');
    const adminButton = document.getElementById('cookieAdminButton');

    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookieConsentBannerTitle');
    banner.querySelector('h2').id = 'cookieConsentBannerTitle';

    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'cookieSettingsModalTitle');
    modal.querySelector('h2').id = 'cookieSettingsModalTitle';

    analyticsModal.setAttribute('role', 'dialog');
    analyticsModal.setAttribute('aria-labelledby', 'cookieAnalyticsModalTitle');
    analyticsModal.querySelector('h2').id = 'cookieAnalyticsModalTitle';

    floatingButton.setAttribute('role', 'button');
    floatingButton.setAttribute('aria-label', 'Open cookie settings');

    if (adminButton) {
        adminButton.setAttribute('role', 'button');
        adminButton.setAttribute('aria-label', 'Open analytics dashboard');
    }

    // Update aria-hidden state based on visibility
    function updateAriaHidden() {
        banner.setAttribute('aria-hidden', !banner.classList.contains('show'));
        modal.setAttribute('aria-hidden', !modal.classList.contains('show'));
        analyticsModal.setAttribute('aria-hidden', !analyticsModal.classList.contains('show'));
    }

    updateAriaHidden();

    // Observe visibility changes
    const observer = new MutationObserver(updateAriaHidden);
    observer.observe(banner, { attributes: true, attributeFilter: ['class'] });
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
    observer.observe(analyticsModal, { attributes: true, attributeFilter: ['class'] });
}

// Function to handle GDPR compliance check
function checkGDPRCompliance() {
    const consent = getCookie('cookie_consent');
    if (!consent) {
        console.log('GDPR Compliance: No consent recorded. Showing banner.');
        return false;
    }

    const consentData = JSON.parse(consent);
    const consentAge = (new Date() - new Date(consentData.timestamp)) / (1000 * 60 * 60 * 24);
    if (consentAge > 365) {
        console.log('GDPR Compliance: Consent expired. Showing banner.');
        setCookie('cookie_consent', '', -1);
        return false;
    }

    console.log('GDPR Compliance: Valid consent found.');
    return true;
}

// Function to export analytics data (for admin use)
function exportAnalyticsData() {
    if (!isDashboardAuthenticated) {
        console.log('Export failed: Not authenticated');
        return;
    }

    const data = {
        total: consentAnalytics.total,
        daily: consentAnalytics.daily,
        weekly: consentAnalytics.weekly,
        monthly: consentAnalytics.monthly,
        exportTimestamp: new Date().toISOString()
    };

    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `consent_analytics_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Function to reset analytics data (for admin use)
function resetAnalyticsData() {
    if (!isDashboardAuthenticated) {
        console.log('Reset failed: Not authenticated');
        return;
    }

    consentAnalytics = {
        total: { accepted: 0, rejected: 0, custom: 0 },
        daily: {},
        weekly: {},
        monthly: {}
    };
    const today = new Date().toISOString().split('T')[0];
    consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
    saveAnalyticsData();

    const language = document.getElementById('cookieLanguageSelect')?.value || 'en';
    const modalBody = document.querySelector('.cookie-analytics-body');
    modalBody.innerHTML = generateAnalyticsDashboard(language);
}

// Function to prune old analytics data
function pruneAnalyticsData() {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - config.analytics.storageDays);

    for (const date in consentAnalytics.daily) {
        if (new Date(date) < cutoffDate) {
            delete consentAnalytics.daily[date];
        }
    }

    for (const week in consentAnalytics.weekly) {
        const [year, weekNum] = week.split('-W');
        const weekDate = new Date(year, 0, 1);
        weekDate.setDate(weekDate.getDate() + (weekNum - 1) * 7);
        if (weekDate < cutoffDate) {
            delete consentAnalytics.weekly[week];
        }
    }

    for (const month in consentAnalytics.monthly) {
        const [year, monthNum] = month.split('-');
        const monthDate = new Date(year, monthNum - 1, 1);
        if (monthDate < cutoffDate) {
            delete consentAnalytics.monthly[month];
        }
    }

    saveAnalyticsData();
}

// Function to initialize additional features
function initializeAdditionalFeatures() {
    // Add export and reset buttons to analytics dashboard
    if (config.analytics.enabled && config.analytics.showDashboard) {
        const analyticsModal = document.getElementById('cookieAnalyticsModal');
        analyticsModal.querySelector('.cookie-analytics-body').insertAdjacentHTML('beforeend', `
            <div class="analytics-actions">
                <button id="exportAnalyticsBtn" class="cookie-btn">Export Data</button>
                <button id="resetAnalyticsBtn" class="cookie-btn reject-btn">Reset Data</button>
            </div>
        `);

        document.getElementById('exportAnalyticsBtn')?.addEventListener('click', exportAnalyticsData);
        document.getElementById('resetAnalyticsBtn')?.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all analytics data? This action cannot be undone.')) {
                resetAnalyticsData();
            }
        });

        // Style the analytics actions
        const style = document.createElement('style');
        style.textContent = `
            .analytics-actions {
                margin-top: 20px;
                display: flex;
                gap: 15px;
                justify-content: flex-end;
            }
            .analytics-actions .cookie-btn {
                padding: 10px 20px;
                font-size: 14px;
            }
        `;
        document.head.appendChild(style);
    }

    // Prune old analytics data on load
    if (config.analytics.enabled) {
        pruneAnalyticsData();
    }

    // Add keyboard accessibility
    handleKeyboardAccessibility();

    // Add ARIA attributes for screen readers
    addAriaAttributes();

    // Check GDPR compliance
    if (!checkGDPRCompliance()) {
        const banner = document.getElementById('cookieConsentBanner');
        setTimeout(() => {
            banner.classList.add('show');
        }, config.behavior.bannerDelay);
    }
}

// Call additional features initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeAdditionalFeatures();
});




// Expose public methods for external use
window.CookieConsent = {
    getConsent: () => JSON.parse(getCookie('cookie_consent') || '{}'),
    showSettings: showCookieSettingsModal,
    showAnalytics: showAnalyticsModal,
    exportAnalytics: exportAnalyticsData,
    resetAnalytics: resetAnalyticsData,
    // Method to programmatically accept all cookies
    acceptAll: () => {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
    },
    // Method to programmatically reject all cookies
    rejectAll: () => {
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
    },
    // Method to check if consent is given for a specific category
    hasConsent: (category) => {
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        return consent[category] || false;
    },
    // Method to clear all cookies (except essential ones)
    clearNonEssentialCookies: () => {
        ['analytics', 'performance', 'advertising'].forEach(category => {
            deleteCookiesByCategory(category);
        });
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        consent.analytics = false;
        consent.performance = false;
        consent.advertising = false;
        setCookie('cookie_consent', JSON.stringify(consent), 365);
        gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
        });
    },
    // Method to get current language
    getCurrentLanguage: () => {
        return document.getElementById('cookieLanguageSelect')?.value || config.languageConfig.defaultLanguage || 'en';
    },
    // Method to change language programmatically
    setLanguage: (languageCode) => {
        if (translations[languageCode]) {
            changeLanguage(languageCode);
            const languageSelect = document.getElementById('cookieLanguageSelect');
            if (languageSelect) {
                languageSelect.value = languageCode;
            }
        } else {
            console.warn(`Language "${languageCode}" is not supported.`);
        }
    },
    // Method to toggle theme programmatically
    toggleTheme: () => {
        toggleTheme();
    },
    // Method to get analytics data (for external use)
    getAnalyticsData: () => {
        if (!isDashboardAuthenticated) {
            console.log('Access denied: Not authenticated');
            return null;
        }
        return { ...consentAnalytics };
    }
};

// Function to handle cookie consent events for analytics
function trackConsentEvent(action, label) {
    if (window.dataLayer && config.analytics.enabled) {
        window.dataLayer.push({
            'event': 'cookie_consent_action',
            'action': action,
            'label': label,
            'timestamp': new Date().toISOString()
        });
    }
}

// Function to log consent actions for debugging
function logConsentAction(action, details) {
    console.log(`Cookie Consent Action: ${action}`, details);
}

// Add event listeners for consent actions to track events
document.addEventListener('DOMContentLoaded', () => {
    const actionsToTrack = [
        { id: 'acceptAllBtn', action: 'accept_all', label: 'Accept All Cookies' },
        { id: 'acceptAllSettingsBtn', action: 'accept_all', label: 'Accept All Cookies (Settings)' },
        { id: 'rejectAllBtn', action: 'reject_all', label: 'Reject All Cookies' },
        { id: 'rejectAllSettingsBtn', action: 'reject_all', label: 'Reject All Cookies (Settings)' },
        { id: 'saveSettingsBtn', action: 'save_custom', label: 'Save Custom Settings' }
    ];

    actionsToTrack.forEach(({ id, action, label }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => {
                trackConsentEvent(action, label);
                logConsentAction(action, { label, timestamp: new Date().toISOString() });
            });
        }
    });

    // Track theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            trackConsentEvent('toggle_theme', currentThemeMode);
            logConsentAction('toggle_theme', { theme: currentThemeMode, timestamp: new Date().toISOString() });
        });
    }

    // Track language change
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            trackConsentEvent('change_language', e.target.value);
            logConsentAction('change_language', { language: e.target.value, timestamp: new Date().toISOString() });
        });
    }
});

// Function to handle browser back/forward navigation
function handleNavigation() {
    window.addEventListener('popstate', () => {
        const modal = document.getElementById('cookieSettingsModal');
        const analyticsModal = document.getElementById('cookieAnalyticsModal');
        
        if (modal.classList.contains('show')) {
            hideCookieSettingsModal();
        }
        
        if (analyticsModal.classList.contains('show')) {
            hideAnalyticsModal();
        }
    });
}

// Function to prevent default form submissions within modals
function preventFormSubmissions() {
    const forms = document.querySelectorAll('.cookie-settings-modal form, .cookie-analytics-modal form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    });
}

// Function to handle viewport changes for responsive adjustments
function handleViewportChanges() {
    window.addEventListener('resize', () => {
        const banner = document.getElementById('cookieConsentBanner');
        const modal = document.getElementById('cookieSettingsModal');
        const analyticsModal = document.getElementById('cookieAnalyticsModal');

        // Ensure banner position adjusts on resize
        if (banner.classList.contains('show')) {
            banner.style.left = config.behavior.bannerPosition === 'left' ? '20px' : 'auto';
            banner.style.right = config.behavior.bannerPosition === 'right' ? '20px' : 'auto';
        }

        // Adjust modal content height
        if (modal.classList.contains('show')) {
            const modalContent = modal.querySelector('.cookie-settings-content');
            modalContent.style.maxHeight = window.innerHeight - 60 + 'px';
        }

        if (analyticsModal.classList.contains('show')) {
            const analyticsContent = analyticsModal.querySelector('.cookie-analytics-content');
            analyticsContent.style.maxHeight = window.innerHeight - 60 + 'px';
        }
    });
}

// Function to handle dark mode system preference
function handleSystemDarkMode() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    function handleDarkModeChange(e) {
        if (!getCookie('theme_preference')) {
            currentThemeMode = e.matches ? 'dark' : 'light';
            updateTheme();
        }
    }
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    handleDarkModeChange(darkModeMediaQuery);
}

// Function to handle language change based on browser settings
function handleBrowserLanguageChange() {
    if (config.languageConfig.autoDetectLanguage) {
        window.addEventListener('languagechange', () => {
            const browserLang = (navigator.language || 'en').split('-')[0];
            if (translations[browserLang] && !getCookie('preferred_language')) {
                changeLanguage(browserLang);
                const languageSelect = document.getElementById('cookieLanguageSelect');
                if (languageSelect) {
                    languageSelect.value = browserLang;
                }
            }
        });
    }
}

// Function to handle visibility change (e.g., tab switching)
function handleVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            // Save current state when the tab is hidden
            localStorage.setItem('cookieConsentLastState', JSON.stringify({
                bannerVisible: document.getElementById('cookieConsentBanner').classList.contains('show'),
                settingsModalVisible: document.getElementById('cookieSettingsModal').classList.contains('show'),
                analyticsModalVisible: document.getElementById('cookieAnalyticsModal').classList.contains('show')
            }));
        } else {
            // Restore state when the tab becomes visible
            const lastState = JSON.parse(localStorage.getItem('cookieConsentLastState') || '{}');
            if (lastState.bannerVisible && !getCookie('cookie_consent')) {
                document.getElementById('cookieConsentBanner').classList.add('show');
            }
            if (lastState.settingsModalVisible) {
                showCookieSettingsModal();
            }
            if (lastState.analyticsModalVisible) {
                showAnalyticsModal();
            }
        }
    });
}

// Function to handle errors gracefully
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('Cookie Consent Error:', e.message, e.filename, e.lineno);
        trackConsentEvent('error', e.message);
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Cookie Consent Unhandled Promise Rejection:', e.reason);
        trackConsentEvent('error', e.reason.toString());
    });
}

// Initialize additional behaviors
document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    preventFormSubmissions();
    handleViewportChanges();
    handleSystemDarkMode();
    handleBrowserLanguageChange();
    handleVisibilityChange();
    handleErrors();
});



// Ensure the script is loaded and ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition with Dark Mode Loaded');
    window.dispatchEvent(new Event('cookieConsentLoaded'));

    // Function to handle cookie scanning and updates
    function scanCookies() {
        const currentCookies = document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]).filter(Boolean);
        const newCookies = {};
        
        // Initialize categories
        ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'].forEach(category => {
            newCookies[category] = [];
        });

        // Categorize cookies
        currentCookies.forEach(cookieName => {
            const cookieInfo = cookieDatabase[cookieName] || {
                name: cookieName,
                category: 'uncategorized',
                duration: 'Unknown',
                description: 'This cookie was not identified in the database.'
            };
            newCookies[cookieInfo.category].push(cookieInfo);
        });

        updateCookieTables(newCookies);
    }

    // Initial cookie scan
    scanCookies();

    // Periodically scan for new cookies if enabled
    if (config.behavior.scanForNewCookies) {
        setInterval(() => {
            scanCookies();
        }, config.behavior.cookieScanInterval);
    }

    // Function to handle cookie consent expiration reminder
    function checkConsentExpiration() {
        const consent = getCookie('cookie_consent');
        if (consent) {
            const consentData = JSON.parse(consent);
            const consentAge = (new Date() - new Date(consentData.timestamp)) / (1000 * 60 * 60 * 24);
            if (consentAge > config.behavior.consentExpirationReminderDays) {
                const banner = document.getElementById('cookieConsentBanner');
                banner.classList.add('show');
                setCookie('cookie_consent', '', -1); // Reset consent to force re-prompt
            }
        }
    }

    // Check consent expiration on load
    checkConsentExpiration();

    // Schedule periodic consent expiration checks
    setInterval(checkConsentExpiration, 24 * 60 * 60 * 1000); // Check daily

    // Function to handle analytics data persistence
    function loadAnalyticsData() {
        const savedData = localStorage.getItem('consentAnalytics');
        if (savedData) {
            consentAnalytics = JSON.parse(savedData);
        } else {
            consentAnalytics = {
                total: { accepted: 0, rejected: 0, custom: 0 },
                daily: {},
                weekly: {},
                monthly: {}
            };
            const today = new Date().toISOString().split('T')[0];
            consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
        }
    }

    // Function to save analytics data
    window.saveAnalyticsData = function() {
        localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
    };

    // Load analytics data on initialization
    loadAnalyticsData();

    // Function to update consent stats
    window.updateConsentStats = function(action) {
        const today = new Date().toISOString().split('T')[0];
        const week = new Date().toISOString().slice(0, 4) + '-W' + String(Math.floor((new Date().getDate() + new Date().getDay()) / 7) + 1).padStart(2, '0');
        const month = new Date().toISOString().slice(0, 7);

        // Initialize stats if not present
        if (!consentAnalytics.daily[today]) {
            consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
        }
        if (!consentAnalytics.weekly[week]) {
            consentAnalytics.weekly[week] = { accepted: 0, rejected: 0, custom: 0 };
        }
        if (!consentAnalytics.monthly[month]) {
            consentAnalytics.monthly[month] = { accepted: 0, rejected: 0, custom: 0 };
        }

        // Update stats
        consentAnalytics.total[action]++;
        consentAnalytics.daily[today][action]++;
        consentAnalytics.weekly[week][action]++;
        consentAnalytics.monthly[month][action]++;

        saveAnalyticsData();

        // Update dashboard if open
        if (document.getElementById('cookieAnalyticsModal').classList.contains('show')) {
            const language = document.getElementById('cookieLanguageSelect')?.value || 'en';
            const modalBody = document.querySelector('.cookie-analytics-body');
            modalBody.innerHTML = generateAnalyticsDashboard(language);
        }
    };

    // Function to generate analytics dashboard
    window.generateAnalyticsDashboard = function(language) {
        const lang = translations[language] || translations.en;
        const today = new Date().toISOString().split('T')[0];
        const week = new Date().toISOString().slice(0, 4) + '-W' + String(Math.floor((new Date().getDate() + new Date().getDay()) / 7) + 1).padStart(2, '0');
        const month = new Date().toISOString().slice(0, 7);

        const totalStats = consentAnalytics.total;
        const dailyStats = consentAnalytics.daily[today] || { accepted: 0, rejected: 0, custom: 0 };
        const weeklyStats = consentAnalytics.weekly[week] || { accepted: 0, rejected: 0, custom: 0 };
        const monthlyStats = consentAnalytics.monthly[month] || { accepted: 0, rejected: 0, custom: 0 };

        const totalInteractions = totalStats.accepted + totalStats.rejected + totalStats.custom || 1;
        const dailyInteractions = dailyStats.accepted + dailyStats.rejected + dailyStats.custom || 1;
        const weeklyInteractions = weeklyStats.accepted + weeklyStats.rejected + weeklyStats.custom || 1;
        const monthlyInteractions = monthlyStats.accepted + monthlyStats.rejected + monthlyStats.custom || 1;

        return `
            <div class="analytics-dashboard">
                <h3>${lang.analyticsDashboard}</h3>
                <div class="stats-summary">
                    <div class="stat-card">
                        <h4>${lang.totalConsents}</h4>
                        <div class="stat-value">${totalInteractions}</div>
                        <div class="stat-percentage">
                            <span>${lang.accepted}: ${(totalStats.accepted / totalInteractions * 100).toFixed(1)}%</span>
                            <span>${lang.rejected}: ${(totalStats.rejected / totalInteractions * 100).toFixed(1)}%</span>
                            <span>${lang.custom}: ${(totalStats.custom / totalInteractions * 100).toFixed(1)}%</span>
                        </div>
                    </div>
                </div>
                <div class="time-stat">
                    <h4>${lang.dailyStats} (${today})</h4>
                    <div class="stat-bar">
                        <div class="stat-bar-fill accepted" style="width: ${(dailyStats.accepted / dailyInteractions * 100).toFixed(1)}%"></div>
                        <div class="stat-bar-fill rejected" style="width: ${(dailyStats.rejected / dailyInteractions * 100).toFixed(1)}%"></div>
                        <div class="stat-bar-fill custom" style="width: ${(dailyStats.custom / dailyInteractions * 100).toFixed(1)}%"></div>
                    </div>
                    <div class="stat-bar-legend">
                        <span>${lang.accepted}: ${dailyStats.accepted}</span>
                        <span>${lang.rejected}: ${dailyStats.rejected}</span>
                        <span>${lang.custom}: ${dailyStats.custom}</span>
                    </div>
                </div>
                <div class="time-stat">
                    <h4>${lang.weeklyStats} (${week})</h4>
                    <div class="stat-bar">
                        <div class="stat-bar-fill accepted" style="width: ${(weeklyStats.accepted / weeklyInteractions * 100).toFixed(1)}%"></div>
                        <div class="stat-bar-fill rejected" style="width: ${(weeklyStats.rejected / weeklyInteractions * 100).toFixed(1)}%"></div>
                        <div class="stat-bar-fill custom" style="width: ${(weeklyStats.custom / weeklyInteractions * 100).toFixed(1)}%"></div>
                    </div>
                    <div class="stat-bar-legend">
                        <span>${lang.accepted}: ${weeklyStats.accepted}</span>
                        <span>${lang.rejected}: ${weeklyStats.rejected}</span>
                        <span>${lang.custom}: ${weeklyStats.custom}</span>
                    </div>
                </div>
                <div class="time-stat">
                    <h4>${lang.monthlyStats} (${month})</h4>
                    <div class="stat-bar">
                        <div class="stat-bar-fill accepted" style="width: ${(monthlyStats.accepted / monthlyInteractions * 100).toFixed(1)}%"></div>
                        <div class="stat-bar-fill rejected" style="width: ${(monthlyStats.rejected / monthlyInteractions * 100).toFixed(1)}%"></div>
                        <div class="stat-bar-fill custom" style="width: ${(monthlyStats.custom / monthlyInteractions * 100).toFixed(1)}%"></div>
                    </div>
                    <div class="stat-bar-legend">
                        <span>${lang.accepted}: ${monthlyStats.accepted}</span>
                        <span>${lang.rejected}: ${monthlyStats.rejected}</span>
                        <span>${lang.custom}: ${monthlyStats.custom}</span>
                    </div>
                </div>
            </div>
        `;
    };

    // Function to change language and update UI
    window.changeLanguage = function(language) {
        const lang = translations[language] || translations.en;
        setCookie('preferred_language', language, 365);

        // Update banner content
        const banner = document.getElementById('cookieConsentBanner');
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacyPolicy;
        banner.querySelector('#acceptAllBtn').textContent = lang.acceptAll;
        banner.querySelector('#rejectAllBtn').textContent = lang.rejectAll;
        banner.querySelector('#adjustConsentBtn').textContent = lang.adjustSettings;

        // Update settings modal content
        const settingsModal = document.getElementById('cookieSettingsModal');
        settingsModal.querySelector('h2').textContent = lang.settingsTitle;
        settingsModal.querySelectorAll('.cookie-category').forEach(category => {
            const categoryName = category.querySelector('h3').dataset.category;
            category.querySelector('h3').textContent = lang.categories[categoryName].title;
            category.querySelector('p').textContent = lang.categories[categoryName].description;
        });
        settingsModal.querySelector('#acceptAllSettingsBtn').textContent = lang.acceptAll;
        settingsModal.querySelector('#rejectAllSettingsBtn').textContent = lang.rejectAll;
        settingsModal.querySelector('#saveSettingsBtn').textContent = lang.save;

        // Update analytics modal content
        const analyticsModal = document.getElementById('cookieAnalyticsModal');
        analyticsModal.querySelector('h2').textContent = lang.analyticsTitle;
        const passwordPrompt = analyticsModal.querySelector('.password-prompt');
        if (passwordPrompt) {
            passwordPrompt.querySelector('label').textContent = lang.enterPassword;
            passwordPrompt.querySelector('button').textContent = lang.submit;
        } else {
            const modalBody = analyticsModal.querySelector('.cookie-analytics-body');
            modalBody.innerHTML = generateAnalyticsDashboard(language);
        }
    };

    // Function to toggle theme and update UI
    window.toggleTheme = function() {
        currentThemeMode = currentThemeMode === 'light' ? 'dark' : 'light';
        setCookie('theme_preference', currentThemeMode, 365);
        updateTheme();
    };

    // Function to update theme across UI
    window.updateTheme = function() {
        document.documentElement.setAttribute('data-theme', currentThemeMode);
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = currentThemeMode === 'light' ? '🌙 Dark' : '☀️ Light';
        }
    };

    // Initialize cookie consent with detected cookies and language
    initializeCookieConsent({}, config.languageConfig.defaultLanguage);






// Expose additional utility methods
window.CookieConsent.scanCookies = scanCookies;
window.CookieConsent.checkConsentExpiration = checkConsentExpiration;

// Function to handle third-party script loading based on consent
function manageThirdPartyScripts() {
    const consent = JSON.parse(getCookie('cookie_consent') || '{}');
    
    // Google Analytics script loading
    if (consent.analytics && config.analytics.enabled) {
        if (!document.querySelector('script[src*="googletagmanager.com"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function() { dataLayer.push(arguments); };
            gtag('js', new Date());
            gtag('config', config.analytics.googleAnalyticsID, {
                'anonymize_ip': true
            });
        }
    } else {
        // Remove Google Analytics if consent is revoked
        const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
        scripts.forEach(script => script.remove());
        if (window.dataLayer) {
            window.dataLayer = [];
        }
    }

    // Advertising scripts (example)
    if (consent.advertising && config.advertising.enabled) {
        if (!document.querySelector('script[src*="example-ad-provider.com"]')) {
            const adScript = document.createElement('script');
            adScript.async = true;
            adScript.src = 'https://example-ad-provider.com/ad-script.js';
            document.head.appendChild(adScript);
        }
    } else {
        const adScripts = document.querySelectorAll('script[src*="example-ad-provider.com"]');
        adScripts.forEach(script => script.remove());
    }
}

// Function to handle cookie consent change events
function setupConsentChangeListener() {
    window.addEventListener('cookieConsentChanged', () => {
        manageThirdPartyScripts();
        trackConsentEvent('consent_changed', 'User updated cookie preferences');
        logConsentAction('consent_changed', { timestamp: new Date().toISOString() });
    });
}

// Function to dispatch consent change event
function dispatchConsentChange() {
    const event = new Event('cookieConsentChanged');
    window.dispatchEvent(event);
}

// Override setCookie to dispatch event on consent change
const originalSetCookie = setCookie;
setCookie = function(name, value, days) {
    originalSetCookie(name, value, days);
    if (name === 'cookie_consent') {
        dispatchConsentChange();
    }
};

// Function to handle performance optimization
function optimizePerformance() {
    // Defer non-critical CSS loading
    const criticalStyles = document.createElement('style');
    criticalStyles.textContent = `
        .cookie-consent-banner, .cookie-settings-modal, .cookie-analytics-modal {
            display: none;
        }
        .cookie-consent-banner.show, .cookie-settings-modal.show, .cookie-analytics-modal.show {
            display: block;
        }
    `;
    document.head.appendChild(criticalStyles);

    // Lazy-load modals content
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');

    settingsModal.querySelector('.cookie-settings-content').setAttribute('data-loaded', 'false');
    analyticsModal.querySelector('.cookie-analytics-content').setAttribute('data-loaded', 'false');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const content = entry.target;
                if (content.getAttribute('data-loaded') === 'false') {
                    content.setAttribute('data-loaded', 'true');
                    // Load content dynamically if needed (e.g., fetch additional HTML or data)
                    if (content.closest('#cookieAnalyticsModal') && isDashboardAuthenticated) {
                        const language = document.getElementById('cookieLanguageSelect')?.value || 'en';
                        content.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(language);
                    }
                }
            }
        });
    }, { threshold: 0.1 });

    observer.observe(settingsModal.querySelector('.cookie-settings-content'));
    observer.observe(analyticsModal.querySelector('.cookie-analytics-content'));
}

// Function to handle GDPR compliance reporting (for admin)
function generateComplianceReport() {
    if (!isDashboardAuthenticated) {
        console.log('Compliance report generation failed: Not authenticated');
        return;
    }

    const consent = getCookie('cookie_consent');
    const report = {
        consentStatus: consent ? JSON.parse(consent) : 'No consent recorded',
        cookiesDetected: document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]).filter(Boolean),
        analyticsSummary: { ...consentAnalytics },
        timestamp: new Date().toISOString()
    };

    const reportStr = JSON.stringify(report, null, 2);
    const blob = new Blob([reportStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gdpr_compliance_report_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Add compliance report button to analytics dashboard
document.addEventListener('DOMContentLoaded', () => {
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    if (analyticsModal && config.analytics.showDashboard) {
        const actionsDiv = analyticsModal.querySelector('.analytics-actions');
        if (actionsDiv) {
            actionsDiv.insertAdjacentHTML('beforeend', `
                <button id="generateComplianceReportBtn" class="cookie-btn">Generate Compliance Report</button>
            `);
            document.getElementById('generateComplianceReportBtn').addEventListener('click', generateComplianceReport);
        }
    }
});

// Function to handle user feedback submission (if enabled)
function setupFeedbackSubmission() {
    if (config.feedback.enabled) {
        const feedbackForm = document.createElement('div');
        feedbackForm.className = 'cookie-feedback-form';
        feedbackForm.innerHTML = `
            <div class="cookie-feedback-content">
                <h3>Provide Feedback</h3>
                <p>We value your feedback on our cookie consent experience.</p>
                <textarea id="cookieFeedbackText" placeholder="Enter your feedback here..." rows="4"></textarea>
                <div class="cookie-feedback-buttons">
                    <button id="submitFeedbackBtn" class="cookie-btn accept-btn">Submit</button>
                    <button id="closeFeedbackBtn" class="cookie-btn reject-btn">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(feedbackForm);

        const style = document.createElement('style');
        style.textContent = `
            .cookie-feedback-form {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1001;
                justify-content: center;
                align-items: center;
            }
            .cookie-feedback-form.show {
                display: flex;
            }
            .cookie-feedback-content {
                background: var(--background-color);
                color: var(--text-color);
                padding: 20px;
                border-radius: 8px;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .cookie-feedback-content h3 {
                margin-top: 0;
                font-size: 1.5rem;
            }
            .cookie-feedback-content p {
                margin-bottom: 15px;
            }
            #cookieFeedbackText {
                width: 100%;
                padding: 10px;
                border: 1px solid var(--border-color);
                border-radius: 4px;
                resize: none;
                margin-bottom: 15px;
            }
            .cookie-feedback-buttons {
                display: flex;
                gap: 10px;
                justify-content: flex-end;
            }
        `;
        document.head.appendChild(style);

        // Add feedback button to settings modal
        const settingsFooter = document.querySelector('.cookie-settings-footer');
        if (settingsFooter) {
            settingsFooter.insertAdjacentHTML('beforeend', `
                <button id="openFeedbackBtn" class="cookie-btn">Give Feedback</button>
            `);
            document.getElementById('openFeedbackBtn').addEventListener('click', () => {
                feedbackForm.classList.add('show');
            });
        }

        document.getElementById('submitFeedbackBtn').addEventListener('click', () => {
            const feedbackText = document.getElementById('cookieFeedbackText').value;
            if (feedbackText.trim()) {
                console.log('User Feedback:', feedbackText);
                trackConsentEvent('feedback_submitted', feedbackText);
                feedbackForm.classList.remove('show');
                document.getElementById('cookieFeedbackText').value = '';
                alert('Thank you for your feedback!');
            } else {
                alert('Please enter your feedback before submitting.');
            }
        });

        document.getElementById('closeFeedbackBtn').addEventListener('click', () => {
            feedbackForm.classList.remove('show');
            document.getElementById('cookieFeedbackText').value = '';
        });

        feedbackForm.addEventListener('click', (e) => {
            if (e.target === feedbackForm) {
                feedbackForm.classList.remove('show');
            }
        });
    }
}

// Function to handle cookie consent banner dismissal on scroll (if enabled)
function setupScrollDismiss() {
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', () => {
            if (!getCookie('cookie_consent')) {
                const banner = document.getElementById('cookieConsentBanner');
                if (banner.classList.contains('show')) {
                    acceptAllCookies();
                    hideCookieBanner();
                    showFloatingButton();
                    trackConsentEvent('accept_on_scroll', 'User accepted via scroll');
                    logConsentAction('accept_on_scroll', { timestamp: new Date().toISOString() });
                }
            }
        }, { once: true });
    }
}

// Function to handle multilingual SEO optimization
function optimizeForSEO() {
    const banner = document.getElementById('cookieConsentBanner');
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');

    // Add lang attributes for better SEO
    const currentLang = document.getElementById('cookieLanguageSelect')?.value || config.languageConfig.defaultLanguage || 'en';
    banner.setAttribute('lang', currentLang);
    settingsModal.setAttribute('lang', currentLang);
    analyticsModal.setAttribute('lang', currentLang);

    // Add meta tags for search engines
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'GDPR-compliant cookie consent solution with support for dark mode, analytics, and multilingual interfaces.';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'cookie consent, GDPR, privacy, dark mode, analytics, multilingual';
    document.head.appendChild(metaKeywords);
}

// Function to handle browser compatibility checks
function checkBrowserCompatibility() {
    const ua = navigator.userAgent;
    const isOldBrowser = /MSIE|Trident/.test(ua) || (ua.includes('Firefox') && parseInt(ua.split('Firefox/')[1]) < 60);
    if (isOldBrowser) {
        console.warn('This browser version may not fully support all features of the cookie consent solution.');
        const banner = document.getElementById('cookieConsentBanner');
        banner.insertAdjacentHTML('beforeend', `
            <p style="color: red; font-size: 12px; margin-top: 10px;">
                Your browser is outdated. Some features may not work as expected. Please consider updating your browser.
            </p>
        `);
    }
}

// Initialize additional features on load
document.addEventListener('DOMContentLoaded', () => {
    manageThirdPartyScripts();
    setupConsentChangeListener();
    optimizePerformance();
    setupFeedbackSubmission();
    setupScrollDismiss();
    optimizeForSEO();
    checkBrowserCompatibility();
});





// Ensure the script runs only once
if (!window.CookieConsentInitialized) {
    window.CookieConsentInitialized = true;
    console.log('Cookie Consent Script Initialized');
} else {
    console.warn('Cookie Consent Script already initialized. Skipping duplicate execution.');
}

// Function to handle cookie consent version updates
function checkScriptVersion() {
    const currentVersion = '4.2';
    const lastVersion = localStorage.getItem('cookieConsentScriptVersion');
    
    if (lastVersion !== currentVersion) {
        // Reset consent if script version changes
        setCookie('cookie_consent', '', -1);
        localStorage.setItem('cookieConsentScriptVersion', currentVersion);
        console.log(`Cookie Consent Script updated to version ${currentVersion}. Consent reset.`);
        const banner = document.getElementById('cookieConsentBanner');
        banner.classList.add('show');
    }
}

// Function to handle user session tracking
function trackUserSession() {
    const sessionId = getCookie('session_id') || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setCookie('session_id', sessionId, 1); // Expires in 1 day

    if (config.analytics.enabled) {
        trackConsentEvent('session_start', sessionId);
        logConsentAction('session_start', { sessionId, timestamp: new Date().toISOString() });
    }

    window.addEventListener('beforeunload', () => {
        trackConsentEvent('session_end', sessionId);
        logConsentAction('session_end', { sessionId, timestamp: new Date().toISOString() });
    });
}

// Function to handle cookie consent banner animation
function setupBannerAnimation() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.addEventListener('transitionend', () => {
        if (banner.classList.contains('show')) {
            banner.setAttribute('aria-hidden', 'false');
        } else {
            banner.setAttribute('aria-hidden', 'true');
        }
    });

    // Add entrance animation
    banner.classList.add('animate__animated', 'animate__fadeInUp');
}

// Function to handle modal animations
function setupModalAnimations() {
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');

    settingsModal.addEventListener('transitionend', () => {
        if (settingsModal.classList.contains('show')) {
            settingsModal.setAttribute('aria-hidden', 'false');
            settingsModal.querySelector('.cookie-settings-content').classList.add('animate__animated', 'animate__zoomIn');
        } else {
            settingsModal.setAttribute('aria-hidden', 'true');
        }
    });

    analyticsModal.addEventListener('transitionend', () => {
        if (analyticsModal.classList.contains('show')) {
            analyticsModal.setAttribute('aria-hidden', 'false');
            analyticsModal.querySelector('.cookie-analytics-content').classList.add('animate__animated', 'animate__zoomIn');
        } else {
            analyticsModal.setAttribute('aria-hidden', 'true');
        }
    });
}

// Function to add animate.css for animations
function loadAnimationLibrary() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(link);
}

// Function to handle cookie consent compliance with regional regulations
function handleRegionalCompliance() {
    const userLocale = navigator.language || 'en-US';
    const region = userLocale.split('-')[1]?.toUpperCase();

    if (region === 'EU' || region === 'EEA') {
        console.log('EU/EEA user detected. Ensuring strict GDPR compliance.');
        config.behavior.acceptOnContinue = false; // Disable accept on continue for EU users
        config.behavior.acceptOnScroll = false; // Disable accept on scroll for EU users
    }

    if (region === 'CA') {
        console.log('California user detected. Applying CCPA compliance.');
        const banner = document.getElementById('cookieConsentBanner');
        banner.insertAdjacentHTML('beforeend', `
            <p class="ccpa-notice" style="font-size: 12px; margin-top: 10px;">
                California residents: You have the right to opt-out of the sale of your personal information.
            </p>
        `);
    }
}

// Function to handle custom styling overrides
function applyCustomStyles() {
    if (config.customStyles) {
        const style = document.createElement('style');
        style.textContent = config.customStyles;
        document.head.appendChild(style);
        console.log('Applied custom styles for cookie consent UI.');
    }
}

// Function to handle accessibility audit logging
function logAccessibilityAudit() {
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const ariaElements = document.querySelectorAll('[role], [aria-label], [aria-hidden]');
    
    console.log('Accessibility Audit:');
    console.log(`Focusable elements: ${focusableElements.length}`);
    console.log(`ARIA attributes used: ${ariaElements.length}`);
    
    focusableElements.forEach((el, index) => {
        if (!el.hasAttribute('tabindex') && !el.closest('[role="dialog"]')) {
            console.warn(`Focusable element #${index} lacks explicit tabindex:`, el);
        }
    });
}

// Function to handle unit tests (for development purposes)
function runUnitTests() {
    if (config.environment === 'development') {
        console.log('Running unit tests for Cookie Consent Script...');

        // Test 1: Cookie setting and retrieval
        setCookie('test_cookie', 'test_value', 1);
        const testCookie = getCookie('test_cookie');
        console.assert(testCookie === 'test_value', 'Test 1 Failed: Cookie setting/retrieval');

        // Test 2: Consent banner visibility
        const banner = document.getElementById('cookieConsentBanner');
        console.assert(banner.classList.contains('show') || getCookie('cookie_consent'), 'Test 2 Failed: Banner visibility');

        // Test 3: Theme toggle
        const initialTheme = currentThemeMode;
        toggleTheme();
        console.assert(currentThemeMode !== initialTheme, 'Test 3 Failed: Theme toggle');

        console.log('Unit tests completed.');
    }
}

// Function to handle script cleanup on page unload
function cleanupOnUnload() {
    window.addEventListener('beforeunload', () => {
        // Clean up intervals and observers
        const intervals = window.__cookieConsentIntervals || [];
        intervals.forEach(clearInterval);
        
        const observers = window.__cookieConsentObservers || [];
        observers.forEach(observer => observer.disconnect());
        
        // Log cleanup
        logConsentAction('cleanup', { timestamp: new Date().toISOString() });
    });
}

// Function to store intervals and observers for cleanup
function storeInterval(intervalId) {
    window.__cookieConsentIntervals = window.__cookieConsentIntervals || [];
    window.__cookieConsentIntervals.push(intervalId);
}

function storeObserver(observer) {
    window.__cookieConsentObservers = window.__cookieConsentObservers || [];
    window.__cookieConsentObservers.push(observer);
}

// Initialize remaining features
document.addEventListener('DOMContentLoaded', () => {
    checkScriptVersion();
    trackUserSession();
    loadAnimationLibrary();
    setupBannerAnimation();
    setupModalAnimations();
    handleRegionalCompliance();
    applyCustomStyles();
    logAccessibilityAudit();
    runUnitTests();
    cleanupOnUnload();

    // Store intervals for cleanup
    storeInterval(setInterval(checkConsentExpiration, 24 * 60 * 60 * 1000));
    if (config.behavior.scanForNewCookies) {
        storeInterval(setInterval(scanCookies, config.behavior.cookieScanInterval));
    }

    // Store observers (e.g., IntersectionObserver for performance optimization)
    const observer = new IntersectionObserver(() => {}, {});
    storeObserver(observer);

    // Final initialization log
    console.log('All Cookie Consent features initialized successfully.');
});





// Export the module if running in a module environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.CookieConsent;
}

// Function to handle API integration for external consent management
function setupApiIntegration() {
    if (config.apiIntegration.enabled) {
        const apiEndpoint = config.apiIntegration.endpoint;
        const apiKey = config.apiIntegration.apiKey;

        // Function to sync consent with external API
        window.CookieConsent.syncWithApi = async function() {
            const consent = JSON.parse(getCookie('cookie_consent') || '{}');
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        userId: getCookie('session_id'),
                        consent: consent,
                        timestamp: new Date().toISOString()
                    })
                });

                if (!response.ok) {
                    throw new Error('API sync failed');
                }

                const result = await response.json();
                console.log('Consent synced with API:', result);
                trackConsentEvent('api_sync', 'Consent synced successfully');
            } catch (error) {
                console.error('Error syncing with API:', error);
                trackConsentEvent('api_sync_error', error.message);
            }
        };

        // Sync on consent change
        window.addEventListener('cookieConsentChanged', () => {
            window.CookieConsent.syncWithApi();
        });

        // Initial sync
        if (getCookie('cookie_consent')) {
            window.CookieConsent.syncWithApi();
        }
    }
}

// Function to handle consent withdrawal
function setupConsentWithdrawal() {
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <button id="withdrawConsentBtn" class="cookie-btn reject-btn">${translations[config.languageConfig.defaultLanguage]?.withdrawConsent || 'Withdraw Consent'}</button>
        `);

        document.getElementById('withdrawConsentBtn').addEventListener('click', () => {
            if (confirm(translations[config.languageConfig.defaultLanguage]?.withdrawConfirm || 'Are you sure you want to withdraw your consent? This will reset your preferences.')) {
                setCookie('cookie_consent', '', -1);
                rejectAllCookies();
                hideCookieSettingsModal();
                const banner = document.getElementById('cookieConsentBanner');
                banner.classList.add('show');
                trackConsentEvent('withdraw_consent', 'User withdrew consent');
                logConsentAction('withdraw_consent', { timestamp: new Date().toISOString() });
            }
        });
    }
}

// Function to handle cookie consent audit logging
function setupAuditLogging() {
    window.CookieConsent.getAuditLog = function() {
        const auditLog = JSON.parse(localStorage.getItem('cookieConsentAuditLog') || '[]');
        return auditLog;
    };

    window.CookieConsent.logAuditEvent = function(eventType, details) {
        const auditLog = JSON.parse(localStorage.getItem('cookieConsentAuditLog') || '[]');
        auditLog.push({
            eventType,
            details,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('cookieConsentAuditLog', JSON.stringify(auditLog.slice(-100))); // Keep last 100 events
    };

    // Log initial consent state
    if (getCookie('cookie_consent')) {
        window.CookieConsent.logAuditEvent('initial_consent_state', { consent: JSON.parse(getCookie('cookie_consent')) });
    }

    // Log consent changes
    window.addEventListener('cookieConsentChanged', () => {
        window.CookieConsent.logAuditEvent('consent_changed', { consent: JSON.parse(getCookie('cookie_consent')) });
    });
}

// Function to handle custom event triggers
function setupCustomEvents() {
    window.CookieConsent.on = function(eventName, callback) {
        window.addEventListener(`cookieConsent_${eventName}`, (e) => {
            callback(e.detail);
        });
    };

    window.CookieConsent.trigger = function(eventName, detail) {
        const event = new CustomEvent(`cookieConsent_${eventName}`, { detail });
        window.dispatchEvent(event);
    };

    // Trigger events on key actions
    const actionsToTrigger = [
        { elementId: 'acceptAllBtn', eventName: 'acceptAll' },
        { elementId: 'rejectAllBtn', eventName: 'rejectAll' },
        { elementId: 'saveSettingsBtn', eventName: 'saveSettings' },
        { elementId: 'withdrawConsentBtn', eventName: 'withdrawConsent' }
    ];

    actionsToTrigger.forEach(({ elementId, eventName }) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', () => {
                window.CookieConsent.trigger(eventName, { consent: JSON.parse(getCookie('cookie_consent') || '{}') });
            });
        }
    });
}

// Function to handle consent banner customization
function applyBannerCustomization() {
    if (config.bannerCustomization) {
        const banner = document.getElementById('cookieConsentBanner');
        const { backgroundColor, textColor, buttonColor, buttonTextColor } = config.bannerCustomization;

        const style = document.createElement('style');
        style.textContent = `
            .cookie-consent-banner {
                background-color: ${backgroundColor || 'var(--background-color)'} !important;
                color: ${textColor || 'var(--text-color)'} !important;
            }
            .cookie-btn {
                background-color: ${buttonColor || 'var(--button-bg)'} !important;
                color: ${buttonTextColor || 'var(--button-text)'} !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to handle privacy policy link customization
function customizePrivacyPolicyLink() {
    const privacyLink = document.querySelector('.privacy-policy-link');
    if (config.privacyPolicyUrl) {
        privacyLink.setAttribute('href', config.privacyPolicyUrl);
    }
    if (config.privacyPolicyTarget) {
        privacyLink.setAttribute('target', config.privacyPolicyTarget);
    }
}

// Function to handle consent banner position dynamically
function adjustBannerPosition() {
    const banner = document.getElementById('cookieConsentBanner');
    if (config.behavior.bannerPosition === 'top') {
        banner.style.top = '20px';
        banner.style.bottom = 'auto';
    } else if (config.behavior.bannerPosition === 'bottom') {
        banner.style.bottom = '20px';
        banner.style.top = 'auto';
    }
}

// Function to handle local storage cleanup
function cleanupLocalStorage() {
    const keysToClean = ['consentAnalytics', 'cookieConsentAuditLog'];
    const now = Date.now();
    keysToClean.forEach(key => {
        const data = localStorage.getItem(key);
        if (data) {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) {
                const filtered = parsed.filter(item => {
                    const timestamp = new Date(item.timestamp).getTime();
                    return (now - timestamp) / (1000 * 60 * 60 * 24) <= config.storageDays || 30;
                });
                localStorage.setItem(key, JSON.stringify(filtered));
            }
        }
    });
}

// Function to handle user consent preferences backup
function backupConsentPreferences() {
    const consent = getCookie('cookie_consent');
    if (consent) {
        localStorage.setItem('cookieConsentBackup', consent);
    }

    window.CookieConsent.restoreBackup = function() {
        const backup = localStorage.getItem('cookieConsentBackup');
        if (backup) {
            setCookie('cookie_consent', backup, 365);
            dispatchConsentChange();
            console.log('Consent preferences restored from backup.');
            trackConsentEvent('restore_backup', 'Consent preferences restored');
        }
    };
}

// Function to handle browser fingerprinting for analytics
function generateFingerprint() {
    const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset()
    ].join('|');
    return btoa(fingerprint); // Simple base64 encoding
}

// Function to enhance analytics with fingerprint
function enhanceAnalyticsWithFingerprint() {
    if (config.analytics.enabled) {
        const fingerprint = generateFingerprint();
        consentAnalytics.userFingerprints = consentAnalytics.userFingerprints || {};
        consentAnalytics.userFingerprints[fingerprint] = consentAnalytics.userFingerprints[fingerprint] || 0;
        consentAnalytics.userFingerprints[fingerprint]++;
        saveAnalyticsData();
    }
}

// Function to handle consent banner dismiss on timeout
function setupDismissTimeout() {
    if (config.behavior.dismissOnTimeout) {
        setTimeout(() => {
            if (!getCookie('cookie_consent')) {
                const banner = document.getElementById('cookieConsentBanner');
                if (banner.classList.contains('show')) {
                    acceptAllCookies();
                    hideCookieBanner();
                    showFloatingButton();
                    trackConsentEvent('dismiss_timeout', 'Banner dismissed on timeout');
                    logConsentAction('dismiss_timeout', { timestamp: new Date().toISOString() });
                }
            }
        }, config.behavior.dismissTimeoutDuration || 30000); // Default to 30 seconds
    }
}

// Function to handle consent banner keyboard navigation
function enhanceKeyboardNavigation() {
    const banner = document.getElementById('cookieConsentBanner');
    const buttons = banner.querySelectorAll('.cookie-btn');
    buttons.forEach((button, index) => {
        button.setAttribute('tabindex', '0');
        button.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                const nextIndex = (index + 1) % buttons.length;
                buttons[nextIndex].focus();
                e.preventDefault();
            } else if (e.key === 'ArrowLeft') {
                const prevIndex = (index - 1 + buttons.length) % buttons.length;
                buttons[prevIndex].focus();
                e.preventDefault();
            }
        });
    });
}

// Function to handle consent banner visibility based on user interaction
function handleVisibilityBasedOnInteraction() {
    let interactionCount = 0;
    const maxInteractions = config.behavior.maxInteractionsBeforeDismiss || 3;

    document.addEventListener('click', () => {
        if (!getCookie('cookie_consent')) {
            interactionCount++;
            if (interactionCount >= maxInteractions) {
                const banner = document.getElementById('cookieConsentBanner');
                if (banner.classList.contains('show')) {
                    acceptAllCookies();
                    hideCookieBanner();
                    showFloatingButton();
                    trackConsentEvent('dismiss_interaction_limit', 'Banner dismissed after interaction limit');
                    logConsentAction('dismiss_interaction_limit', { timestamp: new Date().toISOString() });
                }
            }
        }
    });
}

// Initialize final features
document.addEventListener('DOMContentLoaded', () => {
    setupApiIntegration();
    setupConsentWithdrawal();
    setupAuditLogging();
    setupCustomEvents();
    applyBannerCustomization();
    customizePrivacyPolicyLink();
    adjustBannerPosition();
    cleanupLocalStorage();
    backupConsentPreferences();
    enhanceAnalyticsWithFingerprint();
    setupDismissTimeout();
    enhanceKeyboardNavigation();
    handleVisibilityBasedOnInteraction();

    // Log final initialization
    console.log('Cookie Consent Script fully initialized with all features.');
});

// Polyfills for older browsers
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}





// Ensure script closure
console.log('Cookie Consent Script execution completed.');

// Function to handle user consent summary for display
function displayConsentSummary() {
    const consent = JSON.parse(getCookie('cookie_consent') || '{}');
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'cookie-consent-summary';
    summaryDiv.innerHTML = `
        <h3>${translations[config.languageConfig.defaultLanguage]?.consentSummary || 'Your Consent Preferences'}</h3>
        <p><strong>${translations[config.languageConfig.defaultLanguage]?.functional || 'Functional'}</strong>: Always Enabled</p>
        <p><strong>${translations[config.languageConfig.defaultLanguage]?.categories.analytics.title || 'Analytics'}</strong>: ${consent.analytics ? 'Enabled' : 'Disabled'}</p>
        <p><strong>${translations[config.languageConfig.defaultLanguage]?.categories.performance.title || 'Performance'}</strong>: ${consent.performance ? 'Enabled' : 'Disabled'}</p>
        <p><strong>${translations[config.languageConfig.defaultLanguage]?.categories.advertising.title || 'Advertising'}</strong>: ${consent.advertising ? 'Enabled' : 'Disabled'}</p>
        <button id="viewConsentDetailsBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewDetails || 'View Details'}</button>
    `;
    document.body.appendChild(summaryDiv);

    const style = document.createElement('style');
    style.textContent = `
        .cookie-consent-summary {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: var(--background-color);
            color: var(--text-color);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 999;
            max-width: 300px;
            font-size: 14px;
        }
        .cookie-consent-summary h3 {
            margin-top: 0;
            font-size: 16px;
        }
        .cookie-consent-summary p {
            margin: 5px 0;
        }
        #viewConsentDetailsBtn {
            margin-top: 10px;
            padding: 8px 15px;
            font-size: 13px;
        }
    `;
    document.head.appendChild(style);

    document.getElementById('viewConsentDetailsBtn').addEventListener('click', () => {
        showCookieSettingsModal();
        summaryDiv.style.display = 'none';
    });

    // Show summary only if consent exists
    if (!getCookie('cookie_consent')) {
        summaryDiv.style.display = 'none';
    }

    // Update summary visibility on consent change
    window.addEventListener('cookieConsentChanged', () => {
        const updatedConsent = JSON.parse(getCookie('cookie_consent') || '{}');
        summaryDiv.querySelectorAll('p')[1].innerHTML = `<strong>${translations[config.languageConfig.defaultLanguage]?.categories.analytics.title || 'Analytics'}</strong>: ${updatedConsent.analytics ? 'Enabled' : 'Disabled'}`;
        summaryDiv.querySelectorAll('p')[2].innerHTML = `<strong>${translations[config.languageConfig.defaultLanguage]?.categories.performance.title || 'Performance'}</strong>: ${updatedConsent.performance ? 'Enabled' : 'Disabled'}`;
        summaryDiv.querySelectorAll('p')[3].innerHTML = `<strong>${translations[config.languageConfig.defaultLanguage]?.categories.advertising.title || 'Advertising'}</strong>: ${updatedConsent.advertising ? 'Enabled' : 'Disabled'}`;
        summaryDiv.style.display = 'block';
    });
}

// Function to handle consent export for user
function exportUserConsent() {
    window.CookieConsent.exportUserConsent = function() {
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        const consentData = {
            consent: consent,
            timestamp: new Date().toISOString(),
            sessionId: getCookie('session_id')
        };

        const dataStr = JSON.stringify(consentData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `user_consent_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        trackConsentEvent('export_user_consent', 'User exported consent data');
        logConsentAction('export_user_consent', { timestamp: new Date().toISOString() });
    };

    // Add export button to settings modal
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <button id="exportConsentBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.exportConsent || 'Export Consent'}</button>
        `);
        document.getElementById('exportConsentBtn').addEventListener('click', window.CookieConsent.exportUserConsent);
    }
}

// Function to handle consent import for user
function importUserConsent() {
    window.CookieConsent.importUserConsent = function(consentData) {
        if (consentData && consentData.consent) {
            setCookie('cookie_consent', JSON.stringify(consentData.consent), 365);
            dispatchConsentChange();
            console.log('Consent preferences imported successfully.');
            trackConsentEvent('import_user_consent', 'User imported consent data');
            logConsentAction('import_user_consent', { timestamp: new Date().toISOString() });
        } else {
            console.error('Invalid consent data for import.');
            trackConsentEvent('import_user_consent_error', 'Invalid consent data');
        }
    };

    // Add import functionality (via file input)
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <label for="importConsentInput" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.importConsent || 'Import Consent'}</label>
            <input type="file" id="importConsentInput" accept=".json" style="display: none;">
        `);

        const importInput = document.getElementById('importConsentInput');
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const consentData = JSON.parse(event.target.result);
                        window.CookieConsent.importUserConsent(consentData);
                    } catch (error) {
                        console.error('Error importing consent:', error);
                        trackConsentEvent('import_user_consent_error', error.message);
                    }
                };
                reader.readAsText(file);
            }
        });
    }
}

// Function to handle consent preferences reset
function setupConsentReset() {
    window.CookieConsent.resetConsent = function() {
        setCookie('cookie_consent', '', -1);
        localStorage.removeItem('cookieConsentBackup');
        localStorage.removeItem('consentAnalytics');
        localStorage.removeItem('cookieConsentAuditLog');
        rejectAllCookies();
        const banner = document.getElementById('cookieConsentBanner');
        banner.classList.add('show');
        trackConsentEvent('reset_consent', 'User reset all consent preferences');
        logConsentAction('reset_consent', { timestamp: new Date().toISOString() });
    };

    // Add reset button to settings modal
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <button id="resetConsentBtn" class="cookie-btn reject-btn">${translations[config.languageConfig.defaultLanguage]?.resetConsent || 'Reset Consent'}</button>
        `);
        document.getElementById('resetConsentBtn').addEventListener('click', () => {
            if (confirm(translations[config.languageConfig.defaultLanguage]?.resetConfirm || 'Are you sure you want to reset all consent preferences?')) {
                window.CookieConsent.resetConsent();
            }
        });
    }
}

// Function to handle consent banner auto-translation
function setupAutoTranslation() {
    if (config.languageConfig.autoTranslate && navigator.language) {
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang] && !getCookie('preferred_language')) {
            changeLanguage(browserLang);
            const languageSelect = document.getElementById('cookieLanguageSelect');
            if (languageSelect) {
                languageSelect.value = browserLang;
            }
        }
    }
}

// Function to handle consent banner accessibility enhancements
function enhanceAccessibility() {
    // Add ARIA live region for dynamic updates
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('role', 'status');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    // Function to announce updates to screen readers
    window.CookieConsent.announce = function(message) {
        liveRegion.textContent = message;
    };

    // Announce banner visibility
    const banner = document.getElementById('cookieConsentBanner');
    const observer = new MutationObserver(() => {
        if (banner.classList.contains('show')) {
            window.CookieConsent.announce(translations[config.languageConfig.defaultLanguage]?.bannerShown || 'Cookie consent banner is now visible.');
        } else {
            window.CookieConsent.announce(translations[config.languageConfig.defaultLanguage]?.bannerHidden || 'Cookie consent banner is now hidden.');
        }
    });
    observer.observe(banner, { attributes: true, attributeFilter: ['class'] });

    // Announce modal visibility
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    const modalObserver = new MutationObserver(() => {
        if (settingsModal.classList.contains('show')) {
            window.CookieConsent.announce(translations[config.languageConfig.defaultLanguage]?.settingsModalShown || 'Cookie settings modal is now open.');
        } else if (analyticsModal.classList.contains('show')) {
            window.CookieConsent.announce(translations[config.languageConfig.defaultLanguage]?.analyticsModalShown || 'Analytics dashboard is now open.');
        }
    });
    modalObserver.observe(settingsModal, { attributes: true, attributeFilter: ['class'] });
    modalObserver.observe(analyticsModal, { attributes: true, attributeFilter: ['class'] });

    // Ensure buttons have accessible names
    document.querySelectorAll('.cookie-btn').forEach(btn => {
        if (!btn.getAttribute('aria-label')) {
            btn.setAttribute('aria-label', btn.textContent);
        }
    });
}

// Function to handle consent banner dismissal feedback
function setupDismissalFeedback() {
    window.addEventListener('cookieConsentChanged', () => {
        const banner = document.getElementById('cookieConsentBanner');
        if (!banner.classList.contains('show')) {
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'cookie-dismiss-feedback';
            feedbackDiv.innerHTML = `
                <p>${translations[config.languageConfig.defaultLanguage]?.dismissFeedback || 'Thank you for setting your preferences!'}</p>
            `;
            document.body.appendChild(feedbackDiv);

            const style = document.createElement('style');
            style.textContent = `
                .cookie-dismiss-feedback {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: var(--background-color);
                    color: var(--text-color);
                    padding: 10px 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    z-index: 999;
                    font-size: 14px;
                }
            `;
            document.head.appendChild(style);

            setTimeout(() => {
                feedbackDiv.remove();
            }, 3000);
        }
    });
}

// Function to handle consent banner performance monitoring
function monitorPerformance() {
    const startTime = performance.now();
    window.addEventListener('cookieConsentLoaded', () => {
        const loadTime = performance.now() - startTime;
        console.log(`Cookie Consent Script loaded in ${loadTime.toFixed(2)}ms`);
        trackConsentEvent('script_load_time', loadTime.toFixed(2));
    });

    // Monitor interaction performance
    const buttons = document.querySelectorAll('.cookie-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const interactionStart = performance.now();
            setTimeout(() => {
                const interactionTime = performance.now() - interactionStart;
                console.log(`Button interaction took ${interactionTime.toFixed(2)}ms`);
                trackConsentEvent('button_interaction_time', interactionTime.toFixed(2));
            }, 0);
        });
    });
}

// Function to handle consent banner error boundary
function setupErrorBoundary() {
    window.CookieConsent.errorBoundary = function(fn) {
        return (...args) => {
            try {
                return fn(...args);
            } catch (error) {
                console.error('Error in Cookie Consent operation:', error);
                trackConsentEvent('operation_error', error.message);
                window.CookieConsent.announce(translations[config.languageConfig.defaultLanguage]?.errorOccurred || 'An error occurred. Please try again.');
                return null;
            }
        };
    };

    // Wrap key functions with error boundary
    window.CookieConsent.acceptAll = window.CookieConsent.errorBoundary(window.CookieConsent.acceptAll);
    window.CookieConsent.rejectAll = window.CookieConsent.errorBoundary(window.CookieConsent.rejectAll);
    window.CookieConsent.saveSettings = window.CookieConsent.errorBoundary(window.CookieConsent.saveSettings);
}

// Function to handle consent banner state persistence
function persistState() {
    window.addEventListener('beforeunload', () => {
        const state = {
            theme: currentThemeMode,
            language: document.getElementById('cookieLanguageSelect')?.value || config.languageConfig.defaultLanguage,
            settingsModalOpen: document.getElementById('cookieSettingsModal').classList.contains('show'),
            analyticsModalOpen: document.getElementById('cookieAnalyticsModal').classList.contains('show')
        };
        localStorage.setItem('cookieConsentState', JSON.stringify(state));
    });

    window.addEventListener('DOMContentLoaded', () => {
        const savedState = JSON.parse(localStorage.getItem('cookieConsentState') || '{}');
        if (savedState.theme) {
            currentThemeMode = savedState.theme;
            updateTheme();
        }
        if (savedState.language) {
            changeLanguage(savedState.language);
            const languageSelect = document.getElementById('cookieLanguageSelect');
            if (languageSelect) {
                languageSelect.value = savedState.language;
            }
        }
        if (savedState.settingsModalOpen) {
            showCookieSettingsModal();
        }
        if (savedState.analyticsModalOpen) {
            showAnalyticsModal();
        }
    });
}

// Function to handle consent banner version changelog
function displayChangelog() {
    const currentVersion = '4.2';
    const changelog = {
        '4.2': 'Added dark mode, enhanced analytics dashboard, and improved accessibility.',
        '4.1': 'Introduced multilingual support and GDPR compliance features.',
        '4.0': 'Initial release with basic cookie consent functionality.'
    };

    window.CookieConsent.showChangelog = function() {
        const changelogDiv = document.createElement('div');
        changelogDiv.className = 'cookie-changelog-modal';
        changelogDiv.innerHTML = `
            <div class="cookie-changelog-content">
                <h2>${translations[config.languageConfig.defaultLanguage]?.changelog || 'Changelog'}</h2>
                <div class="changelog-body">
                    ${Object.entries(changelog).map(([version, changes]) => `
                        <div class="changelog-entry">
                            <h3>Version ${version}</h3>
                            <p>${changes}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="changelog-footer">
                    <button id="closeChangelogBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.close || 'Close'}</button>
                </div>
            </div>
        `;
        document.body.appendChild(changelogDiv);

        const style = document.createElement('style');
        style.textContent = `
            .cookie-changelog-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1001;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .cookie-changelog-content {
                background: var(--background-color);
                color: var(--text-color);
                padding: 20px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            .changelog-body {
                margin-bottom: 20px;
            }
            .changelog-entry {
                margin-bottom: 15px;
            }
            .changelog-entry h3 {
                margin: 0;
                font-size: 1.2rem;
            }
            .changelog-footer {
                text-align: right;
            }
        `;
        document.head.appendChild(style);

        document.getElementById('closeChangelogBtn').addEventListener('click', () => {
            changelogDiv.remove();
        });

        changelogDiv.addEventListener('click', (e) => {
            if (e.target === changelogDiv) {
                changelogDiv.remove();
            }
        });
    };

    // Add changelog button to settings modal
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <button id="showChangelogBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.showChangelog || 'Show Changelog'}</button>
        `);
        document.getElementById('showChangelogBtn').addEventListener('click', window.CookieConsent.showChangelog);
    }
}

// Function to handle consent banner debug mode
function setupDebugMode() {
    if (config.environment === 'development') {
        window.CookieConsent.debug = function() {
            console.log('Debug Information:');
            console.log('Current Consent:', JSON.parse(getCookie('cookie_consent') || '{}'));
            console.log('Analytics Data:', consentAnalytics);
            console.log('Audit Log:', window.CookieConsent.getAuditLog());
            console.log('Session ID:', getCookie('session_id'));
            console.log('Current Theme:', currentThemeMode);
            console.log('Current Language:', document.getElementById('cookieLanguageSelect')?.value || config.languageConfig.defaultLanguage);
        };

        // Add debug button to settings modal
        const settingsFooter = document.querySelector('.cookie-settings-footer');
        if (settingsFooter) {
            settingsFooter.insertAdjacentHTML('beforeend', `
                <button id="debugBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.debug || 'Debug'}</button>
            `);
            document.getElementById('debugBtn').addEventListener('click', window.CookieConsent.debug);
        }
    }
}

// Function to handle consent banner notification system
function setupNotificationSystem() {
    window.CookieConsent.notify = function(message, type = 'info') {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = `cookie-notification cookie-notification-${type}`;
        notificationDiv.innerHTML = `
            <p>${message}</p>
        `;
        document.body.appendChild(notificationDiv);

        const style = document.createElement('style');
        style.textContent = `
            .cookie-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--background-color);
                color: var(--text-color);
                padding: 10px 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                font-size: 14px;
            }
            .cookie-notification-info {
                border-left: 4px solid #007bff;
            }
            .cookie-notification-error {
                border-left: 4px solid #dc3545;
            }
            .cookie-notification-success {
                border-left: 4px solid #28a745;
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            notificationDiv.remove();
        }, 5000);
    };

    // Notify on key events
    window.addEventListener('cookieConsentChanged', () => {
        window.CookieConsent.notify(translations[config.languageConfig.defaultLanguage]?.consentUpdated || 'Your consent preferences have been updated.', 'success');
    });
}

// Function to handle consent banner analytics export to CSV
function exportAnalyticsToCSV() {
    window.CookieConsent.exportAnalyticsToCSV = function() {
        if (!isDashboardAuthenticated) {
            window.CookieConsent.notify('Access denied: Not authenticated.', 'error');
            return;
        }

        const csvRows = [];
        const headers = ['Metric', 'Accepted', 'Rejected', 'Custom'];
        csvRows.push(headers.join(','));

        // Total stats
        const total = consentAnalytics.total;
        csvRows.push(`Total,${total.accepted},${total.rejected},${total.custom}`);

        // Daily stats
        Object.entries(consentAnalytics.daily).forEach(([date, stats]) => {
            csvRows.push(`Daily (${date}),${stats.accepted},${stats.rejected},${stats.custom}`);
        });

        // Weekly stats
        Object.entries(consentAnalytics.weekly).forEach(([week, stats]) => {
            csvRows.push(`Weekly (${week}),${stats.accepted},${stats.rejected},${stats.custom}`);
        });

        // Monthly stats
        Object.entries(consentAnalytics.monthly).forEach(([month, stats]) => {
            csvRows.push(`Monthly (${month}),${stats.accepted},${stats.rejected},${stats.custom}`);
        });

        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `analytics_export_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        trackConsentEvent('export_analytics_csv', 'Analytics exported to CSV');
    };

    // Update analytics dashboard to include CSV export
    const analyticsActions = document.querySelector('.analytics-actions');
    if (analyticsActions) {
        analyticsActions.insertAdjacentHTML('beforeend', `
            <button id="exportAnalyticsCsvBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.exportCsv || 'Export to CSV'}</button>
        `);
        document.getElementById('exportAnalyticsCsvBtn').addEventListener('click', window.CookieConsent.exportAnalyticsToCSV);
    }
}

// Function to handle consent banner usage statistics
function collectUsageStatistics() {
    window.CookieConsent.getUsageStats = function() {
        return {
            totalInteractions: Object.values(consentAnalytics.total).reduce((a, b) => a + b, 0),
            uniqueUsers: Object.keys(consentAnalytics.userFingerprints || {}).length,
            averageSessionDuration: calculateAverageSessionDuration(),
            mostCommonLanguage: calculateMostCommonLanguage(),
            themePreference: calculateThemePreference()
        };
    };

    function calculateAverageSessionDuration() {
        const auditLog = window.CookieConsent.getAuditLog();
        const sessions = {};
        auditLog.forEach(entry => {
            if (entry.eventType === 'session_start' || entry.eventType === 'session_end') {
                const sessionId = entry.details.sessionId;
                sessions[sessionId] = sessions[sessionId] || {};
                sessions[sessionId][entry.eventType] = new Date(entry.timestamp).getTime();
            }
        });

        const durations = Object.values(sessions)
            .filter(session => session.session_start && session.session_end)
            .map(session => (session.session_end - session.session_start) / 1000);

        return durations.length ? (durations.reduce((a, b) => a + b, 0) / durations.length).toFixed(2) : 0;
    }

    function calculateMostCommonLanguage() {
        const auditLog = window.CookieConsent.getAuditLog();
        const languageCounts = {};
        auditLog.forEach(entry => {
            if (entry.eventType === 'change_language') {
                const lang = entry.details.language;
                languageCounts[lang] = (languageCounts[lang] || 0) + 1;
            }
        });

        return Object.entries(languageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || config.languageConfig.defaultLanguage;
    }

    function calculateThemePreference() {
        const auditLog = window.CookieConsent.getAuditLog();
        const themeCounts = { light: 0, dark: 0 };
        auditLog.forEach(entry => {
            if (entry.eventType === 'toggle_theme') {
                themeCounts[entry.details.theme]++;
            }
        });

        return themeCounts.dark > themeCounts.light ? 'dark' : 'light';
    }

    // Add usage stats to analytics dashboard
    const analyticsBody = document.querySelector('.cookie-analytics-body');
    if (analyticsBody) {
        const stats = window.CookieConsent.getUsageStats();
        analyticsBody.insertAdjacentHTML('beforeend', `
            <div class="usage-stats">
                <h3>${translations[config.languageConfig.defaultLanguage]?.usageStats || 'Usage Statistics'}</h3>
                <p>Total Interactions: ${stats.totalInteractions}</p>
                <p>Unique Users: ${stats.uniqueUsers}</p>
                <p>Average Session Duration: ${stats.averageSessionDuration}s</p>
                <p>Most Common Language: ${stats.mostCommonLanguage}</p>
                <p>Preferred Theme: ${stats.themePreference}</p>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .usage-stats {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .usage-stats h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            .usage-stats p {
                margin: 5px 0;
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to handle consent banner consent history
function setupConsentHistory() {
    window.CookieConsent.getConsentHistory = function() {
        const history = JSON.parse(localStorage.getItem('cookieConsentHistory') || '[]');
        return history;
    };

    window.CookieConsent.logConsentChange = function(consent) {
        const history = JSON.parse(localStorage.getItem('cookieConsentHistory') || '[]');
        history.push({
            consent: consent,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('cookieConsentHistory', JSON.stringify(history.slice(-50))); // Keep last 50 changes
    };

    window.addEventListener('cookieConsentChanged', () => {
        window.CookieConsent.logConsentChange(JSON.parse(getCookie('cookie_consent') || '{}'));
    });

    // Display consent history in settings modal
    const settingsBody = document.querySelector('.cookie-settings-body');
    if (settingsBody) {
        settingsBody.insertAdjacentHTML('beforeend', `
            <div class="consent-history">
                <h3>${translations[config.languageConfig.defaultLanguage]?.consentHistory || 'Consent History'}</h3>
                <div id="consentHistoryList"></div>
                <button id="viewConsentHistoryBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewHistory || 'View History'}</button>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .consent-history {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .consent-history h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            #consentHistoryList {
                max-height: 200px;
                overflow-y: auto;
                margin-bottom: 10px;
            }
            .history-entry {
                padding: 10px;
                border-bottom: 1px solid var(--border-color);
            }
            .history-entry:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(style);

        document.getElementById('viewConsentHistoryBtn').addEventListener('click', () => {
            const history = window.CookieConsent.getConsentHistory();
            const historyList = document.getElementById('consentHistoryList');
            historyList.innerHTML = history.length ? history.map(entry => `
                <div class="history-entry">
                    <p><strong>${new Date(entry.timestamp).toLocaleString()}</strong></p>
                    <p>Analytics: ${entry.consent.analytics ? 'Enabled' : 'Disabled'}</p>
                    <p>Performance: ${entry.consent.performance ? 'Enabled' : 'Disabled'}</p>
                    <p>Advertising: ${entry.consent.advertising ? 'Enabled' : 'Disabled'}</p>
                </div>
            `).join('') : `<p>${translations[config.languageConfig.defaultLanguage]?.noHistory || 'No consent history available.'}</p>`;
        });
    }
}

// Function to handle consent banner user feedback analytics
function collectFeedbackAnalytics() {
    if (config.feedback.enabled) {
        window.CookieConsent.getFeedbackAnalytics = function() {
            const feedbackLog = JSON.parse(localStorage.getItem('cookieConsentFeedbackLog') || '[]');
            return feedbackLog;
        };

        window.addEventListener('feedback_submitted', (e) => {
            const feedbackLog = JSON.parse(localStorage.getItem('cookieConsentFeedbackLog') || '[]');
            feedbackLog.push({
                feedback: e.detail,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('cookieConsentFeedbackLog', JSON.stringify(feedbackLog.slice(-100))); // Keep last 100 feedbacks
        });

        // Display feedback analytics in analytics dashboard
        const analyticsBody = document.querySelector('.cookie-analytics-body');
        if (analyticsBody) {
            analyticsBody.insertAdjacentHTML('beforeend', `
                <div class="feedback-analytics">
                    <h3>${translations[config.languageConfig.defaultLanguage]?.feedbackAnalytics || 'Feedback Analytics'}</h3>
                    <button id="viewFeedbackAnalyticsBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewFeedback || 'View Feedback'}</button>
                    <div id="feedbackAnalyticsList"></div>
                </div>
            `);

            const style = document.createElement('style');
            style.textContent = `
                .feedback-analytics {
                    margin-top: 20px;
                    padding: 15px;
                    background: var(--background-color);
                    border-radius: 8px;
                }
                .feedback-analytics h3 {
                    margin-top: 0;
                    font-size: 1.2rem;
                }
                #feedbackAnalyticsList {
                    max-height: 200px;
                    overflow-y: auto;
                    margin-top: 10px;
                }
                .feedback-entry {
                    padding: 10px;
                    border-bottom: 1px solid var(--border-color);
                }
                .feedback-entry:last-child {
                    border-bottom: none;
                }
            `;
            document.head.appendChild(style);

            document.getElementById('viewFeedbackAnalyticsBtn').addEventListener('click', () => {
                const feedbackLog = window.CookieConsent.getFeedbackAnalytics();
                const feedbackList = document.getElementById('feedbackAnalyticsList');
                feedbackList.innerHTML = feedbackLog.length ? feedbackLog.map(entry => `
                    <div class="feedback-entry">
                        <p><strong>${new Date(entry.timestamp).toLocaleString()}</strong></p>
                        <p>${entry.feedback}</p>
                    </div>
                `).join('') : `<p>${translations[config.languageConfig.defaultLanguage]?.noFeedback || 'No feedback available.'}</p>`;
            });
        }
    }
}

// Function to handle consent banner legal notice
function displayLegalNotice() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.insertAdjacentHTML('beforeend', `
        <p class="legal-notice" style="font-size: 12px; margin-top: 10px;">
            ${translations[config.languageConfig.defaultLanguage]?.legalNotice || 'By using this site, you agree to our cookie policy as per GDPR and other applicable regulations.'}
        </p>
    `);
}

// Function to handle consent banner UI testing mode
function setupUITestingMode() {
    if (config.environment === 'testing') {
        window.CookieConsent.simulateConsentAction = function(action) {
            if (action === 'accept') {
                acceptAllCookies();
            } else if (action === 'reject') {
                rejectAllCookies();
            } else if (action === 'custom') {
                saveCustomSettings({});
            }
            hideCookieBanner();
            showFloatingButton();
            console.log(`Simulated ${action} action for UI testing.`);
        };

        window.CookieConsent.toggleModal = function(modalType) {
            if (modalType === 'settings') {
                showCookieSettingsModal();
            } else if (modalType === 'analytics') {
                showAnalyticsModal();
            }
            console.log(`Toggled ${modalType} modal for UI testing.`);
        };
    }
}

// Function to handle consent banner final initialization
function finalInitialization() {
    // Ensure all event listeners are attached
    document.querySelectorAll('.cookie-btn').forEach(btn => {
        btn.removeEventListener('click', btn.__clickHandler);
        btn.__clickHandler = () => {
            trackConsentEvent('button_click', btn.id);
        };
        btn.addEventListener('click', btn.__clickHandler);
    });

    // Log final state
    console.log('Final State:', {
        consent: JSON.parse(getCookie('cookie_consent') || '{}'),
        theme: currentThemeMode,
        language: document.getElementById('cookieLanguageSelect')?.value || config.languageConfig.defaultLanguage,
        analyticsEnabled: config.analytics.enabled,
        feedbackEnabled: config.feedback.enabled
    });

    // Notify user of successful initialization
    window.CookieConsent.notify(translations[config.languageConfig.defaultLanguage]?.initSuccess || 'Cookie consent system initialized successfully.', 'success');
}

// Initialize remaining features
document.addEventListener('DOMContentLoaded', () => {
    displayConsentSummary();
    exportUserConsent();
    importUserConsent();
    setupConsentReset();
    setupAutoTranslation();
    enhanceAccessibility();
    setupDismissalFeedback();
    monitorPerformance();
    setupErrorBoundary();
    persistState();
    displayChangelog();
    setupDebugMode();
    setupNotificationSystem();
    exportAnalyticsToCSV();
    collectUsageStatistics();
    setupConsentHistory();
    collectFeedbackAnalytics();
    displayLegalNotice();
    setupUITestingMode();
    finalInitialization();

    // Final log
    console.log('Cookie Consent Script fully loaded and operational.');
});

// Ensure global availability
window.CookieConsent = window.CookieConsent || {};
console.log('Cookie Consent Script fully closed.');







// Ensure global availability
window.CookieConsent = window.CookieConsent || {};
console.log('Cookie Consent Script fully closed.');

// Function to handle consent banner A/B testing
function setupABTesting() {
    if (config.abTesting && config.abTesting.enabled) {
        const variant = Math.random() < 0.5 ? 'A' : 'B';
        localStorage.setItem('cookieConsentABVariant', variant);
        console.log(`A/B Testing Variant: ${variant}`);

        const banner = document.getElementById('cookieConsentBanner');
        if (variant === 'A') {
            banner.classList.add('variant-a');
            banner.querySelector('h2').textContent = translations[config.languageConfig.defaultLanguage]?.variantATitle || 'We Value Your Privacy';
        } else {
            banner.classList.add('variant-b');
            banner.querySelector('h2').textContent = translations[config.languageConfig.defaultLanguage]?.variantBTitle || 'Cookie Preferences';
        }

        // Track A/B testing results
        window.addEventListener('cookieConsentChanged', () => {
            const consentAction = JSON.parse(getCookie('cookie_consent') || '{}');
            trackConsentEvent('ab_test_result', {
                variant,
                action: consentAction.analytics || consentAction.performance || consentAction.advertising ? 'accepted' : 'rejected'
            });
        });

        // Add variant-specific styles
        const style = document.createElement('style');
        style.textContent = `
            .variant-a .cookie-consent-banner {
                background-color: #f0f8ff;
                border: 2px solid #007bff;
            }
            .variant-b .cookie-consent-banner {
                background-color: #fff5f5;
                border: 2px solid #ff4d4f;
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to handle consent banner geolocation-based customization
function handleGeolocationCustomization() {
    // Note: Since network calls are restricted, we'll simulate geolocation with browser language
    const userLocale = navigator.language || 'en-US';
    const region = userLocale.split('-')[1]?.toUpperCase() || 'US';

    const banner = document.getElementById('cookieConsentBanner');
    if (region === 'GB') {
        banner.insertAdjacentHTML('beforeend', `
            <p class="region-notice" style="font-size: 12px; margin-top: 10px;">
                ${translations[config.languageConfig.defaultLanguage]?.ukNotice || 'UK users: We comply with UK GDPR and PECR regulations.'}
            </p>
        `);
    } else if (region === 'BR') {
        banner.insertAdjacentHTML('beforeend', `
            <p class="region-notice" style="font-size: 12px; margin-top: 10px;">
                ${translations[config.languageConfig.defaultLanguage]?.brNotice || 'Brazilian users: We comply with LGPD regulations.'}
            </p>
        `);
    }

    trackConsentEvent('geolocation_customization', region);
}

// Function to handle consent banner user journey tracking
function trackUserJourney() {
    const journey = JSON.parse(localStorage.getItem('cookieConsentUserJourney') || '[]');
    
    function logJourneyEvent(event) {
        journey.push({
            event,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('cookieConsentUserJourney', JSON.stringify(journey.slice(-50))); // Keep last 50 events
    }

    // Track key user actions
    document.getElementById('acceptAllBtn')?.addEventListener('click', () => logJourneyEvent('accept_all'));
    document.getElementById('rejectAllBtn')?.addEventListener('click', () => logJourneyEvent('reject_all'));
    document.getElementById('adjustConsentBtn')?.addEventListener('click', () => logJourneyEvent('open_settings'));
    document.getElementById('saveSettingsBtn')?.addEventListener('click', () => logJourneyEvent('save_settings'));
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => logJourneyEvent('toggle_theme'));
    document.getElementById('cookieLanguageSelect')?.addEventListener('change', () => logJourneyEvent('change_language'));

    window.CookieConsent.getUserJourney = function() {
        return JSON.parse(localStorage.getItem('cookieConsentUserJourney') || '[]');
    };

    // Add journey view in analytics dashboard
    const analyticsBody = document.querySelector('.cookie-analytics-body');
    if (analyticsBody) {
        analyticsBody.insertAdjacentHTML('beforeend', `
            <div class="user-journey">
                <h3>${translations[config.languageConfig.defaultLanguage]?.userJourney || 'User Journey'}</h3>
                <button id="viewUserJourneyBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewJourney || 'View Journey'}</button>
                <div id="userJourneyList"></div>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .user-journey {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .user-journey h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            #userJourneyList {
                max-height: 200px;
                overflow-y: auto;
                margin-top: 10px;
            }
            .journey-entry {
                padding: 10px;
                border-bottom: 1px solid var(--border-color);
            }
            .journey-entry:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(style);

        document.getElementById('viewUserJourneyBtn').addEventListener('click', () => {
            const journey = window.CookieConsent.getUserJourney();
            const journeyList = document.getElementById('userJourneyList');
            journeyList.innerHTML = journey.length ? journey.map(entry => `
                <div class="journey-entry">
                    <p><strong>${new Date(entry.timestamp).toLocaleString()}</strong>: ${entry.event}</p>
                </div>
            `).join('') : `<p>${translations[config.languageConfig.defaultLanguage]?.noJourney || 'No user journey data available.'}</p>`;
        });
    }
}

// Function to handle consent banner consent rate optimization
function optimizeConsentRate() {
    const consentRate = consentAnalytics.total.accepted / (Object.values(consentAnalytics.total).reduce((a, b) => a + b, 0) || 1);
    if (consentRate < 0.5 && consentAnalytics.total.accepted + consentAnalytics.total.rejected + consentAnalytics.total.custom > 100) {
        console.log('Low consent rate detected. Applying optimization strategies.');
        const banner = document.getElementById('cookieConsentBanner');
        banner.querySelector('h2').textContent = translations[config.languageConfig.defaultLanguage]?.optimizedTitle || 'We Need Your Consent to Enhance Your Experience';
        banner.querySelector('p').textContent = translations[config.languageConfig.defaultLanguage]?.optimizedDescription || 'Help us improve your experience by allowing cookies for analytics and personalization.';
        trackConsentEvent('consent_rate_optimization', 'Applied optimization due to low consent rate');
    }
}

// Function to handle consent banner session replay (for debugging)
function setupSessionReplay() {
    if (config.environment === 'development') {
        window.CookieConsent.startSessionReplay = function() {
            const replayLog = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                replayLog.push({
                    type: 'log',
                    message: args,
                    timestamp: new Date().toISOString()
                });
                originalConsoleLog(...args);
            };

            const originalConsoleError = console.error;
            console.error = (...args) => {
                replayLog.push({
                    type: 'error',
                    message: args,
                    timestamp: new Date().toISOString()
                });
                originalConsoleError(...args);
            };

            window.addEventListener('click', (e) => {
                replayLog.push({
                    type: 'click',
                    target: e.target.id || e.target.className,
                    timestamp: new Date().toISOString()
                });
            });

            window.CookieConsent.getSessionReplay = function() {
                return replayLog;
            };

            console.log('Session replay started.');
        };

        window.CookieConsent.startSessionReplay();

        // Add session replay view in analytics dashboard
        const analyticsBody = document.querySelector('.cookie-analytics-body');
        if (analyticsBody) {
            analyticsBody.insertAdjacentHTML('beforeend', `
                <div class="session-replay">
                    <h3>${translations[config.languageConfig.defaultLanguage]?.sessionReplay || 'Session Replay'}</h3>
                    <button id="viewSessionReplayBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewReplay || 'View Replay'}</button>
                    <div id="sessionReplayList"></div>
                </div>
            `);

            const style = document.createElement('style');
            style.textContent = `
                .session-replay {
                    margin-top: 20px;
                    padding: 15px;
                    background: var(--background-color);
                    border-radius: 8px;
                }
                .session-replay h3 {
                    margin-top: 0;
                    font-size: 1.2rem;
                }
                #sessionReplayList {
                    max-height: 200px;
                    overflow-y: auto;
                    margin-top: 10px;
                }
                .replay-entry {
                    padding: 10px;
                    border-bottom: 1px solid var(--border-color);
                }
                .replay-entry:last-child {
                    border-bottom: none;
                }
            `;
            document.head.appendChild(style);

            document.getElementById('viewSessionReplayBtn').addEventListener('click', () => {
                const replay = window.CookieConsent.getSessionReplay();
                const replayList = document.getElementById('sessionReplayList');
                replayList.innerHTML = replay.length ? replay.map(entry => `
                    <div class="replay-entry">
                        <p><strong>${new Date(entry.timestamp).toLocaleString()}</strong>: [${entry.type}] ${entry.message || entry.target}</p>
                    </div>
                `).join('') : `<p>${translations[config.languageConfig.defaultLanguage]?.noReplay || 'No session replay data available.'}</p>`;
            });
        }
    }
}

// Function to handle consent banner consent expiration notification
function setupConsentExpirationNotification() {
    window.addEventListener('cookieConsentChanged', () => {
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        if (consent.timestamp) {
            const expirationDate = new Date(consent.timestamp);
            expirationDate.setDate(expirationDate.getDate() + config.behavior.consentExpirationReminderDays);
            const daysLeft = Math.ceil((expirationDate - new Date()) / (1000 * 60 * 60 * 24));

            if (daysLeft <= 5 && daysLeft > 0) {
                window.CookieConsent.notify(
                    `${translations[config.languageConfig.defaultLanguage]?.consentExpirationNotice || 'Your cookie consent will expire in'} ${daysLeft} ${translations[config.languageConfig.defaultLanguage]?.days || 'days'}.`,
                    'info'
                );
            }
        }
    });
}

// Function to handle consent banner privacy impact assessment
function performPrivacyImpactAssessment() {
    const pia = {
        cookiesUsed: Object.keys(cookieDatabase),
        categories: ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'],
        consentRate: (consentAnalytics.total.accepted / (Object.values(consentAnalytics.total).reduce((a, b) => a + b, 0) || 1) * 100).toFixed(2) + '%',
        dataProcessed: ['User preferences', 'Analytics data', 'Session data'],
        thirdParties: config.analytics.enabled ? ['Google Analytics'] : [],
        complianceNotes: []
    };

    if (config.behavior.acceptOnScroll) {
        pia.complianceNotes.push('Accept on scroll may not be fully GDPR compliant in some regions.');
    }

    window.CookieConsent.getPrivacyImpactAssessment = function() {
        return pia;
    };

    // Add PIA view in analytics dashboard
    const analyticsBody = document.querySelector('.cookie-analytics-body');
    if (analyticsBody) {
        analyticsBody.insertAdjacentHTML('beforeend', `
            <div class="privacy-impact-assessment">
                <h3>${translations[config.languageConfig.defaultLanguage]?.privacyImpactAssessment || 'Privacy Impact Assessment'}</h3>
                <button id="viewPIABtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewPIA || 'View PIA'}</button>
                <div id="piaList"></div>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .privacy-impact-assessment {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .privacy-impact-assessment h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            #piaList {
                margin-top: 10px;
            }
            .pia-entry {
                padding: 10px;
                border-bottom: 1px solid var(--border-color);
            }
            .pia-entry:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(style);

        document.getElementById('viewPIABtn').addEventListener('click', () => {
            const pia = window.CookieConsent.getPrivacyImpactAssessment();
            const piaList = document.getElementById('piaList');
            piaList.innerHTML = `
                <div class="pia-entry">
                    <p><strong>Cookies Used:</strong> ${pia.cookiesUsed.join(', ')}</p>
                </div>
                <div class="pia-entry">
                    <p><strong>Categories:</strong> ${pia.categories.join(', ')}</p>
                </div>
                <div class="pia-entry">
                    <p><strong>Consent Rate:</strong> ${pia.consentRate}</p>
                </div>
                <div class="pia-entry">
                    <p><strong>Data Processed:</strong> ${pia.dataProcessed.join(', ')}</p>
                </div>
                <div class="pia-entry">
                    <p><strong>Third Parties:</strong> ${pia.thirdParties.length ? pia.thirdParties.join(', ') : 'None'}</p>
                </div>
                <div class="pia-entry">
                    <p><strong>Compliance Notes:</strong> ${pia.complianceNotes.length ? pia.complianceNotes.join('; ') : 'None'}</p>
                </div>
            `;
        });
    }
}

// Function to handle consent banner user education
function setupUserEducation() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.insertAdjacentHTML('beforeend', `
        <button id="learnMoreBtn" class="cookie-btn" style="margin-left: 10px;">
            ${translations[config.languageConfig.defaultLanguage]?.learnMore || 'Learn More'}
        </button>
    `);

    document.getElementById('learnMoreBtn').addEventListener('click', () => {
        const educationModal = document.createElement('div');
        educationModal.className = 'cookie-education-modal';
        educationModal.innerHTML = `
            <div class="cookie-education-content">
                <h2>${translations[config.languageConfig.defaultLanguage]?.educationTitle || 'About Cookies'}</h2>
                <div class="education-body">
                    <p>${translations[config.languageConfig.defaultLanguage]?.educationText || 'Cookies are small files that websites use to store information on your device. They help improve your experience by remembering your preferences, analyzing site usage, and delivering personalized content. You can control which cookies are used by adjusting your settings.'}</p>
                    <h3>${translations[config.languageConfig.defaultLanguage]?.cookieTypes || 'Types of Cookies'}</h3>
                    <ul>
                        <li><strong>Functional:</strong> Essential for basic site functionality.</li>
                        <li><strong>Analytics:</strong> Help us understand how you use the site.</li>
                        <li><strong>Performance:</strong> Improve site speed and performance.</li>
                        <li><strong>Advertising:</strong> Deliver personalized ads.</li>
                    </ul>
                </div>
                <div class="education-footer">
                    <button id="closeEducationBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.close || 'Close'}</button>
                </div>
            </div>
        `;
        document.body.appendChild(educationModal);

        const style = document.createElement('style');
        style.textContent = `
            .cookie-education-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1001;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .cookie-education-content {
                background: var(--background-color);
                color: var(--text-color);
                padding: 20px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            .education-body {
                margin-bottom: 20px;
            }
            .education-body ul {
                padding-left: 20px;
            }
            .education-footer {
                text-align: right;
            }
        `;
        document.head.appendChild(style);

        document.getElementById('closeEducationBtn').addEventListener('click', () => {
            educationModal.remove();
        });

        educationModal.addEventListener('click', (e) => {
            if (e.target === educationModal) {
                educationModal.remove();
            }
        });

        trackConsentEvent('user_education_viewed', 'User viewed education modal');
    });
}

// Function to handle consent banner consent validation
function validateConsent() {
    const consent = JSON.parse(getCookie('cookie_consent') || '{}');
    const requiredFields = ['functional', 'analytics', 'performance', 'advertising', 'timestamp'];
    const isValid = requiredFields.every(field => field in consent);

    if (!isValid) {
        console.warn('Invalid consent data detected. Resetting consent.');
        setCookie('cookie_consent', '', -1);
        const banner = document.getElementById('cookieConsentBanner');
        banner.classList.add('show');
        trackConsentEvent('consent_validation_failed', 'Invalid consent data');
    }

    return isValid;
}

// Function to handle consent banner backup and restore to cloud (simulated)
function setupCloudBackup() {
    // Note: Since network calls are restricted, we'll simulate cloud backup with localStorage
    window.CookieConsent.backupToCloud = function() {
        const consent = getCookie('cookie_consent');
        if (consent) {
            localStorage.setItem('cookieConsentCloudBackup', consent);
            console.log('Consent backed up to cloud (simulated).');
            trackConsentEvent('cloud_backup', 'Consent backed up to cloud');
        }
    };

    window.CookieConsent.restoreFromCloud = function() {
        const backup = localStorage.getItem('cookieConsentCloudBackup');
        if (backup) {
            setCookie('cookie_consent', backup, 365);
            dispatchConsentChange();
            console.log('Consent restored from cloud (simulated).');
            trackConsentEvent('cloud_restore', 'Consent restored from cloud');
        }
    };

    // Add backup/restore buttons to settings modal
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <button id="backupToCloudBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.backupToCloud || 'Backup to Cloud'}</button>
            <button id="restoreFromCloudBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.restoreFromCloud || 'Restore from Cloud'}</button>
        `);
        document.getElementById('backupToCloudBtn').addEventListener('click', window.CookieConsent.backupToCloud);
        document.getElementById('restoreFromCloudBtn').addEventListener('click', window.CookieConsent.restoreFromCloud);
    }
}

// Function to handle consent banner user preference analytics
function collectPreferenceAnalytics() {
    const preferenceAnalytics = JSON.parse(localStorage.getItem('cookieConsentPreferenceAnalytics') || '{}');
    
    window.addEventListener('cookieConsentChanged', () => {
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        preferenceAnalytics.analytics = preferenceAnalytics.analytics || { enabled: 0, disabled: 0 };
        preferenceAnalytics.performance = preferenceAnalytics.performance || { enabled: 0, disabled: 0 };
        preferenceAnalytics.advertising = preferenceAnalytics.advertising || { enabled: 0, disabled: 0 };

        preferenceAnalytics.analytics[consent.analytics ? 'enabled' : 'disabled']++;
        preferenceAnalytics.performance[consent.performance ? 'enabled' : 'disabled']++;
        preferenceAnalytics.advertising[consent.advertising ? 'enabled' : 'disabled']++;

        localStorage.setItem('cookieConsentPreferenceAnalytics', JSON.stringify(preferenceAnalytics));
    });

    // Display preference analytics in analytics dashboard
    const analyticsBody = document.querySelector('.cookie-analytics-body');
    if (analyticsBody) {
        analyticsBody.insertAdjacentHTML('beforeend', `
            <div class="preference-analytics">
                <h3>${translations[config.languageConfig.defaultLanguage]?.preferenceAnalytics || 'Preference Analytics'}</h3>
                <button id="viewPreferenceAnalyticsBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.viewPreferences || 'View Preferences'}</button>
                <div id="preferenceAnalyticsList"></div>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .preference-analytics {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .preference-analytics h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            #preferenceAnalyticsList {
                margin-top: 10px;
            }
            .preference-entry {
                padding: 10px;
                border-bottom: 1px solid var(--border-color);
            }
            .preference-entry:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(style);

        document.getElementById('viewPreferenceAnalyticsBtn').addEventListener('click', () => {
            const prefAnalytics = JSON.parse(localStorage.getItem('cookieConsentPreferenceAnalytics') || '{}');
            const analyticsList = document.getElementById('preferenceAnalyticsList');
            analyticsList.innerHTML = `
                <div class="preference-entry">
                    <p><strong>Analytics:</strong> Enabled: ${prefAnalytics.analytics?.enabled || 0}, Disabled: ${prefAnalytics.analytics?.disabled || 0}</p>
                </div>
                <div class="preference-entry">
                    <p><strong>Performance:</strong> Enabled: ${prefAnalytics.performance?.enabled || 0}, Disabled: ${prefAnalytics.performance?.disabled || 0}</p>
                </div>
                <div class="preference-entry">
                    <p><strong>Advertising:</strong> Enabled: ${prefAnalytics.advertising?.enabled || 0}, Disabled: ${prefAnalytics.advertising?.disabled || 0}</p>
                </div>
            `;
        });
    }
}

// Function to handle consent banner consent policy link
function addConsentPolicyLink() {
    const settingsBody = document.querySelector('.cookie-settings-body');
    if (settingsBody && config.consentPolicyUrl) {
        settingsBody.insertAdjacentHTML('beforeend', `
            <div class="consent-policy">
                <h3>${translations[config.languageConfig.defaultLanguage]?.consentPolicy || 'Consent Policy'}</h3>
                <p>
                    ${translations[config.languageConfig.defaultLanguage]?.viewConsentPolicy || 'Learn more about how we handle your consent in our'}
                    <a href="${config.consentPolicyUrl}" target="_blank" class="consent-policy-link">
                        ${translations[config.languageConfig.defaultLanguage]?.consentPolicyLink || 'Consent Policy'}
                    </a>.
                </p>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .consent-policy {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .consent-policy h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            .consent-policy-link {
                color: var(--button-bg);
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to handle consent banner user notification preferences
function setupNotificationPreferences() {
    const settingsBody = document.querySelector('.cookie-settings-body');
    if (settingsBody) {
        settingsBody.insertAdjacentHTML('beforeend', `
            <div class="notification-preferences">
                <h3>${translations[config.languageConfig.defaultLanguage]?.notificationPrefs || 'Notification Preferences'}</h3>
                <label>
                    <input type="checkbox" id="notifyOnConsentChange" ${config.notifyOnConsentChange ? 'checked' : ''}>
                    ${translations[config.languageConfig.defaultLanguage]?.notifyOnConsentChange || 'Notify me on consent changes'}
                </label>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .notification-preferences {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .notification-preferences h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
            .notification-preferences label {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        `;
        document.head.appendChild(style);

        const notifyCheckbox = document.getElementById('notifyOnConsentChange');
        notifyCheckbox.addEventListener('change', () => {
            config.notifyOnConsentChange = notifyCheckbox.checked;
            localStorage.setItem('cookieConsentConfig', JSON.stringify(config));
            trackConsentEvent('notification_preference_change', config.notifyOnConsentChange ? 'Enabled' : 'Disabled');
        });
    }
}

// Function to handle consent banner user consent sharing
function setupConsentSharing() {
    window.CookieConsent.shareConsent = function() {
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        const shareData = {
            title: translations[config.languageConfig.defaultLanguage]?.shareConsentTitle || 'My Cookie Consent Preferences',
            text: JSON.stringify(consent, null, 2),
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => {
                    console.log('Consent shared successfully.');
                    trackConsentEvent('share_consent', 'Consent shared via navigator.share');
                })
                .catch(error => {
                    console.error('Error sharing consent:', error);
                    trackConsentEvent('share_consent_error', error.message);
                });
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(JSON.stringify(consent, null, 2))
                .then(() => {
                    window.CookieConsent.notify(translations[config.languageConfig.defaultLanguage]?.consentCopied || 'Consent preferences copied to clipboard.', 'success');
                    trackConsentEvent('share_consent_clipboard', 'Consent copied to clipboard');
                })
                .catch(error => {
                    console.error('Error copying consent to clipboard:', error);
                    trackConsentEvent('share_consent_clipboard_error', error.message);
                });
        }
    };

    // Add share button to settings modal
    const settingsFooter = document.querySelector('.cookie-settings-footer');
    if (settingsFooter) {
        settingsFooter.insertAdjacentHTML('beforeend', `
            <button id="shareConsentBtn" class="cookie-btn">${translations[config.languageConfig.defaultLanguage]?.shareConsent || 'Share Consent'}</button>
        `);
        document.getElementById('shareConsentBtn').addEventListener('click', window.CookieConsent.shareConsent);
    }
}

// Function to handle consent banner consent verification
function setupConsentVerification() {
    window.CookieConsent.verifyConsent = function() {
        const consent = JSON.parse(getCookie('cookie_consent') || '{}');
        const verificationHash = btoa(JSON.stringify(consent)); // Simple hash for verification
        localStorage.setItem('cookieConsentVerificationHash', verificationHash);
        return verificationHash;
    };

    window.CookieConsent.checkVerification = function() {
        const currentConsent = JSON.parse(getCookie('cookie_consent') || '{}');
        const currentHash = btoa(JSON.stringify(currentConsent));
        const storedHash = localStorage.getItem('cookieConsentVerificationHash');
        const isVerified = currentHash === storedHash;

        if (!isVerified) {
            console.warn('Consent verification failed. Consent may have been tampered with.');
            trackConsentEvent('consent_verification_failed', 'Consent verification failed');
            window.CookieConsent.notify(translations[config.languageConfig.defaultLanguage]?.verificationFailed || 'Consent verification failed. Please review your preferences.', 'error');
        }

        return isVerified;
    };

    // Verify consent on load
    if (getCookie('cookie_consent')) {
        window.CookieConsent.verifyConsent();
        window.CookieConsent.checkVerification();
    }

    window.addEventListener('cookieConsentChanged', () => {
        window.CookieConsent.verifyConsent();
    });
}

// Function to handle consent banner consent expiration countdown
function setupExpirationCountdown() {
    const settingsBody = document.querySelector('.cookie-settings-body');
    if (settingsBody) {
        settingsBody.insertAdjacentHTML('beforeend', `
            <div class="consent-expiration">
                <h3>${translations[config.languageConfig.defaultLanguage]?.consentExpiration || 'Consent Expiration'}</h3>
                <p id="expirationCountdown"></p>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .consent-expiration {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .consent-expiration h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
        `;
        document.head.appendChild(style);

        function updateCountdown() {
            const consent = JSON.parse(getCookie('cookie_consent') || '{}');
            if (consent.timestamp) {
                const expirationDate = new Date(consent.timestamp);
                expirationDate.setDate(expirationDate.getDate() + config.behavior.consentExpirationReminderDays);
                const timeLeft = expirationDate - new Date();
                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    document.getElementById('expirationCountdown').textContent = 
                        `${translations[config.languageConfig.defaultLanguage]?.expiresIn || 'Expires in'} ${days} ${translations[config.languageConfig.defaultLanguage]?.days || 'days'}, ${hours} ${translations[config.languageConfig.defaultLanguage]?.hours || 'hours'}, ${minutes} ${translations[config.languageConfig.defaultLanguage]?.minutes || 'minutes'}`;
                } else {
                    document.getElementById('expirationCountdown').textContent = 
                        translations[config.languageConfig.defaultLanguage]?.expired || 'Consent has expired. Please renew your preferences.';
                }
            } else {
                document.getElementById('expirationCountdown').textContent = 
                    translations[config.languageConfig.defaultLanguage]?.noConsent || 'No consent recorded.';
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 60000); // Update every minute
    }
}

// Function to handle consent banner user consent preview
function setupConsentPreview() {
    const settingsBody = document.querySelector('.cookie-settings-body');
    if (settingsBody) {
        settingsBody.insertAdjacentHTML('beforeend', `
            <div class="consent-preview">
                <h3>${translations[config.languageConfig.defaultLanguage]?.consentPreview || 'Consent Preview'}</h3>
                <p id="consentPreviewText"></p>
            </div>
        `);

        const style = document.createElement('style');
        style.textContent = `
            .consent-preview {
                margin-top: 20px;
                padding: 15px;
                background: var(--background-color);
                border-radius: 8px;
            }
            .consent-preview h3 {
                margin-top: 0;
                font-size: 1.2rem;
            }
        `;
        document.head.appendChild(style);

        function updatePreview() {
            const checkboxes = document.querySelectorAll('.cookie-settings-body input[type="checkbox"]');
            const preview = {
                analytics: false,
                performance: false,
                advertising: false
            };

            checkboxes.forEach(checkbox => {
                const category = checkbox.id.replace('consent', '').toLowerCase();
                if (category in preview) {
                    preview[category] = checkbox.checked;
                }
            });

            document.getElementById('consentPreviewText').textContent = `
                Analytics: ${preview.analytics ? 'Enabled' : 'Disabled'}, 
                Performance: ${preview.performance ? 'Enabled' : 'Disabled'}, 
                Advertising: ${preview.advertising ? 'Enabled' : 'Disabled'}
            `;
        }

        document.querySelectorAll('.cookie-settings-body input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updatePreview);
        });

        updatePreview();
    }
}

// Function to handle consent banner final validation
function finalValidation() {
    const consent = JSON.parse(getCookie('cookie_consent') || '{}');
    const analyticsEnabled = consent.analytics && config.analytics.enabled;
    const scriptsLoaded = document.querySelectorAll('script[src*="googletagmanager.com"]').length > 0;

    if (analyticsEnabled && !scriptsLoaded) {
        console.warn('Analytics consent given but scripts not loaded. Reinitializing third-party scripts.');
        manageThirdPartyScripts();
        trackConsentEvent('script_reinitialization', 'Reinitialized third-party scripts due to mismatch');
    } else if (!analyticsEnabled && scriptsLoaded) {
        console.warn('Analytics consent not given but scripts loaded. Removing third-party scripts.');
        manageThirdPartyScripts();
        trackConsentEvent('script_removal', 'Removed third-party scripts due to mismatch');
    }

    // Validate UI state
    const bannerVisible = document.getElementById('cookieConsentBanner').classList.contains('show');
    if (consent.timestamp && bannerVisible) {
        console.warn('Consent exists but banner is visible. Hiding banner.');
        hideCookieBanner();
        showFloatingButton();
        trackConsentEvent('ui_validation', 'Hid banner due to existing consent');
    }
}

// Initialize final features
document.addEventListener('DOMContentLoaded', () => {
    setupABTesting();
    handleGeolocationCustomization();
    trackUserJourney();
    optimizeConsentRate();
    setupSessionReplay();
    setupConsentExpirationNotification();
    performPrivacyImpactAssessment();
    setupUserEducation();
    validateConsent();
    setupCloudBackup();
    collectPreferenceAnalytics();
    addConsentPolicyLink();
    setupNotificationPreferences();
    setupConsentSharing();
    setupConsentVerification();
    setupExpirationCountdown();
    setupConsentPreview();
    finalValidation();




// Final log
    console.log('Cookie Consent Script execution fully completed with all features operational.');
});

// Function to persist script version for future reference
function persistScriptVersion() {
    const scriptVersion = '4.2'; // Current script version
    localStorage.setItem('cookieConsentScriptVersion', scriptVersion);
    console.log(`Script version ${scriptVersion} persisted for future reference.`);
    trackConsentEvent('script_version_persisted', scriptVersion);
}

// Function to log a final audit entry
function logFinalAuditEntry() {
    window.CookieConsent.logAuditEvent('script_execution_completed', {
        version: localStorage.getItem('cookieConsentScriptVersion') || '4.2',
        consent: JSON.parse(getCookie('cookie_consent') || '{}'),
        analyticsEnabled: config.analytics.enabled,
        feedbackEnabled: config.feedback.enabled,
        abTestingEnabled: config.abTesting?.enabled || false,
        timestamp: new Date().toISOString()
    });
    console.log('Final audit entry logged for script execution completion.');
}

// Function to perform a self-diagnostic check
function runSelfDiagnostic() {
    const diagnostics = {
        consentStored: !!getCookie('cookie_consent'),
        analyticsOperational: config.analytics.enabled ? !!window.CookieConsent.getAnalyticsData : true,
        uiElementsPresent: !!document.getElementById('cookieConsentBanner') && !!document.getElementById('cookieSettingsModal'),
        eventListenersAttached: !!document.getElementById('acceptAllBtn')?.onclick,
        translationsLoaded: !!translations[config.languageConfig.defaultLanguage],
        themeApplied: document.body.classList.contains('dark-mode') || document.body.classList.contains('light-mode')
    };

    const allChecksPassed = Object.values(diagnostics).every(check => check === true);
    if (!allChecksPassed) {
        console.error('Self-diagnostic failed:', diagnostics);
        window.CookieConsent.notify(
            translations[config.languageConfig.defaultLanguage]?.diagnosticFailed || 'System diagnostic failed. Some features may not work as expected.',
            'error'
        );
        trackConsentEvent('self_diagnostic_failed', diagnostics);
    } else {
        console.log('Self-diagnostic passed: All systems operational.');
        trackConsentEvent('self_diagnostic_passed', 'All systems operational');
    }

    return allChecksPassed;
}

// Function to handle script shutdown gracefully
function handleScriptShutdown() {
    window.addEventListener('unload', () => {
        // Log shutdown
        logConsentAction('script_shutdown', { timestamp: new Date().toISOString() });
        console.log('Cookie Consent Script shutting down gracefully.');

        // Save final state
        const finalState = {
            consent: JSON.parse(getCookie('cookie_consent') || '{}'),
            theme: currentThemeMode,
            language: document.getElementById('cookieLanguageSelect')?.value || config.languageConfig.defaultLanguage
        };
        localStorage.setItem('cookieConsentFinalState', JSON.stringify(finalState));
    });
}

// Function to setup a watchdog for monitoring script health
function setupWatchdog() {
    const watchdogInterval = setInterval(() => {
        const consent = getCookie('cookie_consent');
        if (consent && !JSON.parse(consent).timestamp) {
            console.warn('Consent timestamp missing. Reinitializing consent.');
            setCookie('cookie_consent', '', -1);
            document.getElementById('cookieConsentBanner').classList.add('show');
            trackConsentEvent('watchdog_reinitialization', 'Consent timestamp missing');
        }

        // Check if banner is stuck in an invalid state
        const bannerVisible = document.getElementById('cookieConsentBanner').classList.contains('show');
        if (consent && bannerVisible) {
            console.warn('Banner visible despite consent. Hiding banner.');
            hideCookieBanner();
            showFloatingButton();
            trackConsentEvent('watchdog_ui_fix', 'Fixed banner visibility issue');
        }
    }, 60000); // Check every minute

    storeInterval(watchdogInterval);
}

// Function to expose public API for external interaction
function exposePublicAPI() {
    window.CookieConsent.getCurrentConsent = function() {
        return JSON.parse(getCookie('cookie_consent') || '{}');
    };

    window.CookieConsent.getConfig = function() {
        return { ...config };
    };

    window.CookieConsent.getTranslations = function() {
        return { ...translations };
    };

    window.CookieConsent.getVersion = function() {
        return localStorage.getItem('cookieConsentScriptVersion') || '4.2';
    };

    console.log('Public API methods exposed for external interaction.');
}

// Final initialization steps
persistScriptVersion();
logFinalAuditEntry();
runSelfDiagnostic();
handleScriptShutdown();
setupWatchdog();
exposePublicAPI();


// Log completion of additional setup
    console.log('Cookie Consent Script additional setup completed.');

// Function to perform final cleanup of temporary variables and states
function performFinalCleanup() {
    // Clear any temporary global variables
    if (window.__cookieConsentTemp) {
        delete window.__cookieConsentTemp;
        console.log('Cleared temporary variables used during setup.');
    }

    // Remove any temporary event listeners not needed post-initialization
    const tempListeners = window.__cookieConsentTempListeners || [];
    tempListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
    });
    window.__cookieConsentTempListeners = [];
    console.log('Cleared temporary event listeners.');

    // Clear any temporary local storage keys
    const tempKeys = ['cookieConsentTempState'];
    tempKeys.forEach(key => {
        localStorage.removeItem(key);
    });
    console.log('Cleared temporary local storage keys.');

    trackConsentEvent('final_cleanup', 'Completed final cleanup of temporary states');
}

// Function to setup error reporting (simulated due to web search restrictions)
function setupErrorReporting() {
    window.onerror = function(message, source, lineno, colno, error) {
        const errorDetails = {
            message: message,
            source: source,
            line: lineno,
            column: colno,
            stack: error?.stack || 'No stack trace available',
            timestamp: new Date().toISOString()
        };

        // Simulate sending error to a central logging system
        console.error('Error reported:', errorDetails);
        window.CookieConsent.logAuditEvent('script_error', errorDetails);
        trackConsentEvent('script_error', errorDetails.message);

        // Notify user of critical error
        window.CookieConsent.notify(
            translations[config.languageConfig.defaultLanguage]?.criticalError || 'A critical error occurred. Please refresh the page.',
            'error'
        );

        return false; // Allow default error handling
    };

    console.log('Error reporting setup completed.');
}

// Function to log performance benchmarking
function logPerformanceBenchmarking() {
    const scriptStartTime = window.__cookieConsentStartTime || performance.now();
    const scriptEndTime = performance.now();
    const executionTime = (scriptEndTime - scriptStartTime).toFixed(2);

    console.log(`Cookie Consent Script total execution time: ${executionTime}ms`);
    trackConsentEvent('script_execution_time', executionTime);

    // Log performance metrics to audit log
    window.CookieConsent.logAuditEvent('script_performance', {
        executionTime: executionTime,
        timestamp: new Date().toISOString()
    });

    // Clean up start time variable
    delete window.__cookieConsentStartTime;
}

// Function to add a documentation link for developers
function addDocumentationLink() {
    if (config.environment === 'development') {
        const settingsFooter = document.querySelector('.cookie-settings-footer');
        if (settingsFooter) {
            settingsFooter.insertAdjacentHTML('beforeend', `
                <a href="https://example.com/cookie-consent-docs" target="_blank" class="cookie-btn documentation-link" style="margin-left: 10px;">
                    ${translations[config.languageConfig.defaultLanguage]?.viewDocs || 'View Documentation'}
                </a>
            `);

            const style = document.createElement('style');
            style.textContent = `
                .documentation-link {
                    background: var(--button-bg);
                    color: var(--button-text);
                    padding: 8px 15px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 13px;
                }
                .documentation-link:hover {
                    background: var(--button-bg-hover);
                }
            `;
            document.head.appendChild(style);

            console.log('Added developer documentation link.');
            trackConsentEvent('documentation_link_added', 'Developer documentation link added');
        }
    }
}

// Function to perform a final script closure
function finalScriptClosure() {
    // Ensure all intervals and observers are stored for potential future cleanup
    const intervals = window.__cookieConsentIntervals || [];
    const observers = window.__cookieConsentObservers || [];
    console.log(`Final script closure: ${intervals.length} intervals and ${observers.length} observers registered.`);

    // Log final script state
    const finalState = {
        consent: JSON.parse(getCookie('cookie_consent') || '{}'),
        version: window.CookieConsent.getVersion(),
        config: window.CookieConsent.getConfig(),
        timestamp: new Date().toISOString()
    };
    window.CookieConsent.logAuditEvent('script_closure', finalState);
    console.log('Final script state logged:', finalState);

    // Mark script as fully closed
    window.CookieConsent.scriptClosed = true;
    console.log('Cookie Consent Script officially closed.');

    // Trigger a custom event for external listeners
    window.CookieConsent.trigger('scriptClosed', { status: 'success' });
}

// Execute final steps
performFinalCleanup();
setupErrorReporting();
logPerformanceBenchmarking();
addDocumentationLink();
finalScriptClosure();

// Final log to confirm script completion
console.log('Cookie Consent Script execution officially completed.');

