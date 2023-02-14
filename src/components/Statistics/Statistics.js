import PropTypes from 'prop-types';

import { StatisticsTitle } from 'components/Statistics/StatisticsTitle/StatisticsTitle';
import { StatisticsStats } from './StatisticsStats/StatisticsStats';

import { StatisticsCss } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ text, stats }) => {
  return (
    <StatisticsCss className="statistics">
      <StatisticsTitle text={text} />
      <StatisticsStats stats={stats} />
    </StatisticsCss>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
