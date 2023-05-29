import React from "react";

interface Props {
  isEnglish: boolean;
}

export const About = ({ isEnglish }: Props) => {
  return (
    <div className="flex mt-6 justify-center align-middle items-center sm:ml-40 sm:mr-40 mx-12">
      <img
        className="rounded-full hidden sm:flex mr-10  scale-75"
        src="https://avatars.githubusercontent.com/u/76756295?v=4"
      />
      <div className="space-y-10">
        <p className="text-xl text-white text-center">
          {isEnglish
            ? `Full-stack web designer and developer,Front-end lover with over two years of experience using different technologies looking for opportunities to seize new trends. I’m able to work under pressure, taking advantage of all resources available or looking for new ones in order to creatively solve potential issues. I’m comfortable with deadlines and team work. In my experience, I’ve managed to gather information so as to compare and improve apps employing several tools.`
            : `Diseñador web y desarrollador Full-Stack, Amante del front-end con más de dos años de experiencia utilizando diferentes tecnologías en busca de oportunidades para aprovechar las nuevas tendencias. Soy capaz de trabajar bajo presión, aprovechando todos los recursos disponibles o buscando nuevos para resolver problemas potenciales de forma creativa. Me siento cómodo con los plazos y el trabajo en equipo. En mi experiencia, he logrado recopilar información para comparar y mejorar aplicaciones utilizando varias herramientas.`}
        </p>
        <p className="text-white text-xl">
          {isEnglish ? `Job Experience:` : `Experiencia Laboral:`}

          <div className="flex justify-center  w-auto">
            <br />
            <ul className="space-y-4">
              <li>
                ◈ Lilab - 6 {isEnglish ? "Months" : "Meses"} • Front-End
                Developer
              </li>
              <li>
                ◈ ivoy - {isEnglish ? "Current" : "Actual"} • Full-Stack
                Developer
              </li>
              <li>
                ◈ Sofi - {isEnglish ? "Current" : "Actual"} • Full-Stack
                Developer (Freelance)
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                ◈ Numen - {isEnglish ? "Current" : "Actual"} • React Mentor
              </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
};
