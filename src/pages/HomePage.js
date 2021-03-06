import { Container } from "react-bootstrap";
import { HomePageCard } from "../components/Card";
import MainLayout from "../components/MainLayout";
import { BigTitle, Heading2, HomePageBG } from "../components/Styled";
import "../styles/HomePage.css";

const CARDS = [
  {
    title: "Simple Todo List",
    desc: "A simple todo list with basic functions like add, check, remove todo, add tags. Built with react redux and styled components.",
    imgSrc: "https://i.ibb.co/H2GQJCP/fsadf.png",
    href: "/todo",
  },
  {
    title: "CSS Flexbox Properties",
    desc: "Illustrates CSS Flexbox properties on both parent element (flex container) and child elements (flex items).",
    imgSrc:
      "https://i.ibb.co/dPPNnxP/pankaj-patel-6-JVl-Sdg-Mac-E-unsplash.jpg",
    href: "/flexbox",
  },
  {
    title: "Bootstrap Grid Layout",
    desc: "Illustrates CSS Flexbox properties on both parent element (flex container) and child elements (flex items).",
    imgSrc: "https://itechzo.com/wp-content/uploads/2019/11/bootstrap.png",
    href: "/grid",
  },
  {
    title: "Sass Practice",
    desc: "Simple pricing page to practice Sass.",
    imgSrc:
      "https://og-image-react-egghead.now.sh/topic/scss?orientation=landscape&v=20201104",
    href: "/sass",
  },
  {
    title: "Axios Practice",
    desc: "Make simple AJAX requests with axios.",
    imgSrc:
      "https://www.adyen.com/dam/jcr:3b123375-e31b-452d-ab3f-9d68bc906ff5/ai-header.jpg",
    href: "/axios",
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      <HomePageBG>
        <Container className="homepage-bg-container">
          <BigTitle color="white">Hello</BigTitle>
          <Heading2 color="white">Welcome to my showcase</Heading2>
        </Container>
      </HomePageBG>
      <Container>
        <div className="card-list">
          {CARDS.map((card, index) => (
            <HomePageCard
              {...card}
              key={index}
              className={index === CARDS.length - 1 ? "mb-0" : "mb-5"}
            />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}
