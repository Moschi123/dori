import React from 'react';
import styled from "styled-components";
import { AboutItem } from "../components/About/AboutItem";
import { yellow, blue, pink } from "../components/utils/index";
import comerce from "./utils/comerce.jpg"
const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Alinea los elementos en la parte superior del contenedor */
  margin: 20px;
  @media only screen and (min-width: 768px) {
    align-items: center; /* Alinea los elm,mnementos al centro en pantallas grandes */
  }
`;
const StyledImgLink = styled.a`
  /* Estilos para el enlace */
  text-decoration: none;
  cursor: pointer;
  /* Ajusta otros estilos como colores o bordes según tu diseño */
`;
const StyledImg = styled.img`
width: 100%;
max-width: 600px;
height: auto;
border: 4px solid;
box-shadow: 6px 6px 0;
color: black;
object-fit: contain;
opacity: 0;
animation: appear 3s ease forwards;

@keyframes appear {
  to {
    opacity: 1;
  }
}

  @media only screen and (max-width: 768px) {
    max-width: 400px;
  }
`;
const Desc = styled.div`
  flex: 1; /* Toma todo el espacio disponible */
  margin-left: 60px; /* Agrega un margen entre la imagen y la descripción */
  padding: 20px;
  font-color:white;
  border: 4px solid ;
  box-shadow: 6px 6px 0;
  background-color: ${(props) =>
    props.color ? props.color["70"] : blue["70"]};;
  color: black;
  border-radius: 10px;
  opacity: 0; /* Inicialmente oculta la descripción */
  & p:not(:last-child) {
    margin-bottom: 20px; /* Ajusta el espacio vertical según tus preferencias */
    color white;
  }
  
  /* Anula el espacio inferior del último párrafo y ajusta otros estilos si es necesario */
  p:last-child {
    margin-bottom: 0; /* Elimina el espacio inferior del último párrafo */
    color: white; /* Mantén el color blanco para el último párrafo */
  }
  animation: appear 2s ease forwards; /* Agrega animación de aparición */
  @keyframes appear {
    to {
      opacity: 1; /* Hace que la descripción aparezca gradualmente */
    }
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px; /* Agrega espacio en la parte superior en pantallas pequeñas */
  }
`;

const Ecomerce=()=>{
    return(
        <div>
<StyledContainer>

  
<StyledImgLink href="https://byte-me-front.vercel.app/" target="_blank">
     <StyledImg src={comerce} 
     alt="Descripción de la imagen" />
   </StyledImgLink>

      <Desc>
<p>
 • Specializing in PC peripherals.
</p>
<p>
•Managed team coordination and implemented agile methodology.

</p>
<p>
•Created secure purchase process, comprehensive admin panel.

</p>
<p>
•Node.js, React, PostgreSQL,Express
</p>
      </Desc> 
</StyledContainer>
   
        </div>
    )
}
export default Ecomerce