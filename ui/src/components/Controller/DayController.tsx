import { useState } from "react";
import styled from "styled-components";
import { useInventory } from "../../context/InventoryContext";

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const RangeValue = styled.span`
  width: 15%;

`;

const RangeInput = styled.input`
  -webkit-appearance: none;

  width: 60%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 12px;
  background: #e7e7e7;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ff5a5f;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ff5a5f;
    cursor: pointer;
  }
`;

const UpdateButton = styled.button`
  background: #4caf50;
  color: #fff;
  width: 15%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #46ae49;
  }
`;

const DayController = () => {
  const [dayPass, setDayPass] = useState(1);
  const { update } = useInventory();

  return (
    <RangeContainer>
      <RangeValue>Day Pass: {dayPass}</RangeValue>
      <RangeInput
        value={dayPass}
        onChange={({ target: { value } }) => setDayPass(Number(value))}
        type="range"
        min={1}
        max={15}
        step={1}
      />
      <UpdateButton onClick={() => update?.(dayPass)}>
        Pass
      </UpdateButton>
    </RangeContainer>
  );
};

export default DayController;
