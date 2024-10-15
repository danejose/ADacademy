import React from 'react';
import './Register.css'; 
import register1 from '../assets/register1.jpg';
import logo from '../assets/logo.png'
const Register = () => {
  return (
    <>
    <div className="login-page">
            <div className="image-side">
                <img src={register1} alt="Register" className="login-image" />
            </div>
            <div className="form-side">
                <div className="login-form">
                
                <div className="logo-side">
                <img src={logo} alt="Register" className="logo-image" />
            </div>
                    <h2>Register Me!</h2>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name</label>
                            <input type="text" id="firstName"/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type="text" id="lastName"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkbox">Receive all notifications from AuroraAcademy
                            <input type="checkbox" id="checkbox"/></label>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Register;
