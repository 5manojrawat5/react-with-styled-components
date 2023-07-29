import React from 'react'
import { styled } from 'styled-components'
import PriceCard from './PriceCard';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
height:100%;
display:flex;
justify-content:center;
align-items:center;

@media only screen and (max-width:480px){
  flex-direction:column;
}
`;

const Price = () => {
  return (
    <Container>
      <PriceCard type='Basic' price="10"/>
      <PriceCard type='Premium' price="20"/>
      <PriceCard price='30' type="Advanced"/>
      <AnimatedShapes/>
    </Container>
  )
}

export default Price
