import React, {  useState, useContext, useEffect,Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import Popup from '../Popup/Popup'
import showPwdImg from '../../assets/svgs/show-password.svg';
import hidePwdImg from '../../assets/svgs/hide-password.svg';
import yorubaDrummer from  '../../assets/yorubaDrummer.jpg'
import Navbar from '../navbar/Navbar';

export const SignUp = () => { 
    const history = useHistory()

//   const { userSignUp } = automainContext;
  const [ first_name, setFirstName] = useState ("");
  const [ last_name, setLastName] = useState ("");
  const [ mobile_number, setMobile_number] = useState ("");
  const [ email, setEmail] = useState ("");
  const [ password1, setPassword1] = useState ("");
  const [ password2, setPassword2] = useState ("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);

//   const [buttonPopup, setButtonPopup] = useState(false)
//   useEffect(()=> {
//     setTimeout(() => {
//       setButtonPopup(false);
//     }, 4000)
//   }, []);
    
  const onSubmit = e => {
      e.preventDefault();
      const signUpData = {first_name,last_name,mobile_number,email, password1,password2}
    //   userSignUp(signUpData);
      setTimeout(() => {
        // history.push('/login')
      }, 5000)
  };
  
    return (
        <Fragment>
            <Navbar/>
            <div className="grid-2 m-2">
                <section  className="card">
                    <h6 className='signin-accountExists '>
                        Already have an account
                        <Link to='/login'>
                        <strong> Login</strong>
                        </Link>
                    </h6>
              <form className='signin-form' onSubmit={onSubmit}>
                {/* <h3 className='form-header'>Let’s Get started</h3> */}
                <div className='input-field my-1'>
                  <input 
                  type='text' 
                  className='input-box'
                  required 
                  name="first_name"
                  value={first_name}
                  onChange={(e) => setFirstName( e.target.value )} 
                  spellCheck="true"/>
                  <label htmlFor='Full Name'>First Name</label>
                </div>
                <div className='input-field my-1'>
                  <input 
                  type='text' 
                  className='input-box' 
                  required 
                  name="last_name"
                  value={last_name}
                  onChange={(e) => setLastName( e.target.value )}
                  spellCheck="true"/>
                  <label htmlFor='Full Name'>Last Name</label>
                </div>
                <div className='input-field my-1'>
                  <input 
                  type='number' 
                  className='input-box' 
                  required
                  name="mobile_number"
                  value={mobile_number}
                  onChange={(e) => setMobile_number( e.target.value )} />
                  <label htmlFor=''>Phone Number</label>
                </div>
                <div className='input-field my-1'>
                  <input 
                  type='email' 
                  className='input-box' 
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail( e.target.value )} />
                  <label htmlFor='Full Name'>Email</label>
                </div>
                <div className='input-field my-1 pwd-container'>
                  <input 
                  type={isRevealPwd ? "text" : "password"} 
                  className='input-box'  
                  required pattern=".{8,}"
                  name= "New password"
                  value={password1}
                  onChange= {(e) => setPassword1(e.target.value)}/>
                  <label htmlFor=''>New Password</label>
                  <img
                    title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                    alt="display password"
                    />
                </div>
                <div className='input-field my-1 pwd-container'>
                  <input 
                  type={isRevealPwd1 ? "text" : "password"} 
                  className='input-box' 
                  required pattern=".{8,}"
                  name= "New password"
                  value={password2}
                  onChange= {(e) => setPassword2(e.target.value)}/>
                  <label htmlFor=''>Confirm Password</label>
                  <img
                    title={isRevealPwd1 ? "Hide password" : "Show password"}
                    src={isRevealPwd1 ? hidePwdImg : showPwdImg}
                    onClick={() => setIsRevealPwd1(prevState => !prevState)}
                    alt="display password"
                    />
                </div>
                <button className='signin-button'type='submit'> CREATE ACCOUNT</button>
                </form>
                </section>
                <section className="">
                    <img src={yorubaDrummer} 
                    width="228px" 
                    height="228px"
                    alt="sign up slides" 
                    className="testimonial__image m-10"/>
                </section>
            </div>
        </Fragment>
    )
}