import PropTypes from 'prop-types';

import {
  ProfileCss,
  ImgCss,
  DescriptionCss,
  NameCss,
  TagCss,
  LocationCss,
  StatsCss,
  StatsElCss,
  StatsLable,
  StatsQunty,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsArr = Object.entries(stats);
  return (
    <ProfileCss className="profile">
      <DescriptionCss className="description">
        <ImgCss src={avatar} alt={username} className="avatar" />
        <NameCss className="name">{username}</NameCss>
        <TagCss className="tag">@{tag}</TagCss>
        <LocationCss className="location">{location}</LocationCss>
      </DescriptionCss>

      <StatsCss className="stats">
        {statsArr.map(el => {
          return (
            <StatsElCss key={el[0]}>
              <StatsLable className="label">{el[0]}</StatsLable>
              <StatsQunty className="quantity">{el[1]}</StatsQunty>
            </StatsElCss>
          );
        })}
      </StatsCss>
    </ProfileCss>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
