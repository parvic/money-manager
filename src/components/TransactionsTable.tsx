import { useEffect, useState } from "react";
import { api } from "../services/api";
import * as S from "../styles/components/TransactionsTable";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
      // .then(response => console.log(response.data.transactions))
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)
                  }
                  </td>
                <td>{transaction.category}</td>
                <td>13/04/2021</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </S.Container>
  );
}