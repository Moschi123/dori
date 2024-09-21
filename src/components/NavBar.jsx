import React from 'react';
import styled from "styled-components";
import searchIcon from "../components/utils/mensaje.png";
import { blue ,yellow} from "../components/utils/index"; // Usa colores más sobrios o elegantes
import gorrito from "../components/utils/gorro-de-graduacion.png"

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.5); /* Azul transparente */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Añade una sombra ligera para darle profundidad */
`;

const Container = styled.div`
  max-width: 1400px; /* Ancho máximo de la navbar */
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
`;

const ListItem = styled.li`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    color: rgba(255, 223, 0, 0.8); /* Cambiar color al pasar el cursor para mejor experiencia de usuario */
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: ${yellow}; /* Color suave */
  color: #666;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  gap: 5px; /* Espacio entre el ícono y el texto */

  &:hover {
    background-color:rgba(255, 223, 0, 0.8);/* Efecto de hover */
  }
`;

const Iconn = styled.img`
  width: 20px; /* Ajusta el tamaño del ícono si es necesario */
  height: 20px; /* Para mantener proporciones cuadradas */
  object-fit: contain;
`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* Ícono de gorrito de graduación como logo */}
          <Icon src={gorrito} alt="Logo" />
          
          {/* Lista de enlaces de navegación */}
          <List>
            <ListItem>Inicio</ListItem>
            <ListItem>Sobre mí</ListItem>
        
            <ListItem>Contacto</ListItem>
          </List>
        </Links>

        <Icons>
          {/* Botón de reserva con ícono alineado */}
          <Button>
            <Iconn src={searchIcon} alt="Search Icon" />
            Escribime!
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavBar;