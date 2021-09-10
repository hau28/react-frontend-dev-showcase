import { Container, Navbar, Nav } from "react-bootstrap";
import "./index.css";
import "../styles/main.css";
import { GithubOutlined } from "@ant-design/icons";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar expand="md" className="navbar">
        <Container>
          <Navbar.Brand href="/">FrontendShowcase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/todo">Todo</Nav.Link>
              <Nav.Link href="/flexbox">Flexbox</Nav.Link>
              <Nav.Link href="/grid">Bootstrap Grid</Nav.Link>
              <Nav.Link href="/sass">Sass</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <foorter>
        <Container>
          <div className="footer">
            <div className="footer-left">
              <h4>What's this?</h4>
              <p>
                This website is created for the purpose of practicing React and
                other front-end techniques. I'm still working on it.
              </p>
            </div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/hau28/react-frontend-dev-showcase"
              className="github"
            >
              <GithubOutlined className="footer-icon" />
              <p>
                Developed by <b>hau28</b>
              </p>
            </a>
          </div>
        </Container>
      </foorter>
    </div>
  );
}
