import Modal from "react-modal";
import * as S from "../styles/components/newTransactionModal";

import incomeImg from "../assets/income.svg";
import expenseImg from "../assets/outcome.svg";
import closeImg from "../assets/close.svg";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";


Modal.setAppElement('#root');

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionProps) {

  const [transaction, setTransaction] = useState({
    title: '',
    amount: 0,
    type: '',
    category: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setTitle(event.target.value);
    setTransaction({ ...transaction, [event.target.name]: event.target.value })
  }

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      transaction
     };
    
    api.post('transactions', transaction);
  }

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
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>New Transaction</h2>
        

        <input 
          name="title"
          type="text" 
          placeholder="Title"
          value={transaction.title}
          onChange={handleChange}
        />
        <input 
          name="amount"
          type="number" 
          placeholder="Amount"
          value={transaction.amount}
          onChange={handleChange}
        />
        
        <S.TransactionTypeContainer>
          <S.RadioboxButton
            type="button"
            onClick={() => {setTransaction({...transaction, type: 'income'})}}
            isActive={transaction.type === 'income'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income"/>
            <span>Income</span>
          </S.RadioboxButton>

          <S.RadioboxButton
            type="button"
            onClick={() => {setTransaction({...transaction, type: 'expense'})}}
            isActive={transaction.type === 'expense'}
            activeColor="red"
          >
            <img src={expenseImg} alt="Expense"/>
            <span>Expense</span>
          </S.RadioboxButton>
        </S.TransactionTypeContainer>
        
        <input 
          name="category"
          type="text" 
          placeholder="Category"
          value={transaction.category}
          onChange={handleChange}
        />
        <S.SubmitButton type="submit">
          Register
        </S.SubmitButton>
      </S.Container>
    </Modal>
  );
}