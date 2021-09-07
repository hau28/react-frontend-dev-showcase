import { BigTitle, Heading1, OutlinedBox } from "../components/Styled";
import PageStructure from "../components/PageStructure";
import { Col, Container, Row } from "react-bootstrap";
import * as flexboxComponents from "../components/Layouts/Flexbox";

export default function FlexboxPage() {
  return (
    <PageStructure>
      <Container>
        <BigTitle>Flexbox</BigTitle>
        <Row>
          {Object.values(flexboxComponents).map((Component) => (
            <Component />
          ))}
        </Row>
      </Container>
    </PageStructure>
  );
}
