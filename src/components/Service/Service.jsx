/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconBtn from '../Buttons/IconBtn.jsx';
import ButtonUsage from '../Buttons/Button.jsx';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay.jsx';
import Tag from '../Tag/Tag.jsx';
import styles from './Service.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Service = ({ props }) => {
  const sellerId = props.seller.split('/').filter(Boolean).pop();
  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked', props.id);
    navigate(`/service/${props.id}`);
  };

  useEffect(() => {
    console.log('Service component rendered with props:', props);
  }, [props]);

  return (
    <div className={styles.container}>
      <Link to={`/seller/${sellerId}`}>
        <div className={styles.top}>
          <ProfileDisplay />
          <div className={styles.user_info}>
            <h4>{props.seller_info.username}</h4>
            <p>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.star_icon}
              />
              <span className={styles.rating}>
                {props.seller_info.average_rating}
              </span>
            </p>
          </div>
        </div>
      </Link>
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
        <ButtonUsage
          text={'Details'}
          onClick={handleDetailsClick}
        />
      </div>
    </div>
  );
};

export default Service;
