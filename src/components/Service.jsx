import React, { useState } from "react";
import { styled } from "styled-components";
import how from "./image/how.jpg";
import MiniCard from "./MiniCard";
import play from './image/play.png'
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  height:100%;

  @media only screen and (max-width:480px){
    flex-direction:column;
  }
`;

const Left = styled.div`
  width: 50%;
  position:relative;

  @media only screen and (max-width:480px){
    display:none;
  }
`;

const Image = styled.img`
display: ${(props) => props.open && "none"};
  width: 80%;
  margin-left:50px;
`;

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height:300px;
position:absolute;
top:0;
bottom:0;
right :100px;
margin:auto;

@media only screen and (max-width:480px){
  width:100%;
  right:0;
}
`

const Right = styled.div`
  width: 50%;
  margin-top:60px;

  @media only screen and (max-width:480px){
    width:100%;
  }
`;

const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction:column;

@media only screen and (max-width:480px){
  padding:20px;
}
`

const Title = styled.h1`
font-size :50px;
`
const Desc = styled.p`
font-size:20px;
margin-top:20px;
color:#555;
`

const CardContainer = styled.div`
display:flex;
margin-top:50px;
justify-content: space-between;
`

const Button = styled.button`
width:200px;
padding:20px;
background-color:darkblue;
color:white;
font-size: 20px;
border-radius: 10px;
border:none;
margin-top:50px;
cursor:pointer;
display:flex;
align-items:center;
`;

const Icon = styled.img`
width:20px;
margin-right:10px;`

const Model = styled.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.5);
`;

const CloseButton = styled.button`
padding:5px;
border:none;
border-radius:5px;
position:absolute;
top:33%;
right:10px;
background-color:white;
color:red;
cursor:pointer;
`


const Service = () => {

  const [open,setOpen] = useState(false)

  const SmallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <Image open={open} src={how} />
        <Video open={open} autoplay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
        {open && (
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        )}
      </Left>
      <Right>
        <Wrapper>
        <Title>Simple process to start</Title>
        <Desc>We provide digital experience services to startups and small businesses to 
        looking for a partner of their digital midea, design & development, lead generation and communications
         requirents. We work with you, not for you. Although we have a great resources</Desc>
         <CardContainer>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
         </CardContainer>
          <Button onClick={() => setOpen(true)}> 
          <Icon src={play}/>
           How it works
           </Button>
        </Wrapper>
      </Right>
      {SmallScreen && open && (
        <Model>
        <Video open={open} autoplay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
        <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Model>
      )}
      <AnimatedShapes/>
    </Container>
  );
};

export default Service;
