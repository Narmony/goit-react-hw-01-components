import styles from './friendsList.module.css';

const FriendsListItem = ({ avatar, name, isOnline, key }) => {
    const status = isOnline ? styles.online : styles.offline;

    return (
        <li className={styles.item} key={key}>
            <span className={status}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

export default FriendsListItem;
