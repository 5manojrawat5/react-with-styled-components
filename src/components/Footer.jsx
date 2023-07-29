import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
height:10%;
background-color:#111;
color:lightgray;
`

const Wrapper = styled.div`
padding:25px;
display:flex;
justify-content:space-between;
align-items:center;

@media only screen and (max-width:480px){
  padding:10px;
}
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
`
const ListItem = styled.li`
margin-right:25px;

@media only screen and (max-width:480px){
  margin-right:5px;
}
`
const Copyright = styled.span`
font-weight:bold;
letter-spacing:1.5px;

@media only screen and (max-width:480px){
  letter-spacing:1px;
}
`

const Footer = () => {
  return (
    <Container>
    <Wrapper>
        <List>
            <ListItem>Guide</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>API</ListItem>
            <ListItem>Community</ListItem>
        </List>
        <Copyright>&copy; Itachi Uchiha &copy;</Copyright>
    </Wrapper>
    </Container>
  )
}

export default Footer
