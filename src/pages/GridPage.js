import { BigTitle, Heading1 } from "../components/Styled";
import PageStructure from "../components/PageStructure";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { RandomImage } from "../components/RandomImage";

const RATIOS = ["1:1", "3:4", "2:3", "4:5"];

export default function GridPage() {
  return (
    <PageStructure>
      <Container>
        <BigTitle>Bootstrap Grid</BigTitle>
        <Heading1>1. Flexible-size images gallery</Heading1>
        <Row style={{ display: "flex", alignItems: "stretch" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Col
              lg={3}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <RandomImage grow={i === 5} quality={i === 5 ? 30 : 15} />
              ))}
            </Col>
          ))}
        </Row>
        <br />
        <Heading1>2. Fixed-size images gallery</Heading1>

        <Row>
          {Array.from({ length: 4 }).map(() => (
            <Col lg={3} md={6}>
              {Array.from({ length: 6 }).map(() => (
                <div
                  style={{
                    paddingBottom: "100%",
                    width: "100%",
                    boxSizing: "border-box",
                    objectFit: "cover",
                    borderBottom: "solid white 24px",
                    position: "relative",
                  }}
                >
                  <RandomImage
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    quality={30}
                  />
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </PageStructure>
  );
}
