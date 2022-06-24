import { Space, Table } from 'antd';
import axios from 'axios';
import React from 'react';
import '../../App.less'


const App = () => {
  const columns = [
    {
      title: '书号',
      dataIndex: 'book_num',
      align:'center',
      key: 'book_num',
    },
    {
      title: '书名',
      dataIndex: 'book_name',
      align:'center',
      key: 'book_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '作者',
      dataIndex: 'book_writer',
      align:'center',
      key: 'book_writer',
    },
    {
      title: '出版社',
      dataIndex: 'publish_house',
      align:'center',
      key: 'publish_house',
    },
    {
      title: '出版时间',
      dataIndex: 'publih_time',
      align:'center',
      key: 'publih_time',
    },
    {
      title: '价格',
      dataIndex: 'book_price',
      align:'center',
      key: 'book_price',
    },
    {
      title: '总数量',
      dataIndex: 'book_sum',
      align:'center',
      key: 'book_sum',
    },
    {
      title: '剩余数',
      dataIndex: 'book_left',
      align:'center',
      key: 'book_left',
    },
    {
      title: '操作',
      key: 'action',
      align:'center',
      render: (_, record) => (
        <Space size="middle">
          <a data-record={record.book_num} onClick={deleteBook}>删除 </a>
        </Space>
      ),
    },
  ];
  const [bookData,setData] = React.useState([])
  function deleteBook(e){
    axios.get('/useraction/deleteBook',
    // axios.get('http://localhost:4356/yado',
    {
      params:{
        book_num:e.target.dataset.record
      }
    }).then(value=>{
      console.log(value);
      console.log(e.target.dataset.record);
    })
    setTimeout(() => {
      let xhr= new XMLHttpRequest();
      xhr.open('GET', '/useraction/queryBook');
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
            console.log(bookData);
          }else{
            alert(jsObj.msg);
          }
        }
      }
      xhr.send(null);
      console.log(e.target.dataset.record);
      return <Table columns={columns} dataSource={bookData} />;
      },100)
  }
  
function aorrowBook(e){
  axios.get('/useraction/borrowBook',//修改为后端借阅端口
  // axios.get('http://localhost:4356/yado',
  {
    params:{
      book_num:e.target.dataset.record
    }
  }).then(value=>{
    console.log(value);
    console.log(e.target.dataset.record);
  })
  setTimeout(() => {
    let xhr= new XMLHttpRequest();
    xhr.open('GET', '/useraction/queryBook');
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
          console.log(bookData);
        }else{
          alert(jsObj.msg);
        }
      }
    }
    xhr.send(null);
    console.log(e.target.dataset.record);
    return <Table columns={columns} dataSource={bookData} />;
    },100)
}

  React.useEffect(() => {
    let xhr= new XMLHttpRequest();
      xhr.open('GET', '/useraction/queryBook');
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
            console.log(bookData);
          }else{
            alert(jsObj.msg);
          }
        }
      }
      xhr.send(null);
  },[])
  
  return <Table style={{width: '100%'}} columns={columns} dataSource={bookData} />;
}

export default App;