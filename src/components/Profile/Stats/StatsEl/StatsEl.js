import { StatsElCss, StatsLable } from './StatsEl.styled';

export const StatsEl = ({ lable, quantity }) => {
  // console.log(props);
  return (
    <StatsElCss>
      <StatsLable className="label">{lable}</StatsLable>
      <span className="quantity">{quantity}</span>
    </StatsElCss>
  );
};
