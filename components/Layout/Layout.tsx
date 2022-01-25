import * as React from 'react'
import Head from 'next/head'
import { Navbar } from '../NavBar/navbar';
import Particles from 'react-tsparticles';

interface Props {
  children: any,
  title: String
  isEnglish: boolean,
  setIsEnglish: any,
}

const Layout = ({
  children,
  title = '',
  isEnglish,
  setIsEnglish,
}: Props) => {

  return (
    <div className='bg-black -m-2'>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='w-full h-full z-50 sticky'>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        {children}
      </div>
      <Particles
        className='z-0'
        params={{
          "particles": {
            "number": {
              "value": 150,
              "density": {
                "enable": true,
                "value_area": 1803.4120608655228
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 2,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 4
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.4008530152163807,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 1.5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 0,
              "color": "#ffffff",
              "opacity": 0.3687847739990702,
              "width": 0.6413648243462091
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "bubble"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
              },
              "repulse": {
                "distance": 100,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }}
      />
    </div>)
}

export default Layout