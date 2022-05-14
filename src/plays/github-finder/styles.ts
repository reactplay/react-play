import styled from "styled-components";

export const TextInput = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  font: 400 1.2rem Poppins;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;
  color: #fff;

  @media (max-width: 700px) {
    border-radius: 10px;
  }
`;

export const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  border: none;
  border-radius: 10px;
  height: 2.8rem;
  padding: 20px;
  font: 400 1rem Poppins;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  transform: translate(1100px, -55px);

  cursor: pointer;

  background: #000;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    border-radius: 10px;
    margin-top: 1rem;
  }
`;