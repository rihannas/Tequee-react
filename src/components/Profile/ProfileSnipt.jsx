import ButtonUsage from '../Buttons/ButtonUsage';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faStar,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileSnipt.module.scss';

function profileSnipt({ className }) {
  return (
    <div className={`${styles.profileSnipt} ${className}`}>
      <div className={styles.top}>
        <div className={styles.profileInfo}>
          <ProfileDisplay />
          <span className={styles.username}>Ian</span>
        </div>
        <div className={styles.button}>
          <ButtonUsage
            text={'Follow'}
            className={styles.followBtn}
          />
        </div>
      </div>
      <div className={styles.lineBreak}></div>
      <div className={styles.bottom}>
        <div>
          <FontAwesomeIcon
            icon={faStar}
            className={styles.ratingStars}
          />
          <span>4.3</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSuitcase}
            className={styles.ratingStars}
          />
          <span>software engineer</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.ratingStars}
          />
          <span>NY, USA</span>
        </div>
      </div>
    </div>
  );
}

export default profileSnipt;
