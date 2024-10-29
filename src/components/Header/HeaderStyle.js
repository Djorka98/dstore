import styled from 'styled-components';

export const HeaderStore = styled.header`
  position: fixed;
  width: 100%;
  background-color: #181818;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  box-sizing: border-box;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  // This will override the color for links inside .navbar
  ${Navbar} & {
    color: #fff;
  }

  &.active {
    border-bottom: 2px solid white; // Example styling for active links
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; // Aumenta el tamaño de fuente en móviles para facilitar la lectura
    color: #fff; // Asegúrate de que el color sea claro para que contraste en el fondo
    text-align: center; // Centra los enlaces en el menú

    &.active {
      border-bottom: 2px solid #000; // Cambia el color del borde en móviles si es necesario
    }
  }
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
  text-decoration: none;
`;
