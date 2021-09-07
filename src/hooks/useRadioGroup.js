import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function useRadioGroup(id, values, init) {
  const [value, setValue] = useState(values[init || 0]);
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const RadioGroup = function () {
    return (
      <>
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <ButtonGroup type="checkbox" onChange={handleChange}>
            {values.map((val, index) => (
              <ToggleButton
                id={`$tgl-${id}-${index + 1}`}
                value={val}
                variant="outline-primary"
                size="sm"
                type="radio"
                checked={value === val}
              >
                {val}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </>
    );
  };
  return {
    value,
    RadioGroup,
  };
}
