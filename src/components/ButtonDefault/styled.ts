import styled from "styled-components";

export const ButtonPlace = styled.button`
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.color ? props.color : "var(--primary-green)")};
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "var(--primary-green)")};
  padding: 3px 8px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.color ? props.color : "var(--primary-green)"};
    color: ${(props) =>
      props.color ? "var(--primary-green)" : "var(--primary-purple)"};
  }
`;
