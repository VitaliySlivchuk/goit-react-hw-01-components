import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import AppCss from './App.styled';

export default function App() {
  return (
    <AppCss>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </AppCss>
  );
}
