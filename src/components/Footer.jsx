import React from 'react'
import Logo from "../images/logo/Logo-worldslot-6-05.webp"
import './Footer.css'

import imgBank from '../data/imgBank.json'

function Footer() {
  return (
    <>
        <div className="Footer__Container">
            <h1>WORLDSLOT-789.APP</h1>

            <p>WORLDSLOT789 กรุ๊ปเว็บพนันออนไลน์ครบวงจรที่ดีที่สุดปลอดภัยจ่ายจริงฝากถอนผ่านระบบ AUTO แบบ AI 100% ตลอด 24 ชั่วโมงทำรายการภายใน 5 นาทีมีหมวดหมู่เดิมพันให้บริการหลากหลายที่สุด เช่น คาสิโนสด บาคาร่า รูเล็ตเสือมังกร หวยออนไลน์ จัดเต็มให้บริการมากกว่า 8 ค่าย,สล็อตออนไลน์,ยิงปลาไฮโล เป่ายิงฉุบ ออนไลน์จุใจสุด ๆ กับ 50 ค่ายเกมสล็อต WORLDSLOT789 เลือกทำเงินกับอัตราการจ่ายสูงสุดมากกว่า 98% และพลาดไม่ได้กับ WORLDSLOT989 Sport เดิมพันกีฬาครบวงจรทุกเกม ทุกลีก ทุกค่าย จัดเต็มให้ไว้ที่นี่แล้ว เล่นง่ายรองรับอุปกรณ์มือถือทุกรุ่นทุกระบบไม่ต้องติดตั้งหรือโหลดโปรแกรมเว็บคาสิโน สล็อตมาตรฐานระดับโลก WORLDSLOT989 สมัครฝาก-ถอนง่ายตลอด 365 วัน ไม่มีปิดปรับปรุง เว็บเดิมพันรูปแบบบริษัทปลอดภัย โปร่งใส จ่ายจริง 100% การันตีมั่นคงทางการเงินสูงสุด การันตีไม่มีประวัติเสียหาย ด้วยยอดสมาชิกกว่า 50,000 คน เปิดให้บริการมากว่า 5 ปี การเงินมั่นคง ฝาก-ถอนรวดเร็ว ตลอด 24 ชั่วโมง พร้อมด้วยบริการ อันยอดเยี่ยม จากทีมงานมากประสบการณ์ จากปอยเปต</p>

            <img src={Logo} alt="" />

            <div className="Bank__rows">
                <h2>ช่องทางร่วมสนุก</h2>

                <div className='Bank__rows__img__container'>
                    {imgBank.map((item, index) => (
                    <div key={item.id}>
                        <div className="Bank__rows__card-game">
                            <img src={item.src} alt={item.id} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="Footer__copyright">
                <p>Copyright © 2023 <a href="#">WORLDSLOT-789.APP</a></p>
                <ul className="Footer__Menu">
                    <li>
                        <a href="#">หน้าแรก</a>
                    </li>
                    <li>
                        <a href="#">สล็อต</a>
                    </li>
                    <li>
                        <a href="#">คาสิโนสด</a>
                    </li>
                    <li>
                        <a href="#">ยิงปลา</a>
                    </li>
                    <li>
                        <a href="#">เกมส์การ์ด</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer