import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Navbar from '../comp/Navbar'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();

    const logData=(e)=>{
      e.preventDefault()
        axios.post('http://localhost:5000/login', {
            username: e.target.username.value,
            password:e.target.password.value
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          navigate('/')
    }
  return (
    <div >
      {/* <Navbar/> */}
      <div className="login">
      <h2>Login To Your Account</h2>
      <div className="logindiv">
        <form onSubmit={logData} className="loginlocal">
            <input type="text" name="username" id="" placeholder="Username" />
            <input type="password" name="password" id="" placeholder="Password" />
<button>Login To Your Account</button>
        </form>
        <p>or</p>
        <div className="loginwith">
            <div className="google"> Sign in with <img src="https://w7.pngwing.com/pngs/628/58/png-transparent-google-logo-google-search-google-now-google-text-trademark-service.png" alt="" /></div>
            <div className="facebook">Sign in with  <img src="https://www.seekpng.com/png/detail/51-516623_facebook-transparent-background-facebook-round-logo-blue-circle.png" alt="" /></div>
            <div className="twitter">Sign in with <img src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" alt="" /></div>
        </div>
        
      </div>
    </div>
    <img className="loginimg" src="https://i.pinimg.com/originals/86/f1/99/86f199d0c6f5cedd14c121164fa5fafc.jpg" alt="" />
    </div>
  )
}

export default Login
