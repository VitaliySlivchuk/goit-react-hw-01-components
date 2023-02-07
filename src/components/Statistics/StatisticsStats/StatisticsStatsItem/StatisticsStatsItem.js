import { ItemCss } from 'components/Statistics/StatisticsStats/StatisticsStatsItem/StatisticsStatsItem.styled';

export const StatisticsStatsItem = ({ label, percentage }) => {
  return (
    <ItemCss className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </ItemCss>
  );
};
