import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow:hidden;
  position:relative;
`;

const Shape = css`
height:100%;
width:100%;
position:absolute;
left:0;
top:0;
z-index:-1;
`;

const IntroShape = styled.div`
${Shape};
clip-path: polygon(64% 0, 100% 0%, 100% 100%, 46% 100%);
background-color:crimson;
`;

const FeatureShape = styled.div`
${Shape};
background-color:#f88497;
clip-path: polygon(0% 0, 46% 0%, 100% 100%, 46% 100%)
`

const ServiceShape = styled.div`
${Shape};
background-color:pink;
clip-path:polygon(64% 0, 100% 0%, 100% 100%, 46% 100%)
`

const PriceShade = styled.div`
${Shape};
background-color:crimson;
clip-path: polygon(0% 0, 46% 0%, 100% 100%, 46% 100%)
`

const APP = () => {
  return (
    <>
    <Container>
      <Navbar />
      <Intro />
      <IntroShape/>
    </Container>

    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>

    <Container>
      <Service/>
      <ServiceShape/>
    </Container>

    <Container>
      <Price/>
      <PriceShade/>
    </Container>

    <Container>
      <Contact/>
      <Footer/>
    </Container>
      </>
  );
};

export default APP;
