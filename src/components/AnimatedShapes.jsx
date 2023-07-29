import React from 'react'
import { styled } from 'styled-components'

const Square = styled.div`
width:60px;
height:60px;
background-color:#4e6bff;
opacity:0.7;
position:absolute;
top:-60px;
left:-60px;
z-index:-1;
animation:square 15s linear alternate infinite;

@keyframes square{
  to{
    transform:translate(50vw, 100vh);
  }
}
`;

const Circle = styled.div`
width:100px;
height:100px;
border-radius:50%;
background-color:#ff97af;
position:absolute;
top:200px;
left:-100px;
z-index:-1;
animation:circle 10s linear alternate infinite;

@keyframes circle{
  to{
    transform:translate(40vw, -50vh);
  }
}
`;

const Rect = styled.div`
width:50px;
height:100px;
opacity:0.5;
background-color:#669966;
position:absolute;
top:400px;
left:-50px;
z-index:-1;
animation:rect 15s linear alternate infinite;

@keyframes rect{
  to{
    transform:translate(68vw, -50vh);
  }
}
`;


const AnimatedShapes = () => {
  return (
    <div>
      <Square/>
      <Circle/>
      <Rect/>
    </div>
  )
}

export default AnimatedShapes
