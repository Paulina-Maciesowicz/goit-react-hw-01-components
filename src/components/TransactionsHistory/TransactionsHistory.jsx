// import { nanoid } from 'nanoid';
// import css from "TransactionHistory.module.css"
import PropTypes from 'prop-types';

export const TransactionsHistory = ({ items }) => {
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

TransactionsHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
