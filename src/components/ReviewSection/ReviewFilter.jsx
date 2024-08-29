import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

import styles from './ReviewFilter.module.scss';
import { red } from '@mui/material/colors';

const ReviewFilter = () => {
  return (
    <div className={styles.reviewFilter}>
      <h3>Reviews</h3>
      <p>6678 reviews for this service</p>
      <div className={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, index) => 5 - index).map((rating) => (
          <div
            key={rating}
            className={styles.ratingItem}
          >
            <span>{rating} STARS</span>
            <span>
              <LinearProgress
                variant='determinate'
                value={(rating / 5) * 100}
                style={{ width: '100%' }}
              />
            </span>
            <span>
              <progress
                value={0.5}
                className={styles.bar}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewFilter;
