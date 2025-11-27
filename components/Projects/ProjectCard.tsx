
import React from 'react';

interface ProjectCardProps {
    title: string;
    description?: string;
    img: string;
    link?: string;
    techStack?: string[];
}

const ProjectCard = ({ title, description, img, link, techStack = [] }: ProjectCardProps) => {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (

        <div className="group relative flex flex-col h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-500/50">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
            </div>

            {/* Image Container with better loading state */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                    </div>
                )}

                <img
                    src={imageError ? "https://via.placeholder.com/600x400/1e293b/06b6d4?text=Project" : img}
                    onError={() => setImageError(true)}
                    onLoad={() => setImageLoaded(true)}
                    alt={title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col flex-grow p-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {description || "An innovative project showcasing modern development practices."}
                </p>

                {/* Tech Stack */}
                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                        {techStack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-slate-800/80 text-cyan-400 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 4 && (
                            <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-slate-800/50 text-slate-500 border border-slate-700/30">
                                +{techStack.length - 4}
                            </span>
                        )}
                    </div>
                )}

                {/* CTA Button */}
                <a
                    href={link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center justify-center gap-2 w-full text-sm font-bold text-white px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                    {/* Button gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 transition-all duration-300 group-hover/btn:from-cyan-500 group-hover/btn:to-purple-500"></div>

                    {/* Button glow */}
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-lg"></div>
                    </div>

                    {/* Button content */}
                    <span className="relative z-10 flex items-center gap-2">
                        <span>View Project</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </a>
            </div>

            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>

    );
};

export default ProjectCard;
