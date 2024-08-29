import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconBtn.module.scss';

// eslint-disable-next-line react/prop-types
const IconBtn = ({ icon, className }) => {
  return (
    <button className={`${styles.bm} ${className}`}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
      />
    </button>
  );
};

export default IconBtn;
