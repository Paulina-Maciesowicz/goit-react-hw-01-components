import { StatisticsList } from './StatisticsList';
import data from '../../data/data.json';
import css from './Statistics.module.css';
// const favouriteStatistics = data;

export const Statistics = () => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Upload stats</h2>
      <StatisticsList statistics={data} />
    </div>
  );
};