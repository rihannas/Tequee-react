import Package from '../Package/Package';
import ProfileSnipt from '../Profile/ProfileSnipt';
import ServiceRatings from '../ServiceRatings/ServiceRatings';
import Faq from '../Faq/Faq';

import Thumbnail from '../Thumbnail/Thumbnail';
import styles from './ServiceDetails.module.scss';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {
  return (
    <div className={styles.serviceDetails}>
      <div className={styles.top}>
        <div className={styles.userInfo}>
          <p>Portfolio</p>
          <Thumbnail />
          <ProfileSnipt className={styles.profileSnipt} />
        </div>
        <div className={styles.serviceInfo}>
          <h1>Creative Content Writer for Engaging Blog Posts and Articles</h1>
          <div className={styles.second}>
            <span>
              <ServiceRatings />
            </span>
            <span>230 reviews</span>
            <span>5 orders in queque</span>
          </div>
          <Package />
        </div>
      </div>

      <div className={styles.middle}>
        <Faq />
        <Faq />
        <Faq />
      </div>

      <div>
        <ReviewSection />
      </div>
    </div>
  );
};

export default ServiceDetails;
