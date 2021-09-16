import { Container, Navbar, Nav } from "react-bootstrap";
import "./index.css";
import "../styles/main.scss";
import { GithubOutlined } from "@ant-design/icons";

export default function MainLayout({ children, footerClass }) {
  return (
    <div className="main-layout" data-testid="main-layout">
      <Navbar expand="md" className="navbar">
        <Container>
          <Navbar.Brand data-testid="navbar-brand" href="/">
            FrontendShowcase
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/todo">Todo</Nav.Link>
              <Nav.Link href="/flexbox">Flexbox</Nav.Link>
              <Nav.Link href="/grid">Bootstrap Grid</Nav.Link>
              <Nav.Link href="/sass">Sass</Nav.Link>
              <Nav.Link href="/axios">Axios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-layout-children">{children}</div>
      <footer className={`${footerClass}`}>
        <Container className={`footer-container`}>
          <div className="footer-content">
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
      </footer>
    </div>
  );
}
