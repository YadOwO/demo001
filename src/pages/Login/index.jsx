import React from 'react'
import './index.css'

export default function Login() {
  function toMain(){
    window.location.href="/main";
  }
  return (
    <div>
        <div className="container">
        <h1>Welcome</h1>
        <div className="form">
            <input id='username' type="text" placeholder="您的账号"/>
            <input id='pwd' type="password" placeholder="您的密码"/>
            <button onClick={toMain} className="btn-login">登录</button>
        </div>
    </div>
    <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    </div>
  )
}
