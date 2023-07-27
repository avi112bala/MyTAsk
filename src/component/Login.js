import React, { useEffect, useState } from 'react'
import  {useNavigate,Link } from 'react-router-dom'


const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")

    const navigation=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigation("/thanks");
        }
    },[])

async function Login() {
    let item={email,password}
    let result = await fetch("https://api.brokeragentbase.com/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    navigation("/thanks");
}





  return (
    <div>
      <h1>Login page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          className="form-control"
          onChange={(e) => e.target.value}
        />
        <br />
        <button className="btn btn-primary" onClick={Login}>
          Login
        </button>
        {localStorage.getItem("user-info") && (
          <p>
            <Link to="/logout">Logout</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login
