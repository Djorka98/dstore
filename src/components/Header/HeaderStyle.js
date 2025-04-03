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

  ${Navbar} & {
    color: #fff;
  }

  &.active {
    border-bottom: 2px solid white;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    color: #fff;
    text-align: center;

    &.active {
      border-bottom: 2px solid #000;
    }
  }
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
  text-decoration: none;
`;
