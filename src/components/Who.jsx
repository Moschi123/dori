import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Container =styled.div`
  height:100vh;
  scroll-snap-align:center;
  width:1400px;
  display:flex;
  justify-content:space-between;
`;

const Left =styled.div`
flex:1;

@media only screen and (max-width:768px) {
 display:none;
 }

`;
const Title =styled.h1`
font-size:74px;
@media only screen and (max-width:768px) {
font-size:60px;
 }
`;
const WhatWeDo =styled.div`
display:flex;
align-items:center;
gap:10px;
`;
const Line =styled.img`
height:5px;
`;
const Subtitle =styled.h2`
color:#da4ea2;
`;
const Desc =styled.p`
font-size:24px;
color:lightgray;
`;
const Button =styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width:100px;
padding:10px;
border:none;
border-radius:5px;
cursor:pointer;
`;

const Right =styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;

@media only screen and (max-width:768px) {
  align-items:center
  text-align:center;
 }

`;



const  Who =()=>{
    return(
        <Section>
     
       <Container>
        <Left>
             {/* 3d model */}
            </Left>
            
        <Right>
        <Title>Franco Moschini</Title>
          <WhatWeDo>
            <Subtitle>Web Developer</Subtitle>
           
          </WhatWeDo>
         <Desc>
              Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Voluptatem natus est excepturi 
              molestias at id dolorum vel eaque illo consequuntur, 
              laborum quam quibusdam pariatur ad itaque, aliquid rem mollitia veritatis!
            </Desc>
            <Button>Learn More</Button>
        </Right>
       </Container>
        </Section>
    )
}


export default Who
