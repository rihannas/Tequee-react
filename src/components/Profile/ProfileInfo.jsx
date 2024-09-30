import styles from './ProfileInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStore,
  faLocationDot,
  faUserGroup,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import ProfileDisplay from '../../components/ProfileDisplay/ProfileDisplay';
import ButtonUsage from '../../components/Buttons/ButtonUsage';

const ProfileInfo = () => {
  return (
    <div className={styles.sellerpage_container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.top_left}>
            <ProfileDisplay className={styles.profile_img} />
            <div className={styles.buttons}>
              <ButtonUsage
                text={'message'}
                className={styles.messagebtn}
              />
              <ButtonUsage
                text={'Follow'}
                className={styles.followbtn}
              />
            </div>
          </div>
          <div className={styles.bottom_left}>
            <h3>FName LName</h3>
            <h5>username</h5>
            <p>software developer</p>
          </div>
        </div>
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
            <li>
              <FontAwesomeIcon
                icon={faCalendar}
                className={styles.icon}
              />
              Joined
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_about}>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea rerum
            dolorum vitae similique. Placeat adipisci voluptate, aut rem
            inventore laborum, fugiat asperiores soluta dignissimos, quaerat
            itaque dolores amet aspernatur dicta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
