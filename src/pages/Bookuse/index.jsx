import { Space, Table } from 'antd';
import axios from 'axios';
import React from 'react';
import '../../App.less'


const App = () => {
  const columns = [
    {
      title: '借书单号',
      dataIndex: 'num',
      key: 'num',
      align:'center'
    },
    {
      title: '书号',
      dataIndex: 'book_num1',
      key: 'book_num1',
      align:'center'
    },
    {
      title: '书名',
      dataIndex: 'book_name1',
      key: 'book_name1',
      align:'center',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '借书人',
      dataIndex: 'username1',
      key: 'username1',
      align:'center'
    },
    {
      title: '借书日期',
      dataIndex: 'borrow_date',
      key: 'borrow_date',
      align:'center'
    },
    {
      title: '还书日期',
      dataIndex: 'return_date',
      key: 'return_date',
      align:'center'
    },
    {
      title: '还书',
      key: 'action',
      align:'center',
      render: (_, record) => (
        <Space size="middle">
          <a data-record={record.num} onClick={returnBook}>归还 {record.name}</a>
        </Space>
      ),
    },
  ];
  const [num ,setNum] = React.useState([])
  function returnBook(e){
    //  axios.get('http://localhost:4356/yado',
     axios.get('/useraction/returnBook',
     {
       params:{
         num:e.target.dataset.record
       }
     }).then(value=>{
       console.log(value);
     })
     setTimeout(() => {
      let xhr= new XMLHttpRequest();
      xhr.open('GET', '/useraction/queryBorrow');
      // xhr.open('GET', 'http://localhost:4356/yado');
      xhr.onreadystatechange = function () {
        if (xhr.readyState===4){
          let serverResponseData = xhr.responseText;
          let jsObj = JSON.parse(serverResponseData);
          console.log(jsObj);
          // setNum(jsObj)
          if (jsObj.code===0){
            let data = jsObj.data;
            setNum(data)
            // console.log(userData);
          }else{
            alert(jsObj.msg);
          }
        }
      }
      xhr.send(null);
      console.log(e.target.dataset.record);
      return <Table columns={columns} dataSource={num} />;
      },100)
}
    
  

  React.useEffect(() => {
    let xhr= new XMLHttpRequest();
    xhr.open('GET', '/useraction/queryBorrow');
    // xhr.open('GET', 'http://localhost:4356/yado');
    xhr.onreadystatechange = function () {
      if (xhr.readyState===4){
        let serverResponseData = xhr.responseText;
        let jsObj = JSON.parse(serverResponseData);
        console.log(jsObj);
        // setNum(jsObj)
        if (jsObj.code===0){
          let data = jsObj.data;
          setNum(data)
          // console.log(userData);
        }else{
          alert(jsObj.msg);
        }
      }
    }
    xhr.send(null);
  },[])
    return <Table style={{width: '100%'}} columns={columns} dataSource={num} />;
}

export default App;