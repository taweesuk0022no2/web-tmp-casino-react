import React from 'react'
import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import MenuMore from '../components/MenuMore'
import Comments from '../components/Comments'

import './home.css'

import Data from '../../data/imgSlot.json';
import GameRcm from '../../data/rcmGame.json';

import SeoImg from '../assets/img/seo/SEO.webp'

function home() {

  return (
    <>
      <Navbar />
      <Slide />

      <marquee className='News' direction="left">ยินดีต้อนรับ ที่นี่คือ WORLDSLOT-789.APP</marquee>

      <MenuMore />

      <div className="RcmGame">
        <div className="Header__RcmGame">
          <h1>แนะนำค่ายเกมสล็อต</h1>
        </div>

        <div className="Description__RcmGame">
          <h2>ค่ายเกมจากค่ายมากกว่า 20 ค่ายเกมส่งตรงมาคุณได้เล่นกันอย่างเต็มอิ่มกันเลย!</h2>
        </div>

          <div className='RcmGame__img__container'>
            {Data.map((item, index) => (
              <div key={item.id}>
                <div className="RcmGame__card-game">
                  <img src={item.src} alt={item.id} className="BgCard" />
                  <img src={item.src} alt={item.id} />

                  <div className="Header__Card">
                    <h2>{item.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>

      <div className="RcmGame">
        <div className="Header__RcmGame">
          <h1>แนะนำเกมยอดฮิตค่าย PG</h1>
        </div>

        <div className="Description__RcmGame">
          <h2>เกมจากค่าย PG มากกว่า 10 เกมส่งตรงมาคุณได้เล่นกันอย่างเต็มอิ่มกันเลย!</h2>
        </div>

          <div className='RcmGame__img__container'>
            {GameRcm.map((item, index) => (
              <div key={item.id}>
                <div className="RcmGame__card-game">
                  <img src={item.imageSrc} alt={item.nameGame} className="BgCard" />
                  <img src={item.imageSrc} alt={item.nameGame} />

                  <div className="Header__Card">
                    <h2>{item.nameGame}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>

      <div className="Blog__Seo">
        <div className="Blog__img__container">
          <img src={SeoImg} alt="" className="Backdrop__Shadow" />
          <img src={SeoImg} alt="" className='Main__img__seo' />
        </div>

        <div className="Blog__Header">
          <h1>WORLDSLOT789 กรุ๊ปเว็บพนันออนไลน์ อันดับหนึ่ง</h1>
        </div>
        
        <div className="Blog__Discription">
          <p>WORLDSLOT789 กรุ๊ปเว็บพนันออนไลน์ครบวงจรที่ดีที่สุดปลอดภัยจ่ายจริงฝากถอนผ่านระบบ AUTO แบบ AI 100% ตลอด 24 ชั่วโมงทำรายการภายใน 5 นาทีมีหมวดหมู่เดิมพันให้บริการหลากหลายที่สุด เช่น คาสิโนสด บาคาร่า รูเล็ตเสือมังกร หวยออนไลน์ จัดเต็มให้บริการมากกว่า 8 ค่าย,สล็อตออนไลน์,ยิงปลาไฮโล เป่ายิงฉุบ ออนไลน์จุใจสุด ๆ กับ 50 ค่ายเกมสล็อต WORLDSLOT789 เลือกทำเงินกับอัตราการจ่ายสูงสุดมากกว่า 98% และพลาดไม่ได้กับ WORLDSLOT989 Sport เดิมพันกีฬาครบวงจรทุกเกม ทุกลีก ทุกค่าย จัดเต็มให้ไว้ที่นี่แล้ว เล่นง่ายรองรับอุปกรณ์มือถือทุกรุ่นทุกระบบไม่ต้องติดตั้งหรือโหลดโปรแกรมเว็บคาสิโน สล็อตมาตรฐานระดับโลก WORLDSLOT989 สมัครฝาก-ถอนง่ายตลอด 365 วัน ไม่มีปิดปรับปรุง เว็บเดิมพันรูปแบบบริษัทปลอดภัย โปร่งใส จ่ายจริง 100% การันตีมั่นคงทางการเงินสูงสุด การันตีไม่มีประวัติเสียหาย ด้วยยอดสมาชิกกว่า 50,000 คน เปิดให้บริการมากว่า 5 ปี การเงินมั่นคง ฝาก-ถอนรวดเร็ว ตลอด 24 ชั่วโมง พร้อมด้วยบริการ อันยอดเยี่ยม จากทีมงานมากประสบการณ์ จากปอยเปต</p>
        </div>
      </div>

      <Comments />
    </>
  )
}

export default home