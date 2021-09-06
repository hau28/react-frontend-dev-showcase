import { Card, Button } from "react-bootstrap";
import "./index.css";

export function HomePageCard({ title, desc, href, imgSrc }) {
  return (
    <Card className="card shadow-lg mb-5">
      <Card.Img className="card-img" variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary" href={href}>
          Go to page
        </Button>
      </Card.Body>
    </Card>
  );
}
