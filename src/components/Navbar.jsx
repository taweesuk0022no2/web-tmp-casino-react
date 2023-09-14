import React from 'react'
import Logo from "../images/logo/Logo-worldslot-6-05.webp"
import './Navbar.css'

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

                <a href="/">
                    <img width={250} src={Logo} alt="" />
                </a>
            </div>

            <div className="Navbar__link-list">
                <button onClick={closeMenuNavbar} class="material-symbols-outlined closeNavbarBtn">
                    close
                </button>

                <ul>
                    <li>
                        <a href="/" className='active'>
                            หน้าแรก
                        </a>
                    </li>
                    <li>
                        <a href="/slot">
                            สล็อต
                        </a>
                    </li>
                    <li>
                        <a href="/liveCasino">
                            คาสิโนสด
                        </a>
                    </li>
                    <li>
                        <a href="/fishing">
                            ยิงปลา
                        </a>
                    </li>
                    <li>
                        <a href="/card">
                            เกมส์การ์ด
                        </a>
                    </li>
                </ul>
            </div>

            <div className="Navbar__btn">
                <div className="Navbar__btn--rows">
                    <a className='Navbar__btn--signin' href="/login">
                        เข้าสู่ระบบ
                    </a>
                    <a className='Navbar__btn--signup' href="/register">
                        สมัครสมาชิก
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar