import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  function toMain(){
    //1 创建可以发送ajax请求的XMLHttpReqeust对象
    let xmlHttpRequest = new XMLHttpRequest();
    //2.调用相关的方法发送ajax请求
    //用js获得文本框中输入的用户和密码附加在url中后面，格式

        let username= document.getElementById("username").value;
        let pwd= document.getElementById("pwd").value;
        let url = "/useraction/userLogin2?username="+username +"&pwd="+pwd;
        xmlHttpRequest.open("get",url);//建立对服务器的连接


        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState===4){

                let serverResponseData = xmlHttpRequest.responseText;

                let jsObj = JSON.parse(serverResponseData);
                if (jsObj.code===0){
                  navigate('/main')
                }else{

                    alert(jsObj.msg);
                }
            }
        }
      //5发送请送
        xmlHttpRequest.send(null);
    // navigate('/main')
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
