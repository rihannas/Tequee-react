import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';
import styles from './Thumbnail.module.scss';
const Thumbnail = ({ className }) => {
  return (
    <div className={className}>
      <ProfileDisplay className={styles.thumbnail} />
    </div>
  );
};

export default Thumbnail;
