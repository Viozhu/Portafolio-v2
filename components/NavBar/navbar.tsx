import React from 'react'
import { A_STYLE, NAVBAR, NAV_TITLE_CONTIANER, NAV_TITLE, BUTTON_CONTAINER, BUTTON_LENGUAGE } from './styles'

export const Navbar = ({ isEnglish, setIsEnglish }: any) => {

    return (
        <nav className={NAVBAR}>
            <div className={NAV_TITLE_CONTIANER}>
                <span className={NAV_TITLE}>
                    Jorge Ignacio Garay
                </span>
            </div>
            <div className={BUTTON_CONTAINER}>
                <div>
                    <button onClick={() => {
                        window.scrollBy({
                            top: 700,
                            behavior: 'smooth'
                        });
                    }}
                        className={A_STYLE}>
                        {isEnglish ? 'About' : 'Sobre mí'}
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        window.scrollBy({
                            top: 1400,
                            behavior: 'smooth'
                        });
                    }}
                        className={A_STYLE}>
                        Portafolio
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        window.scrollBy({
                            top: 2520,
                            behavior: 'smooth'
                        });
                    }}
                        className={A_STYLE}>
                        Skills
                    </button>
                </div>

                <div>
                    <button onClick={() => {
                        window.scrollBy({
                            top: 3200,
                            behavior: 'smooth'
                        });
                    }}
                        className={A_STYLE}>
                        {isEnglish ? 'Contact' : 'Contacto'}
                    </button>
                </div>
                <div>
                    <button className={BUTTON_LENGUAGE} onClick={() => setIsEnglish(!isEnglish)}>{isEnglish ? 'ES' : 'EN'}</button>
                </div>
            </div>

        </nav>
    )
}
