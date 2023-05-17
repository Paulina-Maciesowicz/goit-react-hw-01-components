import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <div className={css.friend}>
      <h2 className={css.friend__title}>Friend list</h2>
      <ul>
        {friends.map(friend => (
          <li className={css.friend__card} key={friend.id}>
            <span className={css.friend__status}> {friend.isOnline}</span>
            <img
              className={css.friend__avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.friend__name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
