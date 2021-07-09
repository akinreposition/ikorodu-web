import React, { useState } from 'react'

const Form = () => {
  const [ fullName, setFullName ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ message, setMessage ] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // const data = { fullName,phoneNumber,message};
  // }
 
  return (
    <div className='form-area'>
      <div className='home-form'>
        <h2 className='home-form_text'>Get in touch with us</h2>
        <form className='home-form_main' >
          <input
            type='text'
            className='home-form_name'
            placeholder='Full Name'
            name="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            spellCheck= "true"
            required
          ></input>
          <input
            type='number'
            className='home-form_phone'
            placeholder='Phone Number'
            name="PhoneNmber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          ></input>
          <textarea
            type='text'
            className='home-form_message'
            placeholder='Your Message'
            spellCheck= "true"
            name="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit"className='home-form_button'> GET IN TOUCH</button>
        </form>
      </div>
    </div>
  )
}

export default Form
