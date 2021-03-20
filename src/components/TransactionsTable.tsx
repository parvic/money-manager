import { useEffect } from "react";
import { api } from "../services/api";
import * as S from "../styles/components/TransactionsTable";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
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
          <tr>
            <td>Website development</td>
            <td>$12.000</td>
            <td>Job</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td>$12.000</td>
            <td>Job</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td>$12.000</td>
            <td>Job</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td>$12.000</td>
            <td>Job</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}