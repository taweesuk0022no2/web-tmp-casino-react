import React, { Component } from 'react'
import Logo from "../assets/img/logo/Logo-worldslot-6-05.webp"
import './Navbar.css'
import { closeMenuNavbar } from "../js/closeNavbarMenu"
import { openMenuNavbar } from "../js/openMenuNavbar"

function Navbar() {
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
                        <a href="#" className='active'>
                            หน้าแรก
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            สล็อต
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            คาสิโนสด
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            ยิงปลา
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            เกมส์การ์ด
                        </a>
                    </li>
                </ul>
            </div>

            <div className="Navbar__btn">
                <div className="Navbar__btn--rows">
                    <a className='Navbar__btn--signin' href="#">
                        เข้าสู่ระบบ
                    </a>
                    <a className='Navbar__btn--signup' href="#">
                        สมัครสมาชิก
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar