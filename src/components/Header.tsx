import * as S from "../styles/components/Header";

import logoImg from "../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps) {
  return (
    <S.Container>
      <div>
        <img src={logoImg} alt="logo"/>
        <button type="button" onClick={onOpenNewTransactionModal}>New Transaction</button>
      </div>
    </S.Container>
  );
}