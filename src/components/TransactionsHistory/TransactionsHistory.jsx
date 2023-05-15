import { nanoid } from 'nanoid';
import items from '../../transactions.json';
const transactionHistory = items;

const TransactionsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <table class="transaction-history">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="type">{item.type}</td>
                <td class="amount">{item.amount}</td>
                <td class="currency">{item.currency}</td>
              </tr>
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  );
};

export const TransactionsAllHistory = () => {
  return (
    <div>
      <TransactionsList items={transactionHistory} />
    </div>
  );
};


  

  
