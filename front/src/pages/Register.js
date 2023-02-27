import React, { useEffect, useState } from "react";
import Navbar from '../comp/Navbar'
import axios from 'axios'

const Register = () => {
    

    const logData=(e)=>{
        e.preventDefault()

console.log('submit')
        // console.log(e.target.name.value)
        // console.log(e.target.username.value)
        // console.log(e.target.email.value)
        // console.log(e.target.password.value)
        axios.post('http://localhost:5000/register', {
            name: e.target.name.value,
            username:e.target.username.value,
            email:e.target.email.value,
            password:e.target.password.value
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div className="register" >
      {/* <Navbar/> */}
      <div className="login">
      <h2>Register</h2>
      <div className="logindiv">
        <form onSubmit={logData} className="loginlocal">
        <input type="text" name="name" id="" placeholder="Name" />
            <input type="text" name="username" id="" placeholder="Username" />
            <input type="email" name="email" id="" placeholder="Example@email.com" />
            <input type="password" name="password" id="" placeholder="Password" />
<button type='submit' >Register</button>
        </form>
        
      </div>
    </div>
    <img className="loginimg" src="https://i.pinimg.com/originals/86/f1/99/86f199d0c6f5cedd14c121164fa5fafc.jpg" alt="" />
    </div>
  )
}

export default Register
