import {
  Button,
  DatePicker,
  Form,
  Input,
  message
} from 'antd';
import { useState } from 'react';
import '../../App.less'
const { RangePicker } = DatePicker;


const FormDisabledDemo = () => {
  
  function JieShu(){
    //1 创建可以发送ajax请求的XMLHttpReqeust对象
    let xmlHttpRequest = new XMLHttpRequest();
    //2.调用相关的方法发送ajax请求
    //用js获得文本框中输入的用户和密码附加在url中后面，格式
    let input = document.querySelectorAll('input');
    let url = "/useraction/borrowBook?num="+input[0].value+"&book_num1="+input[1].value
    +"&username1="+input[2].value+"&borrow_date="+input[3].value
    +"&return_date="+input[4].value
    xmlHttpRequest.open("get",url);

    xmlHttpRequest.onreadystatechange = function () {
      if (xmlHttpRequest.readyState===4){

          let serverResponseData = xmlHttpRequest.responseText;

          let jsObj = JSON.parse(serverResponseData);
          if (jsObj.code===0){
            // navigate('/main')
            message.success("添加成功！")
          }else{
            message.error(jsObj.msg);
          }
      }
  }
//5发送请送
  xmlHttpRequest.send(null);
  }

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <Form.Item label="借书单号">
        <Input />
      </Form.Item>
      <Form.Item label="书号">
        <Input />
      </Form.Item>
      <Form.Item label="借书人">
        <Input />
      </Form.Item>
      <Form.Item label="借书时间">
        <RangePicker />
      </Form.Item>
      <Form.Item label="提交">
        <Button onClick={JieShu}>一键借书</Button>
      </Form.Item>
    </Form>
  );
};

export default () => {
  return <FormDisabledDemo />;
}