import React from 'react'
import Tilt from 'react-vanilla-tilt'

export const Portafolio = () => {

    const proyects = [
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/foto0.JPG?raw=true', title: 'Be your own Chef' },
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/Foto2.JPG?raw=true', title: 'Be your own Chef' },
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/Foto1.JPG?raw=true', title: 'Be your own Chef' },
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/unknown.png?raw=true', title: 'e-conomy' },
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/eco%201.JPG?raw=true', title: 'e-conomy' },
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/eco2.JPG?raw=true', title: 'e-conomy' },
        { img: 'https://github.com/Viozhu/Viozhu/blob/main/Projects/weatherapp.JPG?raw=true', title: 'Weather App' },
        // {img:'',title:''},
    ]

    return (
        <div className='flex flex-wrap justify-center'>
            {proyects.map(pro =>
                <div className='my-5 mx-5'>
                    <Tilt style={{ backgroundColor: 'trasparent', width: '20rem', height: '10rem', border: '2px solid white', borderRadius: '10px' }}>
                        <div className='relative'>
                            <img src={pro.img} alt='as' width='400' className='rounded' style={{ height: '9.7rem' }} />
                            <p className='text-red-200 absolute bottom-0 w-full text-center bg-black/50 rounded-b'>{pro.title}</p>
                        </div>
                    </Tilt>
                </div>)}

        </div>
    )
}
