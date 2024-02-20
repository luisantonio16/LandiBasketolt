import { useState } from 'react'
import curryTshirt from "../assets/Curry-T-SHIRT.png"
import curryHome from "../assets/Curry.png"


function Header() {

    return (
        <>
            <header className='header'>
                <div className="header-container">

                    <div className="header-titulo">
                        <h2>BE A BEST</h2>
                    </div>

                    <div className="header-imagenes">
                        <div className='header-imagen--home'>
                            <img src={curryHome} alt="" />

                        </div>
                        <div className='header-imagen-Tshrit'>
                           <img src={curryTshirt} className='img-Tshirt' />
                           <a href="/" className='header-btn'>Buy Now</a>
                        </div>
                       
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header
