import React from 'react'
import { styled } from 'styled-components';
import Map from './image/map.png';
import Phone from "./image/phone.png"
import Send from "./image/send.png"

const Container = styled.div`
height:90%;
background: url("https://w7.pngwing.com/pngs/873/251/png-transparent-check-white-floral-background-material-texture-angle-rectangle-thumbnail.png");
`
const Wrapper = styled.div`
height:100%;
padding:20px;
display:flex;
align-items:center;

@media only screen and (max-width:480px){
  flex-direction:column;
}
`
const FormContainer = styled.div`
width:50%;

@media only screen and (max-width:480px){
width:100%;
}
`

const Title = styled.h1`
margin:90px;
margin-top:0px;
font-size:3.5rem;

@media only screen and (max-width:480px){
  margin:30px;
  font-size:30px;
  width:100%;
  margin-bottom:80px;
}
`

const Form = styled.form`
height:250px;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width:480px){
  flex-direction:column;
  height:300px;
}
`

const LeftForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-right:20px;

@media only screen and (max-width:480px){
  margin-bottom:20px;
}
` 

const RightForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;

@media only screen and (max-width:480px){
  margin-bottom:30px;
}
`

const Input = styled.input`
width:250px;
padding:25px;
border-radius:10px;

@media only screen and (max-width:480px){
  padding:10px;
  margin-bottom:10px;
}
`

const TextArea = styled.textarea`
height:60%;
width:250px;
padding:20px;
border-radius:10px;

@media only screen and (max-width:480px){
padding:30px;
margin-bottom:25px;
}
`

const Button = styled.button`
border:none;
padding:15px;
font-size:16px;
font-weight:bold;
background-color:darkblue;
color:white;
border-radius:10px;
letter-spacing:1px;
cursor:pointer;

@media only screen and (max-width:480px){
  padding:10px;
  font-size:12px;
  margin-bottom:40px;
}
`

const AddressContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;

@media only screen and (max-width:480px){
  width:100%;
  margin:30px;
}
`
const AddressItem = styled.div`
display:flex;
align-items:center;
margin-bottom:70px;

@media only screen and (max-width:480px){
  margin-bottom:50px;
}
`

const Icon = styled.img`
width:20px;
margin-right:25px

@media only screen and (max-width:480px){
  width:10px;
}
`

const Text = styled.span`
font-size :20px;
margin-right:20px;

@media only screen and (max-width:480px){
  font-size:15px;
}

`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <FormContainer>
      <Title>Questions ? <br/> Let,s Get In Touch.</Title>
      <Form>
      <LeftForm>
        <Input placeholder="Your Name"/>
        <Input placeholder="Your Email"/>
        <Input placeholder="Subject"/>
      </LeftForm>
      <RightForm>
        <TextArea placeholder="Your Message"/>
        <Button>Send</Button>
      </RightForm>
      </Form>
      </FormContainer>
      <AddressContainer>
      <AddressItem>
        <Icon src={Map}/>
        <Text>Nobody place , Noone lives, out of the Earth</Text>
      </AddressItem>
      <AddressItem>
        <Icon src={Phone}/>
        <Text>+91 9084487403</Text>
        <Text>+91 8218704535</Text>
      </AddressItem>
      <AddressItem>
        <Icon src={Send}/>
        <Text>rsmanoj5mohit@gmail.com</Text>
        <Text>freetocontact@gamil.com</Text>
      </AddressItem>
      </AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Footer

