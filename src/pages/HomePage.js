import { Container } from "react-bootstrap";
import { HomePageCard } from "../components/Card";
import NavbarWrapper from "../components/NavbarWrapper";
import { BigTitle, Heading2, HomePageBG } from "../components/Styled";
import "./HomePage.css";

const CARDS = [
  {
    title: "Simple Todo List",
    desc: "A simple todo list with basic functions like add, check, remove todo, add tags. Built with react redux and styled components.",
    imgSrc: "https://i.ibb.co/QQ60h3N/stil-ck0i9-Dnjtj0-unsplash.jpg",
    href: "/todo",
  },
  {
    title: "Flexbox",
    desc: "Working on it...",
    imgSrc:
      "https://i.ibb.co/dPPNnxP/pankaj-patel-6-JVl-Sdg-Mac-E-unsplash.jpg",
    href: "/flexbox",
  },
];

export default function HomePage() {
  return (
    <NavbarWrapper>
      <HomePageBG>
        <Container className="homepage-bg-container">
          <BigTitle color="white">Hello</BigTitle>
          <Heading2 color="white">Welcome to my showcase</Heading2>
        </Container>
      </HomePageBG>
      <Container>
        <div className="card-list">
          {CARDS.map((card, index) => (
            <HomePageCard {...card} key={index} />
          ))}
        </div>
      </Container>
    </NavbarWrapper>
  );
}
