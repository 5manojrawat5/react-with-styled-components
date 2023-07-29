import React from 'react'
import { styled } from 'styled-components'
import women from './image/women.jpg'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
height:calc(100vh - 50px);
display:flex;
padding:20px;

@media only screen and (max-width:480px){
  flex-direction:column;
}
`;

const Left = styled.div`
width:60%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media only screen and (max-width:480px){
  width:100%;
  height:100%;
}
`

const Title = styled.h1`
font-size:70px;
width:60%;

@media only screen and (max-width:480px){
  width:100%;
  font-size:55px;
}
`;

const Desc = styled.p`
width:60%;
font-size:20px;
margin-top:20px;

@media only screen and (max-width:480px){
  width:100%;
  text-align:center;
  font-size:18px;
}
`;

const Info = styled.div`
width:60%;
display:flex;
justify-content: space-between;
align-items:center;
margin-top:50px;


@media only screen and (max-width:480px){
  flex-direction:column;
}
`;

const Button = styled.button`
padding:15px;
color:white;
background:darkblue;
border-radius:10px;
border:none;
font-weight:bold;
cursor:pointer;
letter-spacing:2px;
margin-bottom:30px;
`;

const Contact = styled.div`
display:flex;
flex-direction:column;
`

const Phone = styled.span`
color:#f0667d;
font-weight:bold;

@media only screen and (max-width:480px){
  color:orange;
}
`

const ContactText = styled.span`
color:gray;
margin-top:5px
`

const Right = styled.div`
width:40%;

@media only screen and (max-width:480px){
  display:none;
}
`;

const Image = styled.img`
width:100%;
`

const Intro = () => {
  return (
    <Container>
    <Left>
        <Title>Adventures in creative age</Title>
        <Desc>We belive that designig products and services and services in close 
        partnership with our clients is the only wey to have a real impact in their business.</Desc>
        <Info>
            <Button>START A PROJECT</Button>
            <Contact>
                <Phone>Call Us (+91) 9084487403</Phone>
                <ContactText>For any question or concern</ContactText>
            </Contact>
        </Info>
    </Left>
    <Right>
        <Image src={women}></Image>
    </Right>
    <AnimatedShapes/>
    </Container>
  )
};

export default Intro;
