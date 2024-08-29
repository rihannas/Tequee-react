import Review from './Review';
import ReviewFilter from './ReviewFilter';
import styles from './ReviewSection.module.scss';

const ReviewSection = () => {
  return (
    <div className={styles.reviewSection}>
      <h1>Review</h1>
      <div className={styles.bottom}>
        <div id='1'>
          <ReviewFilter />
        </div>
        {/* <div id={2}>
          <Review />
        </div> */}
      </div>
    </div>
  );
};

export default ReviewSection;
