import Modal from "react-modal";
import * as S from "../styles/components/newTransactionModal";

import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import closeImg from "../assets/close.svg";

Modal.setAppElement('#root');

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close-button" onClick={onRequestClose}>
        <img src={closeImg} alt="Close button"/>
      </button>
      <S.Container>
        <h2>New Transaction</h2>
        

        <input type="text" placeholder="Title"/>
        <input type="number" placeholder="Amount"/>
        <S.TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Income"/>
            <span>Income</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Outcome"/>
            <span>Expense</span>
          </button>
        </S.TransactionTypeContainer>
        <input type="text" placeholder="Category"/>
        {/* <input type="date" name="date" id={Date()}/> */}
        <button type="submit">Register</button>
      </S.Container>
    </Modal>
  );
}