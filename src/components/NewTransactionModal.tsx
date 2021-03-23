import Modal from "react-modal";
import * as S from "../styles/components/newTransactionModal";

import incomeImg from "../assets/income.svg";
import expenseImg from "../assets/outcome.svg";
import closeImg from "../assets/close.svg";
import { useState } from "react";

Modal.setAppElement('#root');

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionProps) {

  const [transactionType, setTransactionType] = useState('');

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
          <S.RadioboxButton
            type="button"
            onClick={() => {setTransactionType('income')}}
            isActive={transactionType === 'income'}
          >
            <img src={incomeImg} alt="Income"/>
            <span>Income</span>
          </S.RadioboxButton>

          <S.RadioboxButton
            type="button"
            onClick={() => {setTransactionType('expense')}}
            isActive={transactionType === 'expense'}
          >
            <img src={expenseImg} alt="Expense"/>
            <span>Expense</span>
          </S.RadioboxButton>
        </S.TransactionTypeContainer>
        
        <input type="text" placeholder="Category"/>
        <S.SubmitButton type="submit">
          Register
        </S.SubmitButton>
      </S.Container>
    </Modal>
  );
}