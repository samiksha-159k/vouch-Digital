import React, { useState } from 'react'
import down from '../src/down.png'
import './Login.css';
import axios from 'axios';

function Login() {

  const[email, setemail] = useState();
  const[password, setpassword] = useState();
  const[result, setresult] = useState();


  const login = async () => {
    console.log("email",email)
    console.log("password",password)
    try {
      const result = await axios.post('https://reqres.in/api/login',{
        email : email,
        password : password
  
      })
      setresult(result.data.token)
  
    } catch (err) {
      console.log("err",err.response.data.error)
      setresult(err.response.data.error)
    }
   
  }
  return (
    <div>
        <div class="container">
            <hr/>
            <div className='d-flex justify-content-between'>
                <h6><b>ATools.</b></h6>
                <div className='d-flex sa-hide'>
                <button type="button" class="btn btn-dark sa-button">Start Free Trail</button>
                <button type="button" class="btn btn-warning sa-buttonn">Login</button>
                </div>
            </div>

              

       <div className='d-flex align-items-center'>
                      <div className='d-flex column justify-content-center sa-left_Section'>
                      <div className='text-center'>
                   <h2>Welcome Back</h2>
                   <div className='mb-3'>Sub-title text goes here
                   </div>
                   <div class="mb-3 col-11">
                   
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"
                    onChange={e => setemail(e.target.value)} />
                    </div>
                    <div class="mb-3 col-11">
                   
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password"
                     onChange={e => setpassword(e.target.value)}/>
                    </div>
                    <div className='text-start'>
                    <button type="button" class="btn btn-dark col-11"
                    onClick={login}>Login</button>
                    
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                       Remember Password
                    </label>
                    </div >
                      
                        <div className='px-4'>Forgot Password?</div>
                    </div>
                   </div>
                      </div>
                      <div className='d-flex column justify-content-center'>
                      <div class="col-8 d-flex sa-hide mt-2">
                    <img src={down} alt="down image" />
                    </div>
                      </div>
                    </div>
                    </div>
                    <p>result:{result}</p>
    </div>
  )
}

export default Login