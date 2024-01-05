import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: 1vh;
  transition: all 0.5s;
`;

export const SecondTitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

export const Dice = styled.div`
  background-color: #451f01;
  color: white;

  text-align: center;
  vertical-align: middle;
  font-size: 5rem;
  width: 10rem;
  height: 10rem;
  line-height: 10rem;
  border-radius: 10%;
`;
export const DiceBox = styled.div`
  font-size: 1.5rem;
  display: vertical;
  text-align: center;
  vertical-align: middle;
  margin: 10px;
  transition: transform 1s;
`;

export const Container = styled.div`
  padding: 10px;
  display: vertical;
  text-align: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-color: #e6b751;
  border-radius: 2vh;
  color: brown;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const AddDice = styled.button`
  background-color: #451f01;
  color: #e07a26;
  border: 1px solid #451f01;
  font-size: 1.5rem;
  border-radius: 2vh;
  transition: all 0.5s;
  width: 10vh;
  cursor: pointer;
  &:hover {
    background-color: #e07a26;
    color: #451f01;
  }
`;
export const DeleteDice = styled.button`
  background-color: #751d02;
  color: #e07a26;
  border: 1px solid #751d02;
  font-size: 1.5rem;
  border-radius: 1vh;
  padding: 5px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #e07a26;
    color: #751d02;
  }
`;
export const RollDice = styled.button`
  background-color: #b5902b;
  color: white;
  border: 1px solid #b5902b;
  font-size: 1.5rem;
  border-radius: 1vh;
  transition: all 0.5s;
  padding: 1vh;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #b5902b;
  }
`;
export const BonusLabel = styled.label`
  padding: 1vh;
  width: 40%;
  font-size: 1.2rem;
`;
export const Bonus = styled.input`
  background-color: #451f01;
  color: #e07a26;
  border: 1px solid #e07a26;
  border-radius: 1vh;
  font-size: 1.5rem;
  text-align: center;
  transition: all 0.5s;
  width: 40%;
  cursor: pointer;
`;
export const BonusRow = styled.div`
  background-color: #e07a26;
  color: #451f01;
  display: flex;
  border: 1px solid #451f01;
  justify-content: space-between;
  border-radius: 1vh;
  align-content: center;
  padding: 1vh;
  transition: all 0.5s;
`;

export const Total = styled.div`
  background-color: #e07a26;
  color: #451f01;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid #451f01;
  border-radius: 1vh;
  padding: 1vh;
  transition: all 0.5s;
  text-align: center;
  vertical-align: middle;
`;
