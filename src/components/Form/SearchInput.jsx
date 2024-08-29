import IconBtn from '../Buttons/IconBtn';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchInput.module.scss';

// eslint-disable-next-line react/prop-types
const SearchInput = ({ className }) => {
  return (
    <div className={`${styles.searchInput_container} ${className}`}>
      <input
        placeholder={'Search'}
        className={styles.input}
      />
      <IconBtn
        icon={faMagnifyingGlass}
        className={styles.searchBtn}
      />
    </div>
  );
};

export default SearchInput;
