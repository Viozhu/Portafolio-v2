import React from 'react'

interface Props {
    isEnglish: boolean
}

export const About = ({ isEnglish }: Props) => {
    return (
        <div className="flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center">
            <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/76756295?v=4"
            />
            <div className='ml-10 space-y-10'>
                <p className="text-xl text-white text-center">
                    {isEnglish ? `Full-stack web designer and developer, front-end lover. I trained in
                Henry as a full-stack developer, creating projects that were real
                and complex. In addition, the bootcamp greatly improved my
                interpersonal relationships. skills and gave me the opportunity to
                teach beginning students.`
                        :
                        `Diseñador web y desarrollador Full-Stack, amante del front-end. Me forme en Henry como desarrollador Full-stack, creando proyectos que fueran reales
                y complejo. Además, el bootcamp mejoró enormemente mis relaciones interpersonales.
                habilidades y me dio la oportunidad de enseñar a estudiantes principiantes.`
                    }
                </p>
                <p className='text-white text-xl'>
                    {isEnglish ? `Job Experience:` : `Experiencia Laboral:`}

                    <ul className='ml-44'>
                        <li>◈ Lilab - 6 {isEnglish ? 'Months' : 'Meses'} • Front-End Developer</li>
                        <li>◈ ivoy - {isEnglish ? 'Current' : 'Actual'} • Full-Stack Developer</li>
                    </ul>
                </p>
            </div>

        </div>
    )
}
