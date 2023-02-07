import { StatsEl } from './StatsEl/StatsEl';
import { StatsCss } from './Stats.styled';

export const Stats = ({ stats }) => {
  const statsArr = Object.entries(stats);
  return (
    <StatsCss className="stats">
      {statsArr.map(el => {
        return <StatsEl key={el[0]} lable={el[0]} quantity={el[1]} />;
      })}
    </StatsCss>
  );
};
