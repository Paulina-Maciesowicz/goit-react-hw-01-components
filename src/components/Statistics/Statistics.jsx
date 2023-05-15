const favouriteStatistics = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];
const StatisticsList = ({ statistics }) => {
  return (
    <ul>
      {statistics.map(statistic => (
        <li>{statistic.id > statistic.label > statistic.percentage}</li>
      ))}
    </ul>
  );
};
export const Statistics = () => {
  return (
    <div>
      <StatisticsList statistics={favouriteStatistics} />
    </div>
  );
};

export const Statistics2 = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{stats.label}.docx</span>
          <span class="percentage">{stats.percentage}4%</span>
        </li>
        <li class="item">
          <span class="label">{stats.label}.mp3</span>
          <span class="percentage">{stats.percentage}14%</span>
        </li>
        <li class="item">
          <span class="label">{stats.label}.pdf</span>
          <span class="percentage">{stats.percentage}41%</span>
        </li>
        <li class="item">
          <span class="label">{stats.label}.mp4</span>
          <span class="percentage">{stats.percentage}12%</span>
        </li>
      </ul>
    </section>
  );
};
