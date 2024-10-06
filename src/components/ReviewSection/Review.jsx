import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';
import Thumbnail from '../Thumbnail/Thumbnail';
import styles from './Review.module.scss';
import TopReview from './TopReview';

const Review = () => {
  return (
    <div className={styles.review}>
      <TopReview />
      <div className={styles.pic}>
        <Thumbnail className={styles.reviewThumbnail} />
      </div>
    </div>
  );
};

export default Review;
