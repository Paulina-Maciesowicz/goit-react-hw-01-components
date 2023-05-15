import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendAllList } from './FriendList/FriendList';
import { TransactionsAllHistory } from './TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendAllList friends={friends} />
      <TransactionsAllHistory items={transactions} />
    </div>
  );
};
