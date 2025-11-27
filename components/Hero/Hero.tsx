import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

const Hero = () => {
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-space-cyan to-space-accent">
                    {t('greeting')}
                </h1>
                <h2 className="text-2xl md:text-4xl text-gray-300 font-light animate-fade-in-up delay-200">
                    {t('role')}
                </h2>
            </div>

            {/* Orbital Nexus Animation (CSS Planet) */}
            <div className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 md:opacity-40 pointer-events-none">
                <div className="w-full h-full rounded-full border border-space-cyan/30 animate-spin-slow relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-space-cyan rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-space-pink rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-space-accent/30 animate-spin-slow animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gradient-to-br from-space-accent to-space-pink rounded-full blur-3xl opacity-50 animate-pulse"></div>
            </div>
        </div>
    );
};

export default Hero;
