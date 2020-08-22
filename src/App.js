import React, { useState } from 'react';
import { Button } from 'antd';
import {Form,Row,Alert,Col,Divider,Typography,Avatar, Input ,Layout } from 'antd';
import './App.css';
import Form_Image from "./assets/form_image.png" ;
import Avatar_img from "./assets/avatar.png" ;
import G_icon from "./assets/google.png" ;
import F_icon from "./assets/fb.png" ;
import {CloseOutlined} from "@ant-design/icons" ;
import {useNavigate} from "@reach/router" ;
const { Sider, Content } = Layout;
const {Text,Title} = Typography ;

function App() {
  //=====================================================React HOOKS ========================
  const [mobileNo, setMobileNo] = useState("") ;
  const [password, setPassword] = useState("") ;
  const navigate = useNavigate() ;
//====================================================Heelper Functions =========================
  function submitForm(){
    if(mobileNo.length <5 || password.length<5) {
      document.getElementsByClassName("alert-box1")[0].style.display="block";
      console.log("short of etails") ;
  return  ;}
    console.log(mobileNo,password) ;
    const requestOptions = {
       method :"POST" ,
       headers:{ "Content-Type" :"application/json"},
       body : JSON.stringify({"mobile":mobileNo,password})
    }
    fetch(" https://mekvahan.com/api/android_intern_task",requestOptions)
    .then(res=>{
      console.log(res)
      if(!res.ok){
        console.log("error") ;
        document.getElementsByClassName("alert-box")[0].style.display="block"
      }
      else{
        navigate("/home") ;
      }
    } );
  }

  //==============================================Component Code=======================================================
  return (
    <div className="App">
      <Layout >
        <Sider style={{marginTop:"18vh",marginLeft:"10vw",marginRight:"10vw",}}>
          <img src={Form_Image} alt="car" style={{objectFit:"cover",height:"100%"}}/>
        </Sider>
 <Layout className="form_container">
 <CloseOutlined className="close" />
 <Content >
 
        <Form  className="form">
    <Row style={{textAlign:"center",margin:10}}>
      <Col span={5}></Col>
        <Col span={2}><Avatar size={64} src={Avatar_img} /></Col>  
          <Col span={15}><Title level={2} style={{color:"red",paddingTop:10}}>MEKVAHAN</Title></Col>
   </Row>
         <Row style={{margin:5}}>
           <Col span={10}>
           <Text>10 digit mobile number</Text></Col>
         </Row>
      <Form.Item
        name="mobile"
      >
        <Input  bordered={false} onChange={(e)=>setMobileNo(e.target.value)}/>
        
      </Form.Item>

      <Divider/>
      <Row style={{margin:5}}>
           <Col span={5}>
           <Text>Password</Text>
           </Col>
         </Row>
     
      <Form.Item
        name="password"
      >
        <Input.Password  bordered={false} onChange={(e)=>setPassword(e.target.value)} />
        
      </Form.Item>
      <Divider/>
      <Row style={{margin:8}}>
           <Col span={8}>
           <Text style={{color:"orange",margin:10}}>Forgot Password?</Text>
           </Col>
         </Row>
    <Row>
      <Col span={2}>
      </Col>
      <Col span={20}>
      <Button  style={{width:300,height:40,borderRadius:5,backgroundColor:"red",color:"white",borderColor:"red",margin:10}} onClick={()=>submitForm()}>
          Login
        </Button>
      </Col>
    </Row>
       
       
  
      <Text>Dont have an Account ?<a style={{color:"red",fontWeight:"bolder"}}> Sign Up Now</a></Text>
      <Divider>Or</Divider>
      <Text>Continue With</Text>
      <Row >
        <Col span={10}></Col>
        <Col span={2}> <img src={F_icon} alt="g-icon"/></Col>
        <Col span={2}><img src={G_icon} alt="f-icon"/></Col>
      </Row>
    </Form>

        </Content>

 </Layout>
 <Alert
        className="alert-box"
      message="Error"
      description="Error in Logging In "
      type="error"
      showIcon
      closable
      
    />
     <Alert
        className="alert-box1"
      message="Error"
      description="Password Too Short or Invalid Mobile Number"
      type="error"
      showIcon
      closable
      
    />
      </Layout>
   

    </div>
  );
}

export default App;
