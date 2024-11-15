import React, { useRef } from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import styled from 'styled-components';
import About from "./components/About/About"
const Container = styled.div`
  height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior:smooth;
 overflow-y:auto;
 scrollbar-width:none;
 color:black;
 background:white;

`;

function App() {
 const contactRef = useRef(null);

  return (
    <Container>
      <Hero contactRef={contactRef} />
         <About/> 
   
   <Contact ref={contactRef} />
    </Container>
  );
}

export default App;
