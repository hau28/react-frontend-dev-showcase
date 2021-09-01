import { TagContainer } from "../Styled";
import { CloseOutlined } from "@ant-design/icons";

export default function Tag({ title, onClick }) {
  return (
    <TagContainer
      onClick={(e) => {
        e.preventDefault();
        onClick(title);
      }}
    >
      <span>{title}</span>
      <CloseOutlined style={{ marginLeft: 4 }} />
    </TagContainer>
  );
}
