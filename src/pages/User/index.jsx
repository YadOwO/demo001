import { Space, Table } from 'antd';
import axios from 'axios';
import React from 'react';
import '../../App.less'
import './index.css'

const App = () => {
  const columns = [
    {
      title: '账户名',
      dataIndex: 'username',
      key: 'username',
      align:'center',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '真实姓名',
      dataIndex: 'realName',
      align:'center',
      key: 'realName',
    },
    {
      title: '密码',
      dataIndex: 'password',
      align:'center',
      key: 'password',
    },
    {
      title: '手机号码',
      dataIndex: 'mobilePhone',
      align:'center',
      key: 'mobilePhone',
    },
    {
      title: '操作',
      key: 'action',
      align:'center',
      render: (_, record) => (
        <Space size="middle">
          <a data-record={record.username} onClick={deleteUser}>删除 {record.username}</a>
        </Space>
      ),
    },
  ];
  const [userData,setData] = React.useState([])
  function deleteUser(e){
    // return console.log(num);
    // axios.get('http://localhost:4356/yado',
    axios.get('/useraction/deleteUser',
    {
      params:{
        username:e.target.dataset.record
      }
    }).then(value=>{
      console.log(value);
    })
    setTimeout(() => {
    let xhr= new XMLHttpRequest();
    xhr.open('GET', '/useraction/queryUser');
    // xhr.open('GET', 'http://localhost:4356/yado');
    xhr.onreadystatechange = function () {
      if (xhr.readyState===4){
        let serverResponseData = xhr.responseText;
        let jsObj = JSON.parse(serverResponseData);
        console.log(jsObj);
        // setData(jsObj)
        if (jsObj.code===0){
          let data = jsObj.data;
          setData(data)
          console.log(userData);
        }else{
          alert(jsObj.msg);
        }
      }
    }
    xhr.send(null);
    console.log(e.target.dataset.record);
    return <Table columns={columns} dataSource={userData} />;
    },100)
  }
  React.useEffect(() => {
    let xhr= new XMLHttpRequest();
    xhr.open('GET', '/useraction/queryUser');
    // xhr.open('GET', 'http://localhost:4356/yado');
    xhr.onreadystatechange = function () {
      if (xhr.readyState===4){
        let serverResponseData = xhr.responseText;
        let jsObj = JSON.parse(serverResponseData);
        console.log(jsObj);
        // setData(jsObj)
        if (jsObj.code===0){
          let data = jsObj.data;
          setData(data)
          console.log(userData);
        }else{
          alert(jsObj.msg);
        }
      }
    }
    xhr.send(null);
  },[])
  return <Table className='userTable' columns={columns} dataSource={userData} />;
}

export default App;