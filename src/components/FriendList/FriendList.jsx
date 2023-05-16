// import css from "FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
