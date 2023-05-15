export const Statistics = ({ title, stats, }) => {
  return (
    <section class="statistics">
      <h2 class="title">title: {title}</h2>

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
