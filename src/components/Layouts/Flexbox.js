import { useState } from "react";
import Tabs from "@restart/ui/esm/Tabs";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { FlexDiv, Heading1, OutlinedBox } from "../Styled";
import SquareInFlexdiv from "./SquareInFlexdiv";
import useRadioGroup from "../../hooks/useRadioGroup";
import { colorPalette } from "../../constants/theme";

export function FlexDirection() {
  const { value, RadioGroup } = useRadioGroup("direction", [
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]);
  return (
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading1>flex-direction</Heading1>
        <RadioGroup />
        <SquareInFlexdiv divStyle={{ flexDirection: value }} />
      </OutlinedBox>
    </Col>
  );
}

export function JustifyContent() {
  const { value, RadioGroup } = useRadioGroup("justify", [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]);
  return (
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Heading1>justify-content</Heading1>
        <RadioGroup />
        <SquareInFlexdiv divStyle={{ justifyContent: value }} num={4} />
      </OutlinedBox>
    </Col>
  );
}

export function FlexGrow() {
  const { value, RadioGroup } = useRadioGroup(
    "grow",
    ["1", "2", "3", "4", "5", "6"],
    1
  );
  return (
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Heading1>flex-grow</Heading1>
        <RadioGroup />
        <p>
          *Others' value is <b>2</b>
        </p>

        <SquareInFlexdiv
          num={3}
          selectedSquareStyle={{ flexGrow: value }}
          squareStyle={{ flexGrow: 2 }}
          selectable
        />
      </OutlinedBox>
    </Col>
  );
}

export function FlexShrink() {
  const { value, RadioGroup } = useRadioGroup(
    "shrink",
    ["1", "2", "3", "4", "5", "6"],
    1
  );
  return (
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Heading1>flex-shrink, flex-basis</Heading1>
        <RadioGroup />
        <p>
          *Div width: <b>300px</b>, Square flex basis: <b>100px</b>
        </p>

        <SquareInFlexdiv
          divStyle={{
            width: "300px",
          }}
          num={4}
          selectedSquareStyle={{
            flexShrink: value,
            minWidth: "1px",
            flexBasis: "100px",
          }}
          squareStyle={{ minWidth: "1px", flexBasis: "100px" }}
          selectable
        />
      </OutlinedBox>
    </Col>
  );
}

export function AlignItems() {
  const { value, RadioGroup } = useRadioGroup("align", [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
  ]);

  return (
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Heading1>align-items</Heading1>
        <RadioGroup />
        {value === "baseline" && (
          <p>*Square text's alignments are randomized to test the baseline</p>
        )}
        <SquareInFlexdiv
          divStyle={{
            alignItems: value,
            backgroundColor: colorPalette.lightGreen,
            border: `solid 2px ${colorPalette.green}`,
            minHeight: "100px",
          }}
          squareStyle={{
            randomAlign: value === "baseline",
            margin: "0 0.5rem 0 0",
          }}
          num={4}
        />
      </OutlinedBox>
    </Col>
  );
}

export function AlignSelf() {
  const { value, RadioGroup } = useRadioGroup("alignself", [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ]);

  return (
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Heading1>align-self</Heading1>
        <RadioGroup />
        <SquareInFlexdiv
          selectable
          divStyle={{
            alignItems: "flex-start",
            backgroundColor: colorPalette.lightGreen,
            border: `solid 2px ${colorPalette.green}`,
            minHeight: "100px",
          }}
          squareStyle={{
            margin: "0 0.5rem 0 0",
          }}
          selectedSquareStyle={{
            alignSelf: value,
            margin: "0 0.5rem 0 0",
          }}
          num={4}
        />
      </OutlinedBox>
    </Col>
  );
}

export function FlexWrap() {
  const { value, RadioGroup } = useRadioGroup("wrap", [
    "nowrap",
    "wrap",
    "wrap-reverse",
  ]);
  return (
    <Col md={12}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading1>flex-wrap</Heading1>
        <RadioGroup />
        <SquareInFlexdiv divStyle={{ flexWrap: value }} num={30} />
      </OutlinedBox>
    </Col>
  );
}
