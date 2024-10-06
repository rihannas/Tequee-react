/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconBtn from '../Buttons/IconBtn.jsx';
import ButtonUsage from '../Buttons/ButtonUsage.jsx';

import styles from './Service.module.scss';

import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const SellerService = ({ props }) => {
  // const sellerId = props.seller.split('/').filter(Boolean).pop();
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
    <div className={styles.sellerservice_container}>
      <div className={styles.mid}>
        <h4>some title</h4>
        <p>
          Seeking a skilled developer to design, build, and maintain software
          applications. Must have experience in coding, debugging, and
          collaborating with cross-functional.
        </p>
        <div className={styles.price_container}>
          <div className={styles.price}>888</div>
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

export default SellerService;
