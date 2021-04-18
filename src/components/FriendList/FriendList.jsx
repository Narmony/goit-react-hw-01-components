import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

const FriendsList = ({friends}) => {
  return (
<ul class="friend-list">
{friends.map((friend) =>(
    <FriendsListItem 
    key = {friend.id}
    avatar={friend.avatar}
    name ={friend.name}
    isOnline = {friend.isOnline}/>
     ))}
</ul>

  );
}

FriendsList.defaultProps= {
    avatar: "https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png",
  }
  FriendsList.propTypes= {
    
    friends: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};

export default FriendsList;