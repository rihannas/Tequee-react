import styles from './Button.module.scss';

// const Button = ({ className, text }) => {
//   return <button className={`${styles.btn} ${className}`}>{text}</button>;
// };

// export default Button;

import Button from '@mui/material/Button';

function ButtonUsage({ className, text }) {
  return (
    <Button
      variant='contained'
      className={`${styles.btn} ${className}`}
    >
      {text}
    </Button>
  );
}

export default ButtonUsage;
