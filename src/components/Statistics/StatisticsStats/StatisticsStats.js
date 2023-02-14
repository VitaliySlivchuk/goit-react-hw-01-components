import PropTypes from 'prop-types';

import { StatisticsStatsItem } from './StatisticsStatsItem/StatisticsStatsItem';

import { ListCss } from 'components/Statistics/StatisticsStats/StatisticsStats.styled';

export const StatisticsStats = ({ stats }) => {
  return (
    <ListCss className="stat-list">
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatisticsStatsItem key={id} label={label} percentage={percentage} />
        );
      })}
    </ListCss>
  );
};

StatisticsStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
