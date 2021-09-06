import { useState } from "react";
import Tabs from "@restart/ui/esm/Tabs";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { FlexDiv, Heading1, OutlinedBox } from "../Styled";
import SquareInFlexdiv from "./SquareInFlexdiv";
import useRadioGroup from "../../hooks/useRadioGroup";

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
        <SquareInFlexdiv flexDirection={value} />
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
    <Col md={6}>
      <OutlinedBox
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading1>flex-wrap</Heading1>
        <RadioGroup />
        <SquareInFlexdiv flexWrap={value} num={15} />
      </OutlinedBox>
    </Col>
  );
}

export function FlexGrow() {
  const { value, RadioGroup } = useRadioGroup("grow", [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]);
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
        <SquareInFlexdiv
          flexWrap={value}
          num={3}
          selectedSquareStyle={{ flexGrow: value }}
          squareStyle={{ flexGrow: 1 }}
          selectable
        />
      </OutlinedBox>
    </Col>
  );
}
