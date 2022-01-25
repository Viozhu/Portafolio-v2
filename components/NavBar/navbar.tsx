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
                    <button onClick={() => {
                        window.scrollBy({
                            top: 700,
                            behavior: 'smooth'
                        });
                    }}
                        className={A_STYLE}>
                        About
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
                            top: 1950,
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
                            top: 2600,
                            behavior: 'smooth'
                        });
                    }}
                        className={A_STYLE}>
                        Contact
                    </button>
                </div>
                <div>
                    <button className={A_STYLE} onClick={() => setIsEnglish(!isEnglish)}>{isEnglish ? 'EN' : 'ES'}</button>
                </div>
            </div>
        </nav>
    )
}
