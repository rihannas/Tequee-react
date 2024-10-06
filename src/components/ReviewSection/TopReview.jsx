import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';
import ServiceRatings from '../ServiceRatings/ServiceRatings';

import styles from './Review.module.scss';

const TopReview = () => {
  return (
    <div className={styles.topreview}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <ProfileDisplay />
          <span>Overcooked</span>
        </div>

        <div>
          <ServiceRatings />
        </div>
      </div>

      <div className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut
        corrupti reprehenderit. Natus iure repellat, libero sit numquam
        veritatis! Temporibus assumenda libero illum porro eum facere obcaecati
        amet tenetur mollitia?
      </div>
    </div>
  );
};

export default TopReview;
