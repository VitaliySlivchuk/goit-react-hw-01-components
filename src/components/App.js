import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../json/user.json';
import stats from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import AppCss from './App.styled';

export default function App() {
  return (
    <AppCss>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics text="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppCss>
  );
}
