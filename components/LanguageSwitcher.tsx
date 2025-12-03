import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { saveLanguagePreference } from '../utils/useLanguageDetection';

interface Language {
    code: string;
    display: string;
}

const languages: Language[] = [
    { code: 'en', display: 'En' },
    { code: 'es', display: 'Es' },
    { code: 'ko', display: 'Kr' },
];

const LanguageSwitcher = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[0];

    const changeLanguage = (locale: string) => {
        // Save user's manual language preference
        saveLanguagePreference(locale);
        router.push(router.pathname, router.asPath, { locale });
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Close dropdown on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                    bg-space-light/30 backdrop-blur-sm border border-white/10
                    transition-all duration-300 hover:bg-white/5 hover:border-white/20
                    ${isOpen ? 'bg-space-accent text-white border-space-accent shadow-lg shadow-space-accent/30' : 'text-gray-300'}
                    min-w-[80px] justify-between
                `}
                aria-label="Language selector"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>{currentLanguage.display}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-space-light/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 overflow-hidden z-50 animate-fade-in">
                    {languages.map((language, index) => (
                        <button
                            key={language.code}
                            onClick={() => changeLanguage(language.code)}
                            className={`
                                w-full flex items-center justify-between px-4 py-3 text-sm font-medium
                                transition-all duration-200 text-left
                                ${
                                    router.locale === language.code
                                        ? 'bg-space-accent text-white'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }
                                ${index !== languages.length - 1 ? 'border-b border-white/5' : ''}
                            `}
                            aria-label={`Change language to ${language.display}`}
                            aria-pressed={router.locale === language.code}
                        >
                            <span>{language.display}</span>
                            {router.locale === language.code && (
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
