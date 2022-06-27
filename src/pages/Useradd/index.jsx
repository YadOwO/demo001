import { Button, message, Form, Input } from 'antd';
import '../../App.less'
import './index.css'

const App = () => {
  function addUser(){
     //1 创建可以发送ajax请求的XMLHttpReqeust对象
     let xmlHttpRequest = new XMLHttpRequest();
     //2.调用相关的方法发送ajax请求
     //用js获得文本框中输入的用户和密码附加在url中后面，格式
      let username= document.getElementById("basic_username").value;
      let pwd= document.getElementById("basic_password").value;
      let realname = document.querySelector('#basic_realname').value;
      let age = document.querySelector('#basic_age').value;
      let sex = document.querySelector('#basic_sex').value;
      let phonenumber = document.querySelector('#basic_mobilephone').value;
      let email = document.querySelector('#basic_email').value;
      let url = "/useraction/register?username="+username +"&pwd="+pwd
      +"&realName="+realname+"&age="+age+"&sex="+sex
      +"&phonenumber="+phonenumber+"&email="+email;
      xmlHttpRequest.open("get",url);//建立对服务器的连接


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
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <h2 className="titleAddUser">添加用户</h2>
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户姓名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入你的用户名！',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入你的密码！',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="真实姓名"
        name="realname"
        rules={[
          {
            required: true,
            message: '请输入真实姓名！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="年龄"
        name="age"
        rules={[
          {
            required: true,
            message: '请输入你的性别！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="性别"
        name="sex"
        rules={[
          {
            required: true,
            message: '请输入你的性别！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="电话号码"
        name="mobilephone"
        rules={[
          {
            required: true,
            message: '请输入你的电话号码！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          {
            required: true,
            message: '请输入你的邮箱！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={addUser} type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default App;