import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>MyPortfolio</Logo>
      <Menu>
        <li><a href="/about">About</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li a {
    text-decoration: none;
    color: inherit;
  }
`;