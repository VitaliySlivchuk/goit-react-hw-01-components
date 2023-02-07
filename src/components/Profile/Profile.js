import PropTypes from 'prop-types';

import { Description } from './Description/Description';

import { Stats } from './Stats/Stats';
import { ProfileCss } from './Profile.styled';

import props from '../../json/user.json';

export const Profile = () => {
  return (
    <ProfileCss>
      <Description
        username={props.username}
        tag={props.tag}
        location={props.location}
        avatar={props.avatar}
        stats={props.stats}
      />
      <Stats stats={props.stats} />
    </ProfileCss>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
