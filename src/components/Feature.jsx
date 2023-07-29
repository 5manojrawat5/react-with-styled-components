import React from "react";
import { styled } from "styled-components";
import laptop from "./image/laptop.jpeg"
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display:flex;

  @media only screen and (max-width:480px){
    padding:30px 20px;
  }
`;

const Left = styled.div`
width:50%;
margin-left:150px;

@media only screen and (max-width:480px){
  display:none;
}
`;

const Image = styled.img`
width:100%;
`

const Right = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
margin:150px;

@media only screen and (max-width:480px){
  width:100%;
  margin:0px;
}
`;

const Title = styled.span`
margin-top:-100px;
font-size:60px;

@media only screen and (max-width:480px){
  font-size:50px;
  margin-top:150px;
}
;`

const SubTitle = styled.span`
font-size:24px;
font-style:italic;
color:#333;
margin-top:30px;
`
const Desc = styled.p`
margin-top:30px;
font-size:20px;
color:#777;
`
const Button = styled.button`
width:150px;
border:none;
padding:15px 20px;
border-radius:20px;
font-size:20px;
color:white;
background-color:darkblue;
margin-top:20px;
cursor:pointer;

@media only screen and (max-width:480px){
  margin-top:30px;
}
`

const feature = () => {
  return <Container>
    <Left>
     <Image src={laptop}/>
      </Left>
    <Right>
      <Title>
        <b>good</b> design <br/>
        <b>good</b> business
      </Title>
      <SubTitle>We know that good design means good business.</SubTitle>
      <Desc>We help our clients succeed by creating brand identities, digital experiences,
       and print materials that communicate clearly, achieve marketing goals, and look fanfastic.</Desc>
      <Desc>We care your business and guarantee you to achieve marketing goals.</Desc>
      <Button>Learn More</Button>
    </Right>
    <AnimatedShapes/>
  </Container>;
};

export default feature;
