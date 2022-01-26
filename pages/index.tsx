import * as React from 'react'
import Layout from '../components/Layout/Layout'
import { NextPage } from 'next'
import { Skills } from '../components/Skills/Skills'
import { Contact } from '../components/Contact/contact'
import { About } from '../components/About/About'
import { Portafolio } from '../components/Portafolio/Portafolio'
import { OrageDownWave, OrangeUpWave, PurpleDownWave, PurpleUpWave } from '../components/Waves/waves'


const IndexPage: NextPage = () => {

  const [isEnglish, setIsEnglish] = React.useState(true)

  return (
    <Layout title="Jorge Ignacio Garay" isEnglish={isEnglish} setIsEnglish={setIsEnglish}>
      <div className='flex flex-col h-screen justify-between'>
        <div className='flex justify-center h-full items-center'>
          <h1 className='text-white text-3xl italic'>{isEnglish ? 'Hi, Im Jorge Ignacio' : 'Hola, soy Jorge Ignacio'}  <h2 className='text-white italic text-2xl text-center'>{isEnglish ? 'a' : 'un'} Full Stack Developer</h2></h1>
        </div>
        <div>
          {OrangeUpWave}
        </div>
      </div>
      {/* About */}
      <div className='bg-orange-800 h-auto py-4 flex flex-col align-middle items-center justify-center'>
        <div className='flex justify-center'>
          <h1 className="text-4xl text-white">{isEnglish ? 'About me' : 'Sobre mí'}</h1>
        </div>
        <About isEnglish={isEnglish} />
      </div>
      {/* Portafolio */}
      <div className="mb-40">
        {OrageDownWave}
        <h1 className="text-4xl text-white text-center">Portafolio</h1>
      </div>
      <div className="flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center">
        <Portafolio />
      </div>
      <div >
        {PurpleUpWave}
      </div>
      <div className='bg-indigo-400 h-auto py-4 flex flex-col align-middle items-center justify-center'>
        <div className='flex justify-center'>
          {/* Skills */}
          <h1 className="text-4xl text-white">Skills</h1>
        </div>
        <Skills />
      </div>
      {PurpleDownWave}
      {/* Contact */}
      <h1 className="text-4xl text-white text-center">{isEnglish ? 'Contact' : 'Contacto'}</h1>
      <h3>Connect with me:</h3>
      <Contact />
    </Layout>
  )
}

export default IndexPage
