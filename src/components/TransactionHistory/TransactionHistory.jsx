import PropTypes from 'prop-types';
import styles from './transaction.module.css'

const TransactionHistory = ({items}) => {
    return(
        <table className={styles.transactionHistory}>
  <thead className={styles.titleBlock}>
    <tr className={styles.list}>
      <th className={styles.titleItem}>Type</th>
      <th className={styles.titleItem}>Amount</th>
      <th className={styles.titleItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map((item)=>(
        <tr key={item.id} >
            <td className={styles.item}>{item.type}</td>
            <td className={styles.item}>{item.amount}</td>
            <td className={styles.item}>{item.currency}</td>
        </tr>
      ))}
   
  </tbody>
</table>
    )
}

TransactionHistory.propTypes= {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

export default TransactionHistory;