import styles from './SellerPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStore,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

const SellerPage = () => {
  return (
    <div className={styles.sellerpage_container}>
      <div className={styles.top}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h4>status</h4>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.icon}
              />
              Ratings
            </li>
            <li>
              <FontAwesomeIcon
                icon={faStore}
                className={styles.icon}
              />
              Total orders
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.icon}
              />
              Location
            </li>
            <li>
              <FontAwesomeIcon
                icon={faUserGroup}
                className={styles.icon}
              />
              Followed by
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>f</div>
    </div>
  );
};

export default SellerPage;
