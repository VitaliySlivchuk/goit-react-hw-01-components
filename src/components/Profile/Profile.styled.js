import styled from '@emotion/styled';

export const ProfileCss = styled.div`
  width: 400px;
  max-width: 100%;
  background: #fffbfb;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 87px;
`;

export const ImgCss = styled.img`
  width: 222px;
  height: 222px;
  background: url(android-chrome-192x192.png);
  border: 12px solid #fffbfb;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
`;

export const DescriptionCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
`;

export const NameCss = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 46px;
`;

export const TagCss = styled.p`
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;

  color: #aca6a8;
`;

export const LocationCss = styled.p`
  font-size: 18px;
`;

export const StatsElCss = styled.li`
  width: 150px;
  height: 100px;
  background: #e7dddd;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatsLable = styled.span`
  font-size: 18px;
  color: #aca6a8;
`;

export const StatsQunty = styled.span`
  font-size: 24px;
  color: #000000;
`;

export const StatsCss = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;
