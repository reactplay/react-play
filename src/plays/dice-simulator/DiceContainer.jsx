import {
  Row,
  Container,
  SecondTitle,
  Title,
  AddDice,
  DeleteDice,
  RollDice,
  Dice,
  DiceBox,
  BonusLabel,
  Bonus,
  BonusRow,
  Total
} from './styles';
import { useEffect, useState } from 'react';

export default function DiceContainer() {
  const [data, setData] = useState({
    diceAmount: 1,
    total: 1,
    bonus: 0,
    dices: [[6, 1]]
  });
  const [check, setCheck] = useState(true);

  useEffect(() => {
    let valor = 0;
    let i = 0;
    while (i < data.dices.length) {
      valor += data.dices[i][1];
      i++;
    }
    valor += data.bonus;
    setData((prevData) => {
      return { ...prevData, diceAmount: prevData.dices.length, total: valor };
    });
  }, [check]);

  const update = () => {
    if (check) setCheck(false);
    else setCheck(true);
  };

  const addDice = (size) => {
    let dicesAux = data.dices;
    dicesAux.push([size, 1]);
    dicesAux.sort(compareDice);
    setData((prevData) => {
      return { ...prevData, dices: dicesAux };
    });
    update();
  };

  const compareDice = (a, b) => {
    let output = 0;
    if (a[0] < b[0]) output = -1;
    else if (a[0] > b[0]) output = 1;

    return output;
  };

  const removeDice = (i) => {
    if (i < data.diceAmount) {
      let dicesAux = data.dices;
      dicesAux.splice(i, 1);
      setData((prevData) => {
        return { ...prevData, dices: dicesAux };
      });
      update();
    }
  };

  const rollAll = () => {
    let dicesAux = data.dices;
    let i = 0;
    while (i < data.dices.length) {
      dicesAux[i][1] = Math.floor(Math.random() * dicesAux[i][0]) + 1;
      i++;
    }
    setData((prevData) => {
      return { ...prevData, dices: dicesAux };
    });
    update();
  };

  const rollDice = (i) => {
    let dicesAux = data.dices;
    dicesAux[i][1] = Math.floor(Math.random() * dicesAux[i][0]) + 1;
    setData((prevData) => {
      return { ...prevData, dices: dicesAux };
    });
    update();
  };

  const bonus = (value) => {
    setData((prevData) => {
      return { ...prevData, bonus: value };
    });
    update();
  };

  const totalString = () => {
    let dicesAux = [];
    let i = 0;
    while (i < data.dices.length) {
      dicesAux.push(data.dices[i][1]);
      i++;
    }
    let stringMsg = dicesAux.join(' + ') + ' + ' + data.bonus + ' = ' + data.total;

    return stringMsg;
  };

  return (
    <Container>
      <Title>Dice Simulator</Title>

      <SecondTitle>Add dice</SecondTitle>
      <Row>
        <AddDice onClick={() => addDice(4)}>D4</AddDice>
        <AddDice onClick={() => addDice(6)}>D6</AddDice>
        <AddDice onClick={() => addDice(8)}>D8</AddDice>
        <AddDice onClick={() => addDice(10)}>D10</AddDice>
        <AddDice onClick={() => addDice(12)}>D12</AddDice>
        <AddDice onClick={() => addDice(20)}>D20</AddDice>
        <AddDice onClick={() => addDice(100)}>D100</AddDice>
      </Row>

      <SecondTitle>Your Dices</SecondTitle>
      <Row>
        {data.dices.map((dice, index) => (
          <DiceBox>
            <p>D{dice[0]}</p>
            <Dice>{dice[1]}</Dice>
            <Row>
              <RollDice onClick={() => rollDice(index)}>Roll</RollDice>
              <DeleteDice onClick={() => removeDice(index)}>Delete</DeleteDice>
            </Row>
          </DiceBox>
        ))}
      </Row>

      <RollDice onClick={() => rollAll()}>Roll All</RollDice>

      <Row>
        <BonusRow>
          <BonusLabel for="bonus">Bonus: </BonusLabel>
          <Bonus
            id="bonus"
            max={20}
            min={-20}
            name="bonus"
            type="number"
            value={data.bonus}
            onChange={(e) => bonus(parseInt(e.target.value))}
          />
        </BonusRow>
        <Total>Your total score: {totalString()}</Total>
      </Row>
    </Container>
  );
}
