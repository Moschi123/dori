import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { pink, blue } from "../utils/index";

// Sección principal
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

// Contenedor principal
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    gap: 30px;
  }
`;

// Estilo para la sección izquierda (texto)
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

// Título de la sección
const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 20px;
  color: rgba(0, 0, 255, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

// Párrafo de descripción
const AboutParagraph = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Contenedor de las tarjetas
const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

// Estilo de cada tarjeta
const Card = styled.div`
  width: 300px;
  padding: 30px;
  background-color: ${blue["5"]};
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

// Nombre del cliente
const ClientName = styled.h3`
  font-size: 20px;
  color: rgba(0, 0, 255, 0.5);
`;

// Feedback del cliente
const ClientFeedback = styled.p`
  font-size: 16px;
  text-align: center;
  color: #666;
`;

// Componente principal
const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);

  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", () => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1, 0.9)",
          absolute: true,
        });
      });
    });
  }, []);

  return (
    <Section>
      <Container>
        <Left>
          <Title>+10 años de experiencia</Title>
          <AboutParagraph>
            He trabajado en diversas áreas de la educación durante más de 10
            años, enfocándome en la enseñanza y desarrollo de habilidades clave.
          </AboutParagraph>
        </Left>
      </Container>

      <CardsContainer>
        <Card>
          <ClientName>Alfonsina -16 años-</ClientName>
          <ClientFeedback>
            "Ella adapta las clases a tus necesidades, la super recomiendo!"
          </ClientFeedback>
        </Card>
        <Card>
          <ClientName>Agostina -24 años-</ClientName>
          <ClientFeedback>
            "Hace mas de 10 años me dicta clases, empeze en la secundario y ahora que estoy en la universidad sigo con ella"
          </ClientFeedback>
        </Card>
        <Card>
          <ClientName>Julio -18 años-</ClientName>
          <ClientFeedback>
            "Me lleve 8 materias a diciembre, aprobe todo en un mes!"
          </ClientFeedback>
        </Card>
      </CardsContainer>
    </Section>
  );
};

export default About;
