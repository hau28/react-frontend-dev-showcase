import { colorPalette } from "../../constants/theme";
import { SquareDiv } from "../Styled";

export default function Square({ selected, num, style, selectable, onSelect }) {
  const primColor = selected ? colorPalette.green : colorPalette.red;
  const smokeColor = selected ? colorPalette.lightGreen : colorPalette.lightRed;
  const randomAlign = () => {
    const ALIGNS = ["flex-start", "flex-end", "center"];
    const ranNum = Math.floor(Math.random() * 2);
    return ALIGNS[ranNum];
  };
  return (
    <SquareDiv
      onClick={() => onSelect(num)}
      {...style}
      style={{
        border: `2px solid ${primColor}`,
        display: "flex",
        alignItems: style?.randomAlign ? randomAlign() : "center",
        justifyContent: "center",
        backgroundColor: smokeColor,
        cursor: selectable ? "pointer" : "auto",
      }}
    >
      <span style={{ color: primColor, fontWeight: "bold", fontSize: 18 }}>
        {num}
      </span>
    </SquareDiv>
  );
}
