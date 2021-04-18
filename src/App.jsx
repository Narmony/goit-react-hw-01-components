import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendsList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
 
  return (
    <div className="App">
   <Profile 
   avatar={user.avatar} 
   name = {user.name}
   tag = {user.tag} 
   location={user.location}
   stats = {user.stats}/>
   <Statistics title="Upload stats" stats={statisticalData} />
   <FriendsList friends = {friends}/>
   <TransactionHistory items = {transactions}/>
    </div>
  );
}



export default App;
