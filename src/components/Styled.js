import styled from "styled-components";
import { colorPalette } from "../constants/theme";

export const FullScreenContainer = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 2rem 1rem;
  align-items: center;
  overflow-x: hidden;
`;

export const FullscreenPaper = styled.section`
  flex: 1;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: stretch;
  padding: 1rem 2rem;
`;

export const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: auto;
  margin: 0 0 1.25rem 0;
  text-align: ${(props) => props.textAlign || "auto"};
`;

export const Heading2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
  text-align: ${(props) => props.textAlign || "auto"};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: solid;
  border-width: 2px;
  border-color: whitesmoke;
  background-color: whitesmoke;
  outline: none;
  margin-bottom: 0.75rem;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: ${colorPalette.darkWhitesmoke};
  }
  &:focus {
    border-color: ${colorPalette.black};
  }
`;

export const OutlinedBox = styled.div`
  padding: 0.25rem 0.5rem;
  border: solid;
  border-width: 2px;
  border-color: ${colorPalette.darkWhitesmoke};
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  flex: 1;
  overflow: auto;
`;

export const PlainInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  margin-top: 2px;
  padding: 4px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin || "0 0 0 0"};
  padding: ${(props) => props.padding || "0 0 0 0"};
`;

export const Button = styled.button`
  background-color: ${colorPalette.black};
  color: white;
  padding: 0.25rem 0.5rem;
  border: solid 2px ${colorPalette.black};
  margin-right: 0.25rem;
  display: flex;
  align-items: center;
  outline: none;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  &:hover {
    background-color: white;
    color: ${colorPalette.black};
  }
  &:focus {
    background-color: white;
    color: ${colorPalette.black};
  }
`;

export const TagContainer = styled(Button)`
  padding: 0.25rem 0.5rem;
  border: solid 1px ${colorPalette.black};
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  font-weight: 400;
`;

export const CheckboxContainer = styled.button`
  border-radius: 0.25rem;
  padding: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin: 2px 0.5rem 0 0;
  border: solid 2px
    ${(props) =>
      props.checked ? colorPalette.lightGreen : colorPalette.darkWhitesmoke};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.checked ? colorPalette.veryLightGreen : "white"};
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colorPalette.darkWhitesmoke};
  margin-top: 0.25rem;
`;

export const Strikeable = styled.span`
  text-decoration: ${(props) => props.strike && "line-through"};
  opacity: ${(props) => props.strike && 0.25};
`;
