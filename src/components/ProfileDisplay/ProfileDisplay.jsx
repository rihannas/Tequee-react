import pic from '../../assets/images/profile.jpg';
import styles from './ProfileDisplay.module.scss';

const ProfileDisplay = ({ className }) => {
  return (
    <div className={styles.img_container}>
      <img
        src={pic}
        alt='display image'
        className={`${styles.dp} ${className}`}
      />
    </div>
  );
};

export default ProfileDisplay;
