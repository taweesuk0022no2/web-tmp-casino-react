import React from 'react'
import Logo from "../images/logo/Logo-worldslot-6-05.webp"
import './Navbar.css'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function Navbar() {
    function openMenuNavbar() {
        const menuNavbars = document.querySelector('.Navbar__link-list')
    
        menuNavbars.classList.add('active')
    }

    function closeMenuNavbar() {
        const menuNavbars = document.querySelector('.Navbar__link-list')
    
        menuNavbars.classList.remove('active')
    }

  return (
    <>
        <div className="Navbar">
            <div className="Navbar__logo">
                <button onClick={openMenuNavbar} className="material-symbols-outlined openMenuNavbar">
                    menu
                </button>

                <Link to="/">
                    <img width={250} src={Logo} alt="" />
                </Link>
            </div>

            <div className="Navbar__link-list">
                <button onClick={closeMenuNavbar} class="material-symbols-outlined closeNavbarBtn">
                    close
                </button>

                <ul>
                    <li>
                        <Link to="/" className='active'>
                            หน้าแรก
                        </Link>
                    </li>
                    <li>
                        <Link to="/slot">
                            สล็อต
                        </Link>
                    </li>
                    <li>
                        <Link to="/liveCasino">
                            คาสิโนสด
                        </Link>
                    </li>
                    <li>
                        <Link to="/fishing">
                            ยิงปลา
                        </Link>
                    </li>
                    <li>
                        <Link to="/cardGames">
                            เกมส์การ์ด
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="Navbar__btn">
                <div className="Navbar__btn--rows">
                    <Link className='Navbar__btn--signin' to="/login">
                        เข้าสู่ระบบ
                    </Link>
                    <Link className='Navbar__btn--signup' to="/register">
                        สมัครสมาชิก
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar