import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 300px;
  min-height: 300px;
  max-height: 400px;
  background-color: var(--grey-2);
  position: absolute;
  top: 210px;
  left: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: 0;
  border-radius: 5px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;
