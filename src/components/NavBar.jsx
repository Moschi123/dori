import React from 'react';
import styled from "styled-components";
import searchIcon from "../components/utils/mensaje.png";
import { yellow } from "../components/utils/index";
import gorrito from "../components/utils/gorro-de-graduacion.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.5);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Ocultar en pantallas pequeñas */
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 20px;

  @media (max-width: 768px) {
    display: none; /* Ocultar en pantallas pequeñas */
  }
`;

const ListItem = styled.li`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    color: rgba(255, 223, 0, 0.8);
  }
`;

const Button = styled.button`
  padding: 8px 20px;
  background-color: ${yellow};
  color: #666;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap:6px;
  font-weight: bold;
 ;
  &:hover {
    background-color: rgba(255, 223, 0, 0.8);
  }
`;

const Iconn = styled.img`
  width: 17px;
  height: 17px;
  object-fit: contain;
`;

const NavBar= ({ onEscribimeClick }) => {
  return (
    <Section>
      <Container>
                <Icon src={gorrito} alt="Logo" />
        <Links>

          <List>
            <ListItem>Inicio</ListItem>
            <ListItem>Sobre mí</ListItem>
            <ListItem>Contacto</ListItem>
          </List>
        </Links>

        <Icons>
          
          <Button onClick={onEscribimeClick}>
            <Iconn src={searchIcon} alt="Search Icon" />
            Escribime!
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavBar;
