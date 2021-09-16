import { TagContainer } from "../Styled";
import { CloseOutlined } from "@ant-design/icons";

export default function Tag({ title, onClick, lock, dataTestid }) {
  return (
    <TagContainer
      onClick={(e) => {
        if (!lock) {
          e.preventDefault();
          onClick(title);
        }
      }}
    >
      <span data-testid={dataTestid}>{title}</span>
      {!lock && <CloseOutlined style={{ marginLeft: 4 }} />}
    </TagContainer>
  );
}
