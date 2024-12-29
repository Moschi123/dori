import React, { useRef } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import dori from "./utils/dori-fondo1.jpg";
import {blue,yellow} from "../components/utils/index"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  color:rgba(0, 0, 255, 0.5);
  line-height: 1.2;
   
  @media only screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
   color: #666;
  font-size: 24px;
  padding-block: 1rem;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  padding-block: 1.5rem;
  max-width: 600px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Button = styled.button`
   background-color:${yellow}; /* Color suave */
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c13e89;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    margin-top: 20px;
  }
`;

const StyledImg = styled.img`
  width: 80%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media only screen and (max-width: 768px) {
    width: 80%;
    max-width: 250px;
  }
`;
/*     width: 100%;
    max-width: 450px;
    border-radius: 10px; */
const ImageWrapper = styled.div`
  position: relative;
  background: linear-gradient(135deg, ${blue["80"]}, ${yellow});
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  
  
`;

const Hero = () => {
  // Crear referencia al componente Contact
  const contactRef = useRef(null);

  // Función que se ejecuta para hacer scroll a la sección Contact
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Section>
      <NavBar onEscribimeClick={scrollToContact} />
      <Container>
        <Left>
          <Title>Dorina Moschini</Title>
          <Subtitle>Directora de Casa de Estudio</Subtitle>
          <Desc>
          Disfruta de  clases de apoyo en diversas materias para todos los niveles educativos!. Incluyendo  acompañamiento primario y hasta universitario en asignaturas especificas .Mis clases, tanto presenciales como online, están diseñadas para adaptarse a las necesidades de cada estudiante.
          </Desc>
     
        </Left>
        <Right> 
          <StyledImg src={dori} alt="Dorina Moschini" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
