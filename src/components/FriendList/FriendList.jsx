// import css from "FriendList.module.css"
import friends from '../../friends.json';
const favouriteFriends = friends;

const FriendsList = ({ friends }) => {
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

export const FriendAllList = () => {
  return (
    <div>
      <FriendsList friends={favouriteFriends} />
    </div>
  );
};
