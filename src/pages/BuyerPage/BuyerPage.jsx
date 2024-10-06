import ProfileInfo from '../../components/Profile/ProfileInfo';
import TopReview from '../../components/ReviewSection/TopReview';
import styles from './BuyerPage.module.scss';

const BuyerPage = () => {
  return (
    <div className={styles.buyerpage_container}>
      <ProfileInfo />
      <h1>Buyer Reviews</h1>
      <div className={styles.review_container}>
        <TopReview />
      </div>
    </div>
  );
};

export default BuyerPage;
