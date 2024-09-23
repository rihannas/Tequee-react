/* eslint-disable react/prop-types */
import IconBtn from '../Buttons/IconBtn.jsx';
import Button from '../Buttons/Button.jsx';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay.jsx';
import Tag from '../Tag/Tag.jsx';
import styles from './Service.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Service = ({ props }) => {
  const name = 'hello';
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ProfileDisplay />
        <div className={styles.user_info}>
          <h4>{name}</h4>
          <p>
            <FontAwesomeIcon
              icon={faStar}
              className={styles.star_icon}
            />
            <span className={styles.rating}>3.5</span>
          </p>
        </div>
      </div>
      <div className={styles.tag_container}>
        <Tag tag={'Design'} />
        <Tag tag={'Web Design'} />
        <Tag tag={'Brand'} />
      </div>
      <div className={styles.mid}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className={styles.price_container}>
          <div className={styles.price}>{props.price}</div>
          <div className={styles.state}>hourly</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <IconBtn icon={faBookmark} />
        <Button text={'Details'} />
      </div>
    </div>
  );
};

export default Service;
