import React, { useState } from 'react';
import { Button } from 'antd';
import {Row,Card,Col,Divider,Alert,Typography,Avatar, Input ,Layout ,Menu,Select} from 'antd';
import './App.css';
import Avatar_img from "./assets/avatar2.png" ;
import Background from "./assets/background.png" ;
import {CloseOutlined,PlusOutlined, MailOutlined, HomeOutlined} from "@ant-design/icons" ;
const {  Content } = Layout;
const {Text,Title} = Typography ;
const {Option} = Select ;


const { SubMenu } = Menu;


function PostLoginScreen() {

//======================================================React State Hooks =======================================
const [addresses, addAddress] = useState([]) ;
const [addrType,currentAddrType] = useState("") ;
const [address,setAdddress] = useState("") ;

//========================================================Helper Functions ======================================

function addAddresses(){
console.log(address,addrType) ;
if(address.length <5 || addrType =="" ) return null;
addAddress(addresses => [...addresses,{address,"type":addrType}]) ;
console.log(addresses) ;
currentAddrType("") ;  //clearing the state
setAdddress("") ;   //clearing the state
document.getElementById("addr-input").value = "" ;
document.getElementsByClassName("addr-form")[0].style.display = "none" ;
}

//=========================================================Main Component =====================================
  return (
    <div className="App">
      <Layout>
          <Row>
              <Col span={5} style={{margin:20}}>
              <Layout>
              <Content>
              <Card >
                  <Row>
                      <Col span={7}> <Avatar size={70} src={Avatar_img}></Avatar></Col>
                      <Col span={16}><Title style={{fontWeight:"bolder",fontSize:22,paddingTop:8}}> Hi <br/> Mekvahan ! </Title></Col>
                     
                      </Row>
     
                </Card>
                <Card style={{marginTop:20}}>
                    <Row>
                        <Text style={{fontWeight:"bold",fontSize:22,marginTop:10}}> My Profile</Text>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Text style={{fontWeight:"bold",fontSize:22,marginTop:10,color:"red"}}> Manage Address</Text>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Text style={{fontWeight:"bold",fontSize:22,marginTop:10}}> Change Password</Text>
                    </Row>
                </Card>
                <Card style={{height:270}}>

                </Card>
                     </Content>
    
                </Layout>
              </Col>
              <Col span={17} style={{margin:20}}>
              <Layout>
              
              <Content>
                  <Card>
                      <Row>
                          <Col span={5} style={{fontWeight:"bold",fontSize:22,marginTop:10}}>My Addresses</Col>
                          <Col span={14}></Col>
                          <Col span={5} style={{fontWeight:"bold",fontSize:18,marginTop:10}}>
                          <PlusOutlined /> <span onClick={()=>{document.getElementsByClassName("addr-form")[0].style.display="block"}}><Text>Add Addresses</Text></span></Col>                  
                      </Row>
                  </Card>
   
                  <Card style={{height:"80vh",width:"71vw",overflow:"hidden"}}>
                    {
                        addresses.length==0?
                        <img src={Background}  style={{width:"70vw",height:"80vh"}}/>
                        :
                        <Row> {addresses.map((item)=>{
                            return  <Col span={11} style={{margin:15}}>
                                 <Card style={{backgroundColor:"#F7F6F5"}}>
                                   
                                       <Row>
                                           <Col span={4}>{item.type=="Office"?<MailOutlined style={{fontSize:20,marginTop:10,color:"grey"}}/>:<HomeOutlined style={{fontSize:20,marginTop:10,color:"grey"}}/>}</Col>
                                           <Col span = {18}><Text style={{fontSize:25,fontWeight:"bolder"}}>{item.type}</Text></Col>
                                           <Col span={4}></Col>
                                           <Col span ={18} style={{fontSize:18,fontWeight:18, margin:5,color:"grayText",opacity:0.8}}><Text>{item.address}</Text></Col>
                                           <Col span={4}></Col>
                                           <Col span={9}><Button style={{width:150,borderRadius:5 ,marginTop:10,backgroundColor:"red",color:"white",borderColor:"red"}}>Edit</Button></Col>
                                           <Col span={1}></Col>
                                           <Col span={9}><Button style={{width:150,borderRadius:5,marginTop:10,backgroundColor:"grey",color:"white",borderColor:"grey"}}>Delete</Button></Col>
                                       </Row>
                                  
                                   </Card> 
                                   </Col>
                                   
                        })}
                        </Row>           
                    }
                  </Card>
                     
                     </Content>
    

                </Layout>
              </Col>
          </Row>
          <Card className="addr-form" >  
          <Row>
      
          <Col span={6}></Col>
              <Col span={16}> <Title level={2}>Add address</Title></Col>
              <Col span={2}><span onClick={()=>{document.getElementsByClassName("addr-form")[0].style.display="none"}}><CloseOutlined/></span></Col>
              <Col span={20}><Input id="addr-input" placeholder="write Full Addess" style={{margin:20}} onChange={(e)=>setAdddress(e.target.value)}/></Col>
              <Col span={24}> <Select placeholder="Select Adddress Type"  style={{ width: 200,margin:20 }} onChange={(value)=>{currentAddrType(value)}}>
      <Option value="Home">Home</Option>
      <Option value="Office">Office</Option>
      <Option value="PG">PG</Option>
    </Select>
    </Col>
    <Col span={1}></Col>
              <Col span={8}><Button style={{width:150,backgroundColor:"red",color:"white",borderColor:"red"}} onClick={()=>addAddresses()}><PlusOutlined/>Add</Button></Col>
          </Row>        
      </Card>
      </Layout>
  
    </div>
  );
}

export default PostLoginScreen;
