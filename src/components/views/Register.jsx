import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BtnBack from '../../images/btnMenu/button6.webp'
import './Register.css'
import axios from 'axios'

function Register() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    bank: '',
    bankNum: ''
  });

  const nextStep = () => {
    const specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (currentStep === 1 && formData.username === '') {
      alert('Please enter a Username.');
      return;
    }
    if (currentStep === 2 && formData.phone === '') {
      alert('Please enter an Phone No.');
      return;
    }
    if (currentStep === 3 && formData.password === '') {
      alert('Please enter a Password.');
      return;
    }
    if (currentStep === 3 && specialCharPattern.test(formData.password)) {
      alert('Password should not contain special characters.');
      return;
    }
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // กรองเฉพาะตัวเลขสำหรับช่อง 'phone'
    if (name === 'phone') {
      if (/[^0-9]/.test(value)) {
        return; // หยุดการทำงานของฟังก์ชันถ้าพบตัวอักษรที่ไม่ใช่ตัวเลข
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = () => {
    if (currentStep === 4 && formData.bank === '') {
      alert('Please enter a Bank.');
      return;
    }
    if (currentStep === 4 && formData.bankNum === '') {
      alert('Please enter a Bank No.');
      return;
    }
    
    // ส่งข้อมูลไปยัง Backend
    axios.post('http://localhost:5173/register', formData)
    .then(response => {
      alert('สมัครเรียบร้อยแล้ว!');
    })
    .catch(error => {
      console.log(error);
      alert('มีข้อผิดพลาดเกิดขึ้น');
    });
  };

  return (
      <>
        <div className="Form__register">
          <Link className='Btn__back__home' to="/">
            <img src={BtnBack} alt="" />
          </Link>

          <form id="formContainer">
            <div className="formContainer__App">
              {currentStep === 1 && (
                <div className='form__step'>
                  <h1>Step 1 | Username</h1>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  <button onClick={nextStep}>ถัดไป</button>
                </div>
              )}

              {currentStep === 2 && (
                <div className='form__step'>
                  <h1>Step 2 | เบอร์โทรศัพท์</h1>
                  <label>เบอร์โทรศัพท์</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="กรุณาใส่เบอร์โทรศัพท์ 10 หลัก"
                  />
                  <button onClick={nextStep}>ถัดไป</button>
                </div>
              )}

              {currentStep === 3 && (
                <div className='form__step'>
                  <h1>Step 3 | รหัสผ่าน</h1>
                  <label>รหัสผ่าน</label>
                  <input
                    type="password"
                    name="password"
                    maxLength="10"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button onClick={nextStep}>ถัดไป</button>
                </div>
              )}

              {currentStep === 4 && (
                <div className='form__step'>
                  <h1>Step 4 | ธนาคาร</h1>
                  <label>ธนาคาร</label>
                  <select
                    name="bank"
                    onChange={handleInputChange}
                  >
                    <option value="">เลือกธนาคาร</option>
                    <option value="Bangkok Bank">ธนาคารกรุงเทพ</option>
                    <option value="Truewallet">ทรูวอเล็ท *ใส่เบอร์โทรที่เชื่อมกับ Truewallet*</option>
                    <option value="Krung Thai Bank">ธนาคารกรุงไทย</option>
                    <option value="Kasikornbank">ธนาคารกสิกรไทย</option>
                    <option value="TMB Bank">ธนาคารทหารไทย</option>
                    <option value="Siam Commercial Bank">ธนาคารไทยพาณิชย์</option>
                    <option value="Government Savings Bank">ธนาคารออมสิน</option>
                    <option value="Islamic Bank of Thailand">ธนาคารอิสลามแห่งประเทศไทย</option>
                    <option value="Bank of Thailand">ธนาคารแห่งประเทศไทย</option>
                    <option value="United Overseas Bank">ธนาคารยูโอบี</option>
                    <option value="CIMB Thai Bank">ธนาคารซีไอเอ็มบี ไทย</option>
                    <option value="Tisco Bank">ธนาคารทิสโก้</option>
                    <option value="Citibank">ธนาคารซิตี้แบงก์</option>
                    <option value="Standard Chartered">ธนาคารสแตนดาร์ดชาร์เตอร์ด</option>
                  </select>
                  <label>เลขบัญชี</label>
                  <input
                    type="text" 
                    name="bankNum" 
                    value={formData.bankNum}
                    onChange={handleInputChange}
                    maxLength="14"
                    minLength="10"
                   />
                  <button onClick={submitForm}>ยืนยัน</button>
                </div>
              )}
            </div>
          </form>
        </div>
      </>
  )
}

export default Register