const FriendsListItem = ({avatar, name, isOnline, key}) =>{
return (
    <li class="item" key ={key}>
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name}</p>
</li>
)

}



export default FriendsListItem;