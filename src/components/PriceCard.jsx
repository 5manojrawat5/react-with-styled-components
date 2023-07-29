import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
padding:60px;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
box-shadow : 0px 0px 17px -11px rgba (0,0,0,0.58);
border-radius:10px;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
margin-right:80px;

@media only screen and (max-width:480px){
  padding:20px;
  margin-right:0;
  margin-bottom:10px;
}
`;
const PriceContainer = styled.div`
display:flex;
align-items:center;
`;
const Price = styled.span`
font-size:50px;
font-weight:bold;

@media only screen and (max-width:480px){
  font-size :20px;
}
`;

const Type = styled.button`
padding:10px;
font-size:15px;
margin:10px 0;
border-radius:20px;
background-color:white;
border:1.5px solid crimson;
color:crimson;

@media only screen and (max-width:480px){
  font-size:12px;
  margin:5px 0;
}
`
const List = styled.ul`
list-style:none;
`
const ListItem = styled.li`
margin:30px 0;

@media only screen and (max-width:480px){
  margin:10px 0;
  font-size :12px;
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
}
`

const PriceCard = ({type,price}) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
        <Type>{type} Plan</Type>
        <List>
            <ListItem>200 Hand-crafted Templates</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>{" "}
        </List>
        <Button>Join Now</Button>
    </Container>
  )
}

export default PriceCard
