import {
  Button,
  // Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
} from 'antd';
import { useState } from 'react';
import '../../App.less'
// const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  function addBook(){
     //1 创建可以发送ajax请求的XMLHttpReqeust对象
     let xmlHttpRequest = new XMLHttpRequest();
     //2.调用相关的方法发送ajax请求
     //用js获得文本框中输入的用户和密码附加在url中后面，格式
      let input = document.querySelectorAll('input');
      // let username= document.getElementById("basic_username").value;
      // let pwd= document.getElementById("basic_password").value;
      // let realname = document.querySelector('#basic_realname').value;
      // let phonenumber = document.querySelector('#basic_mobilephone').value;
      let url = "/useraction/insertBook?book_num="+input[0].value+"&book_name="
      +input[1].value+"&book_writer="+input[2].value+"&publish_house="
      +input[3].value+"&publih_time="+input[4].value+"&book_price="
      +input[5].value+"&book_sum="+input[6].value
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

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        disabled: componentDisabled,
      }}
      onValuesChange={onFormLayoutChange}
      disabled={componentDisabled}
    >
      <Form.Item label="书号">
        <Input />
      </Form.Item>
      <Form.Item label="书名">
        <Input />
      </Form.Item>
      <Form.Item label="作者">
        <Input />
      </Form.Item>
      <Form.Item label="出版社">
        <Input />
      </Form.Item>
      <Form.Item label="出版时间">
        <DatePicker />
      </Form.Item>
      <Form.Item label="价格">
        <InputNumber />
      </Form.Item>
      <Form.Item label="总数量">
        <InputNumber />
      </Form.Item>
      <Form.Item label="备注">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Form disabled" name="disabled" valuePropName="checked">
        <Checkbox>disabled</Checkbox>
      </Form.Item>
      {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      <Form.Item label="Button">
        <Button onClick={addBook}>Button</Button>
      </Form.Item>
    </Form>
  );
};

export default () => <FormDisabledDemo />;