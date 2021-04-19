import PropTypes from 'prop-types';
import styles from './transaction.module.css'

const TransactionHistory = ({items}) => {
    return(
        <table class={styles.transactionHistory}>
  <thead class={styles.titleBlock}>
    <tr class={styles.list}>
      <th class={styles.titleItem}>Type</th>
      <th class={styles.titleItem}>Amount</th>
      <th class={styles.titleItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map((item)=>(
        <tr key={item.id} >
            <td class={styles.item}>{item.type}</td>
            <td class={styles.item}>{item.amount}</td>
            <td class={styles.item}>{item.currency}</td>
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