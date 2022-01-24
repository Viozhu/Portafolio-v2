import React from 'react'
import { A_STYLE, NAVBAR, NAV_TITLE_CONTIANER, NAV_TITLE, BUTTON_CONTAINER } from './styles'

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
                    <a href="#about"
                        className={A_STYLE}>
                        About
                    </a>
                </div>
                <div>
                    <a href="#portafolio"
                        className={A_STYLE}>
                        Portafolio
                    </a>
                </div>
                <div>
                    <a href="#skills"
                        className={A_STYLE}>
                        Skills
                    </a>
                </div>
                <div>
                    <a href="#contact"
                        className={A_STYLE}>
                        Contact
                    </a>
                </div>
                <div>
                    <button className={A_STYLE} onClick={() => setIsEnglish(!isEnglish)}>{isEnglish ? 'EN' : 'ES'}</button>
                </div>
            </div>
        </nav>
    )
}
