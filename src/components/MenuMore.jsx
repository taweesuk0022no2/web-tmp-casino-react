import React from 'react'
import './MenuMore.css'

import button1 from "../images/btnMenu/button1.webp"
import button2 from "../images/btnMenu/button2.webp"
import button3 from "../images/btnMenu/button3.webp"
import button4 from "../images/btnMenu/button4.webp"

function MenuMore() {
  return (
    <>
        <div className="MenuMore_container">
            <ul>
                <li>
                    <a href="#">
                        <img src={button1} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={button2} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={button3} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={button4} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default MenuMore