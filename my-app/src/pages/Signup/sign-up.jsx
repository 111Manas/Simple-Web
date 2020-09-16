import React,{useState} from 'react';
import './Signup.css'
import {Button} from '../../components/Button/Button';
import {Link} from 'react-router-dom';

const Signup = () => {
  const [userCredential,setUserCredential] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const handleChange = (event) =>{
    const {value,name} = event.target;
    setUserCredential({...userCredential,[name]:value})
  }

  const {name,email,password,confirmPassword} = userCredential;
   
  const handleSubmit = (event) => { 
    event.preventDefault();
  
    setUserCredential({name:'',
    email:'',
    password:'',
    confirmPassword:''})

      if(password!==confirmPassword){
        alert("password don't match");
        return;
      }              
  }
  
  
  return (
    <>
    <div className="signup-form">
      <h1>Sign Up</h1>
        <form className='signup-container'>
            <input name='name' 
                  type='text'
                  value={name} 
                  className="input-box" 
                  placeholder='Your name'
                  onChange={handleChange} required />
            <input name='email' 
                  type='email'
                  value={email} 
                  className='input-box' 
                  placeholder='Your email'
                  onChange={handleChange} required />
            <input name='password' 
                  type='password'
                  value={password} 
                  className='input-box'
                  placeholder='Your password' 
                  onChange={handleChange} required />
            <input name='confirmPassword'
                  type='password' 
                  value={confirmPassword}className='input-box' placeholder='Confirm password'
                  onChange={handleChange} required/>
            <p><span><input type='checkbox'/></span> I agree to the terms and services.</p>

            <Button buttonSize='btn--wide' buttonColor='blue' onClick={handleSubmit}>Sign Up</Button>
            <p className='p'>Already have an account ?    <Link to='/signin' className='signin'>Sign In</Link></p>
          </form>
    </div>
     
    </>
  )
}

export default Signup
