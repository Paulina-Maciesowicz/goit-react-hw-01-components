// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

export const TransactionsHistory = ({ items }) => {
  return (
    <ul className={css.transaction__history}>
      <table>
        <thead className={css.headers}>
          <tr>
            <th className={css.headers__type}>Type</th>
            <th className={css.headers__amount}>Amount</th>
            <th className={css.headers__currency}>Currency</th>
          </tr>
        </thead>
      </table>
      {items.map(item => (
        <li key={item.id} className={css.info}>
          <table className={css.table}>
            <tbody className={css.tr}>
              <tr>
                <td className={css.type}>{item.type}</td>
                <td className={css.amount}>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  );
};

TransactionsHistory.propTypes = {
  history: PropTypes.shape({ items: PropTypes.arrayOf(PropTypes.string) }),
};
