import ProfileSnipt from '../Profile/ProfileSnipt';
import ServiceRatings from '../ServiceRatings/ServiceRatings';
import ButtonUsage from '../Buttons/ButtonUsage';

import Thumbnail from '../Thumbnail/Thumbnail';
import styles from './ServiceDetails.module.scss';

// eslint-disable-next-line react/prop-types
const ServiceDetails = ({ service }) => {
  return (
    <div className={styles.serviceDetails}>
      <div className={styles.top}>
        <div className={styles.userInfo}>
          <p>Portfolio</p>
          <Thumbnail />
          {/* so props must be sent here too?? */}
          <ProfileSnipt className={styles.profileSnipt} />
        </div>
        <div className={styles.serviceInfo}>
          <h1>{service.title}</h1>
          <div className={styles.second}>
            {/* so props must be sent here too?? */}
            <span>
              <ServiceRatings />
            </span>
            <span>230 reviews</span>
            <span>5 orders in queque</span>
          </div>
          {/* so props must be sent here too?? */}
          <h3 className={styles.price}>
            Price
            <span className={styles.value}> $40</span>
          </h3>
          <h3 className={styles.header}>Description</h3>
          <p className={styles.desc}>{service.description}</p>
          <h3 className={styles.header}>Duration</h3>
          <p className={styles.duration}>
            Flexible, depending on project scope and requirements.
          </p>

          <div className={styles.btn_container}>
            <ButtonUsage
              text={'Order'}
              className={styles.btn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
