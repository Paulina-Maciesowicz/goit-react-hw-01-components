import friends from '../../friends.json';
const favouriteFriends = friends;

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li>
          {friend.avatar} {friend.name} {friend.isOnline}
        </li>
      ))}
    </ul>
  );
};

export const FriendAllList = () => {
  return (
    <div>
      <FriendsList statistics={favouriteFriends} />
    </div>
  );
};
