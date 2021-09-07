import styled from "styled-components";
import { colorPalette } from "../constants/theme";

export const FullScreenContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  align-items: center;
  overflow: hidden;
`;

export const FullscreenPaper = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
  flex-direction: column;
  background-color: white;
  align-items: stretch;
  overflow: hidden;
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
  color: ${(props) => props.color};
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
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  border: solid;
  border-width: 2px;
  border-color: ${colorPalette.darkWhitesmoke};
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 1rem;
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
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: ${colorPalette.blue};
  color: white;
  padding: 0.25rem 0.5rem;
  border: solid 2px ${colorPalette.blue};
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
    color: ${colorPalette.blue};
  }
  &:focus {
    background-color: white;
    color: ${colorPalette.blue};
  }
`;

export const TagContainer = styled(Button)`
  padding: 0.25rem 0.5rem;
  border: solid 1px ${colorPalette.blue};
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
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
  overflow-wrap: break-word;
  overflow-x: visible;
  text-decoration: ${(props) => props.strike && "line-through"};
  opacity: ${(props) => props.strike && 0.25};
`;

export const IconButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2 ease;
  padding: 0;
  font-size: 1rem;
  &:hover {
    opacity: 0.5;
    color: ${(props) => props.hoverColor || "auto"};
  }
`;

export const HomePageBG = styled.div`
  background-image: url("https://i.ibb.co/Lp8t2bg/baptiste-q-CPD-TO0-Uv-Q-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`;

export const BigTitle = styled(Heading1)`
  margin: 1rem 0;
  font-weight: 600;
  font-size: 6rem;
  color: ${(props) => props.color || colorPalette.black};
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  min-height: ${(props) => props.minHeight};
`;

export const SquareDiv = styled.div`
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-basis: ${(props) => props.flexBasis};
  min-width: ${(props) => props.minWidth || "50px"};
  min-height: ${(props) => props.minHeight || "50px"};
  flex: ${(props) => props.flex};
  margin: ${(props) => props.margin || "0 0.5rem 0.5rem 0"};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
`;
