import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendsList/FriendListItem/FriendListItem';

import css from 'components/FriendsList/FriendsList.module.css';

export const FriendsList = ({ friends }) => {
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
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
