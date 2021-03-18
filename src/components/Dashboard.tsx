import * as S from "../styles/components/Dashboard";
import { Summary } from "./Summary";
import { TransactionsTable } from "./TransactionsTable";

export function Dashboard() {
  return(
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  );
}