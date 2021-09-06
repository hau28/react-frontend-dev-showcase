import { colorPalette } from "../../constants/theme";
import { SquareDiv } from "../Styled";

export default function Square({ selected, num, style, selectable, onSelect }) {
  const primColor = selected ? colorPalette.green : colorPalette.red;
  const smokeColor = selected ? colorPalette.lightGreen : colorPalette.lightRed;
  return (
    <SquareDiv
      onClick={() => onSelect(num)}
      {...style}
      style={{
        minWidth: 50,
        minHeight: 50,
        border: `2px solid ${primColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: smokeColor,
        margin: "0 0.5rem 0.5rem 0 ",
        cursor: selectable ? "pointer" : "auto",
      }}
    >
      <span style={{ color: primColor, fontWeight: "bold", fontSize: 18 }}>
        {num}
      </span>
    </SquareDiv>
  );
}
