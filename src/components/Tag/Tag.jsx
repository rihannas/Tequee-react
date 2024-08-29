import styles from './Tag.module.scss';

// eslint-disable-next-line react/prop-types
const Tag = ({ tag }) => {
  return <div className={styles.container}>{tag}</div>;
};

export default Tag;
