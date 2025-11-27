import { useRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
    const router = useRouter();
    // const { t } = useTranslation('common');

    const changeLanguage = (locale: string) => {
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div className="flex space-x-4">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full transition-colors ${router.locale === 'en' ? 'bg-space-accent text-white' : 'text-gray-400 hover:text-white'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded-full transition-colors ${router.locale === 'es' ? 'bg-space-accent text-white' : 'text-gray-400 hover:text-white'
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => changeLanguage('ko')}
                className={`px-3 py-1 rounded-full transition-colors ${router.locale === 'ko' ? 'bg-space-accent text-white' : 'text-gray-400 hover:text-white'
                    }`}
            >
                KO
            </button>
        </div>
    );
};

export default LanguageSwitcher;
