import React from "react";
import { useTranslation } from "next-i18next";
import { Experience } from "../../utils/usePortfolioData";

interface Props {
  experiences: Experience[];
}



export const About = ({ experiences }: Props) => {
  const { t } = useTranslation("common");




  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-space-cyan to-space-pink rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            className="relative rounded-full w-48 h-48 object-cover border-4 border-space-dark"
            src="https://avatars.githubusercontent.com/u/76756295?v=4"
            alt="Profile"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            {t("about_text")}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-space-cyan to-space-pink">
            {t("job_experience")}
          </span>
        </h3>

        <div className="relative border-l-2 border-space-cyan/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div
                className="absolute top-0 w-4 h-4 rounded-full bg-space-dark border-2 border-space-cyan group-hover:bg-space-cyan group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300"
                style={{ left: '-9px' }}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-space-cyan transition-colors">
                  {exp.role} <span className="text-space-pink">@ {exp.company}</span>
                </h4>
                <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-space-cyan/80">
                  {exp.type}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
