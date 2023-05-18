import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <div className="containerApp">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={data} />
        <FriendsList friends={friends} />
      </div>
      <TransactionsHistory items={transactions} />
    </div>
  );
};
