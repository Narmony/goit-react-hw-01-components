import styles from './friendsList.module.css'

const FriendsListItem = ({avatar, name, isOnline, key}) =>{
  const status = isOnline ? styles.online : styles.offline;
   
return (
  
    <li class={styles.item} key ={key}>
  <span class={status}>{isOnline}</span>
  <img class={styles.avatar} src={avatar} alt={name} width="48" />
  <p class={styles.name}>{name}</p>
</li>
)

}



export default FriendsListItem;