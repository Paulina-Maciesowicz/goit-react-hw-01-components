// import { nanoid } from 'nanoid';
import css from './TransactionsHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionsHistory = ({ items }) => {
  return (
    <ul className={css.transaction__history}>
      <thead className={css.headers}>
        <tr className={css.headers__container}>
          <th className={css.headers__type}>Type</th>
          <th className={css.headers__type}>Amount</th>
          <th className={css.headers__type}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <li key={item.id} className={css.info}>
          <table className={css.table}>
            <tbody>
              <tr>
                <td>{item.type}</td>
                <td >{item.amount}</td>
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
  items: PropTypes.array.isRequired,
};
