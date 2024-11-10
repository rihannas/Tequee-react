// AuthPage.jsx
import { useState } from 'react';
import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, password, name });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log('Google sign in clicked');
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log('Forgot password clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          {!isLogin && (
            <div className={styles.inputGroup}>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your username'
                required
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
            />
          </div>

          {isLogin && (
            <button
              type='button'
              className={styles.forgotPassword}
              onClick={handleForgotPassword}
            >
              Forgot password?
            </button>
          )}

          <button
            type='submit'
            className={styles.submitButton}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <button
          type='button'
          className={styles.googleButton}
          onClick={handleGoogleSignIn}
        >
          <img
            src='/google-icon.svg'
            alt='Google'
            className={styles.googleIcon}
          />
          Continue with Google
        </button>

        <p className={styles.switchMode}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            type='button'
            className={styles.switchButton}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
