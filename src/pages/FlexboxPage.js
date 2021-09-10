import { BigTitle, Heading1, OutlinedBox } from "../components/Styled";
import MainLayout from "../components/MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import * as flexboxComponents from "../components/FlexboxDemo/Flexbox";

export default function FlexboxPage() {
  return (
    <MainLayout>
      <Container>
        <BigTitle>Flexbox</BigTitle>
        <Row>
          {Object.values(flexboxComponents).map((Component) => (
            <Component />
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}
