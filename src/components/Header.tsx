import * as S from "../styles/components/Header";

import logoImg from "../assets/logo.svg";

export function Header() {
  return (
    <S.Container>
      <div>
        <img src={logoImg} alt="logo"/>
        <button type="button">New Transaction</button>
      </div>
    </S.Container>
  );
}