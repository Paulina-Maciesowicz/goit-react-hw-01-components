import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import data from '../../data.json';
const favouriteStatistics = data;

const StatisticsList = ({ statistics }) => {
  return (
    <ul className={css.statistics__box}>
      {statistics.map(statistic => (
        <li className={css.statistics__uploads} key={statistic.id}>
          <span className={css.statistics__label}>{statistic.label}</span>
          <span className={css.statistics__percentage}>
            {statistic.percentage}%
          </span>
        </li>
      ))}
    </ul>
  );
};

export const Statistics = () => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Upload stats</h2>
      <StatisticsList statistics={favouriteStatistics} />
    </div>
  );
};

StatisticsList.propTypes = {
  statistics: PropTypes.array.isRequired,
};
