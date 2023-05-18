import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsList = ({ statistics }) => {
  return (
    <ul>
      {statistics.map(statistic => (
        <li
          style={{ backgroundColor: getRandomHexColor() }}
          className={css.statistics__uploads}
          key={statistic.id}
        >
          <span className={css.statistics__label}>{statistic.label}</span>
          <span className={css.statistics__percentage}>
            {statistic.percentage}%
          </span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};
