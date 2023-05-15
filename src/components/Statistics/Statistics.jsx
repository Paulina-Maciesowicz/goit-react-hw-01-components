import data from '../../data.json';
const favouriteStatistics = data;

const StatisticsList = ({ statistics }) => {
  return (
    <ul>
      {statistics.map(statistic => (
        <li>
          <span class="label">{statistic.label}</span>
          <span class="percentage">{statistic.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

export const Statistics = () => {
  return (
    <div>
      <section class="statistics">
        <h2 class="title">Upload stats</h2>
      </section>
      <StatisticsList statistics={favouriteStatistics} />
    </div>
  );
};
