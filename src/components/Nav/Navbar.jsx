import styles from './Navbar.module.scss';
import SearchInput from '../Form/SearchInput.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay.jsx';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItems}>
        <div className={styles.left}>TQ</div>
        <div className={styles.searchBar}>
          <SearchInput />
        </div>
        <div className={styles.right}>
          <div className={styles.notifications}>
            <span className={styles.span}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className={styles.span}>
              <FontAwesomeIcon icon={faBell} />
            </span>
          </div>

          <ProfileDisplay />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
