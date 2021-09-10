import { useLayoutEffect, useState } from "react";
import { FlexDiv } from "../Styled";
import Square from "./Square";

export default function SquareInFlexdiv(props) {
  const [NUMS, setNUMS] = useState([1, 2, 3, 4, 5]);
  const [selected, setSelected] = useState(1);
  useLayoutEffect(() => {
    if (props.num) {
      const arr = [];
      for (let i = 0; i < props.num; i++) {
        arr.push(i + 1);
      }
      setNUMS(arr);
    }
  }, [props.num]);
  const handleSelect = (num) => {
    if (props.selectable) {
      setSelected(num);
    }
  };

  return (
    <FlexDiv {...props.divStyle}>
      {NUMS.map((num) => (
        <Square
          setSelected={setSelected}
          selected={props.selectable ? num === selected : false}
          num={num}
          style={
            props.selectable && num === selected
              ? props.selectedSquareStyle
              : props.squareStyle
          }
          selectable={props.selectable}
          onSelect={handleSelect}
        />
      ))}
    </FlexDiv>
  );
}
