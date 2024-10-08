import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { pink, blue,yellow } from "../components/utils/index";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  background-color: ${blue["5"]}; /* Azul transparente */
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  padding: 5px;
  padding-left: 110px;
  font-weight: 600;
  font-size: 28px;
  color: rgba(0, 0, 255, 0.5);

  @media only screen and (max-width: 768px) {
    padding-left: 0; /* Elimina el padding en pantallas pequeñas */
    font-size: 24px;  /* Reduce el tamaño del texto en pantallas pequeñas */
    text-align: center; /* Centra el texto en pantallas pequeñas */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 450px;
  width: 100%;
`;

const Input = styled.input`
  padding: 12px;
  border:none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${blue["5"]};
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 12px;
 border:none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${blue["5"]};
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
   background-color: rgba(0, 0, 255, 0.5); /* Azul transparente */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgba(0, 0, 235, 0.2);
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: ${yellow["30"]};
  border-radius: 10px;
  color: white;
  text-align: center;
  max-width: 400px;
  margin: 0 auto; /* Centrar en pantallas más pequeñas */

  @media only screen and (max-width: 768px) {
    padding: 15px;
    max-width: 100%; /* Tomar el 100% del ancho en pantallas pequeñas */
  }
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: rgba(0, 0, 255, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: 20px; /* Reducir el tamaño de la fuente en pantallas pequeñas */
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 16px; /* Ajustar el tamaño de fuente */
  }
`;

const HorariosList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 18px;
  color: #666;

  & li {
    margin: 10px 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px; /* Ajustar el tamaño de fuente */
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_u92x0lc', 'template_oyhknn6', ref.current, '5Qcyh_eVLSOOE4Z0E')
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Reserva tu turno!</Title>
            <Input placeholder="Nombre" name="name" />
            <Input name="materia" placeholder="Materia" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Hola me llamo.. , mi numero es .." name="message" rows={6} />
            <Button type="submit">
              Enviar
            </Button>
            {success && 'Tu mensaje ha sido enviado.'}
          </Form>
        </Left>
        <InfoContainer>
          <InfoTitle>Información</InfoTitle>
          <InfoText>Número: +123 456 7890</InfoText>
          <InfoText>Email: dorina@example.com</InfoText>
          <InfoTitle>Horarios disponibles</InfoTitle>
          <HorariosList>
          <InfoText>Lunes: 9:00 AM - 12:00 PM</InfoText>
          <InfoText>Jueves y viernes: 2:00 PM - 5:00 PM</InfoText>
          <InfoText>Sábados: 10:00 AM - 1:00 PM</InfoText>
           
          </HorariosList>
        </InfoContainer>
      </Container>
    </Section>
  );
};

export default Contact;


/* 'service_u92x0lc', 'template_oyhknn6', ref.current, '5Qcyh_eVLSOOE4Z0E' */