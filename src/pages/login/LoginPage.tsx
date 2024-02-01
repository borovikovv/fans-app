import { ChangeEvent, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export default function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setLoginedUser } = useUser();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Provide email and password');
      return;
    }
    const user = {
      email,
      isOnline: true,
      id: 1,
      firstName: 'Albert',
      lastName: 'Einstein'
    };

    setLoginedUser(user);
    navigate('/user');
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError('');
  };

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <div className={styles.inputBlock}>
          <label className={styles.label}>Email</label>
          <input
            onChange={onChangeEmail}
            className={styles.input}
            name="email"
            type="text"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className={styles.inputBlock}>
          <label className={styles.label}>Password</label>
          <input
            onChange={onChangePassword}
            className={styles.input}
            name="password"
            type="password"
            required
            placeholder="Enter your Password"
          />
        </div>
        <button className={styles.btn} onClick={onSubmit}>
          Log In
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
