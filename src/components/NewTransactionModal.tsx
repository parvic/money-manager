import Modal from "react-modal";
import * as S from "../styles/components/newTransactionModal";

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
      <S.Container>
        <h2>New Transaction</h2>
        <input type="text" placeholder="Title"/>
        <input type="number" placeholder="Amount"/>
        <input type="text" placeholder="Category"/>
        {/* <input type="date" name="date" id={Date()}/> */}
        <button type="submit">Register</button>
      </S.Container>
    </Modal>
  );
}