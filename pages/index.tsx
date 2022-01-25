import * as React from 'react'
import Layout from '../components/Layout/Layout'
import { NextPage } from 'next'
import { Skills } from '../components/Skills/Skills'
import { Contact } from '../components/Contact/contact'
import { About } from '../components/About/About'


const IndexPage: NextPage = () => {

  const [isEnglish, setIsEnglish] = React.useState(true)

  return (
    <div className='bg-black'>
      <Layout title="Jorge Ignacio Garay" isEnglish={isEnglish} setIsEnglish={setIsEnglish}>
        <div className='flex flex-col h-screen justify-between'>
          <div className='flex justify-center h-full items-center'>
            <h1 className='text-white text-3xl italic'>{isEnglish ? 'Hi, Im Jorge Ignacio' : 'Hola, soy Jorge Ignacio'}  <h2 className='text-white italic text-2xl text-center'>{isEnglish ? 'a' : 'un'} Full Stack Developer</h2></h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='align-bottom self-end'>
              <path fill="#ff5500" fillOpacity="0.99" d="M0,96L34.3,106.7C68.6,117,137,139,206,149.3C274.3,160,343,160,411,149.3C480,139,549,117,617,128C685.7,139,754,181,823,170.7C891.4,160,960,96,1029,74.7C1097.1,53,1166,75,1234,85.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
              <path fill="rgb(154 52 18)" fillOpacity="0.99" d="M0,320L20,309.3C40,299,80,277,120,250.7C160,224,200,192,240,197.3C280,203,320,245,360,250.7C400,256,440,224,480,181.3C520,139,560,85,600,96C640,107,680,181,720,208C760,235,800,213,840,213.3C880,213,920,235,960,240C1000,245,1040,235,1080,229.3C1120,224,1160,224,1200,224C1240,224,1280,224,1320,208C1360,192,1400,160,1420,144L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        {/* About */}
        <div className="bg-orange-800">
          <a id="about" className="text-transparent" />
        </div>
        <div className='bg-orange-800 h-auto py-4 flex flex-col align-middle items-center justify-center'>
          <div className='flex justify-center'>
            <h1 className="text-4xl text-white">{isEnglish ? 'About me' : 'Sobre mí'}</h1>
          </div>
          <About isEnglish={isEnglish} />

        </div>
        {/* Portafolio */}
        <div className="mb-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ff5500" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="rgb(154 52 18)" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,234.7C384,224,480,128,576,101.3C672,75,768,117,864,122.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          <a id="portafolio" className="text-transparent" />
          <h1 className="text-4xl text-white text-center">Portafolio</h1>
        </div>
        <div className="flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center">
        </div>
        <div >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='align-bottom self-end'>
            <path fill="#00cba9" fillOpacity="0.99" d="M0,96L34.3,106.7C68.6,117,137,139,206,149.3C274.3,160,343,160,411,149.3C480,139,549,117,617,128C685.7,139,754,181,823,170.7C891.4,160,960,96,1029,74.7C1097.1,53,1166,75,1234,85.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            <path fill="rgb(129 140 248)" fillOpacity="0.99" d="M0,320L20,309.3C40,299,80,277,120,250.7C160,224,200,192,240,197.3C280,203,320,245,360,250.7C400,256,440,224,480,181.3C520,139,560,85,600,96C640,107,680,181,720,208C760,235,800,213,840,213.3C880,213,920,235,960,240C1000,245,1040,235,1080,229.3C1120,224,1160,224,1200,224C1240,224,1280,224,1320,208C1360,192,1400,160,1420,144L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
          </svg>
        </div>
        <div className="bg-indigo-400">
          <a id="skills" className="text-transparent" />
        </div>
        <div className='bg-indigo-400 h-auto py-4 flex flex-col align-middle items-center justify-center'>
          <div className='flex justify-center'>
            {/* Skills */}
            <h1 className="text-4xl text-white">Skills</h1>
          </div>
          <div className="flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center">
            <Skills />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0f8a75" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <path fill="rgb(129 140 248)" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,234.7C384,224,480,128,576,101.3C672,75,768,117,864,122.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        {/* Contact */}
        <a id="contact" className="text-transparent" />
        <h1 className="text-4xl text-white text-center">{isEnglish ? 'Contact' : 'Contacto'}</h1>
        <h3>Connect with me:</h3>
        <Contact />
      </Layout>
    </div>
  )
}

export default IndexPage
