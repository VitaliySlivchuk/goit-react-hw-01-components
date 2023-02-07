import PropTypes from 'prop-types';

import { StatisticsTitle } from 'components/Statistics/StatisticsTitle/StatisticsTitle';
import { StatisticsStats } from './StatisticsStats/StatisticsStats';
import data from '../../json/data.json';

import { StatisticsCss } from 'components/Statistics/Statistics.styled';

export const Statistics = () => {
  return (
    <StatisticsCss className="statistics">
      <StatisticsTitle text="Upload stats" />
      <StatisticsStats stats={data} />
    </StatisticsCss>
  );
};

StatisticsTitle.propTypes = {
  text: PropTypes.string,
};
