import { CheckOutlined } from "@ant-design/icons";
import { colorPalette } from "../../constants/theme";
import { CheckboxContainer, CheckMark } from "../Styled";

export default function CheckBox({ checked, onClick }) {
  return (
    <CheckboxContainer checked={checked} onClick={onClick}>
      {!!checked && (
        <CheckOutlined style={{ color: colorPalette.lightGreen }} />
      )}
    </CheckboxContainer>
  );
}
