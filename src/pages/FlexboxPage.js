import { BigTitle, Heading1, OutlinedBox } from "../components/Styled";
import NavbarWrapper from "../components/NavbarWrapper";
import { Col, Container, Row } from "react-bootstrap";
import * as flexboxComponents from "../components/Layouts/Flexbox";

export default function FlexboxPage() {
  return (
    <NavbarWrapper>
      <Container>
        <BigTitle>Flexbox</BigTitle>
        <Row>
          {Object.values(flexboxComponents).map((Component) => (
            <Component />
          ))}
        </Row>
      </Container>
    </NavbarWrapper>
  );
}
