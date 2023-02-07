import PropTypes from 'prop-types';

import friends from '../../json/friends.json';

import { FriendListItem } from 'components/FriendsList/FriendListItem/FriendListItem';

import css from 'components/FriendsList/FriendsList.module.css';

export const FriendsList = () => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
