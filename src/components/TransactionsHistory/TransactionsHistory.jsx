// import { nanoid } from 'nanoid';
import css from './TransactionsHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionsHistory = ({ items }) => {
  return (
    <ul className={css.transaction__history}>
      <thead className={css.headers}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <li key={item.id}>
          <table>
            <tbody className={css.info}>
              <tr>
                <td className={css.info__type}>{item.type}</td>
                <td className={css.info__amount}>{item.amount}</td>
                <td className={css.info__currency}>{item.currency}</td>
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
