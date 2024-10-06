import styles from './SellerPage.module.scss';

import ProfileInfo from '../../components/Profile/ProfileInfo';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import TopReview from '../../components/ReviewSection/TopReview';
import SellerService from '../../components/Service/SellerService';

const SellerPage = () => {
  return (
    <div className={styles.sellerpage_container}>
      <ProfileInfo />
      <div className={styles.middle}>
        <Thumbnail className={styles.Thumbnail} />

        <div className={styles.review_container}>
          <h3>Top Reviews</h3>
          <TopReview />
          <TopReview />
        </div>
      </div>

      <h1>Seller services</h1>
      <div className={styles.seller_services}>
        <SellerService />
        <SellerService />
        <SellerService />
      </div>
    </div>
  );
};

export default SellerPage;
