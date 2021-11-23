import styled from "styled-components";
import { useTransfer } from "../../context/TransferContext";

const TransferButton = styled.button`
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  line-height: 32px;
  margin: 0;
  outline: none;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;
  &:hover {
    background: #f5f5f5;
  }
`;

const TransferController = () => {
  const {
    handleSelectedOne,
    handleSelectedTwo,
    listOneSelected,
    listTwoSelected,
  } = useTransfer();

  return (
    <div>
      <TransferButton
        onClick={handleSelectedOne}
        disabled={listOneSelected.length === 0}
      >
        &gt;
      </TransferButton>
      <TransferButton
        onClick={handleSelectedTwo}
        disabled={listTwoSelected.length === 0}
      >
        &lt;
      </TransferButton>
    </div>
  );
};

export default TransferController;
