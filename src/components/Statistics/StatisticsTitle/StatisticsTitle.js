import { Title } from 'components/Statistics/StatisticsTitle/StatisticsTitle.styled';

export const StatisticsTitle = ({ text }) => {
  return text && <Title className="title">{text}</Title>;
};
