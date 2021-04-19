import PropTypes from 'prop-types';
import styles from './statistics.module.css';


const Statistics = ({title, stats}) => {
  return (
<section class={styles.statistics}>
    {title &&  <h2 class={styles.title}>{title}</h2>}
 
  <ul class={styles.list}>
      {stats.map((stat) =>(
        <li class={styles.item} key={stat.id}>
        <span class={styles.label}>{stat.label}</span>
        <span class={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
   
  </ul>
</section>

  );
}
Statistics.defaultProps= {
    title: "",
  }
  Statistics.propTypes= {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired,
};


export default Statistics;
