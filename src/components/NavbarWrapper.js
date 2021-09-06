import { Container, Navbar, Nav } from "react-bootstrap";
import "./index.css";

export default function NavbarWrapper({ children }) {
  return (
    <>
      <Navbar expand="md" className="navbar">
        <Container>
          <Navbar.Brand href="/">FrontendShowcase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/todo">Todo</Nav.Link>
              <Nav.Link href="/flexbox">Flexbox</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
}
