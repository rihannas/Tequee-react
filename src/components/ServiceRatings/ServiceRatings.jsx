import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './ServiceRatings.module.scss';

const ServiceRatings = () => {
  return (
    <div className={styles.serviceRatings}>
      <FontAwesomeIcon
        icon={faStar}
        className={styles.ratingStars}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={styles.ratingStars}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={styles.ratingStars}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={styles.ratingStars}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={styles.ratingStars}
      />
      4.2
    </div>
  );
};

export default ServiceRatings;
