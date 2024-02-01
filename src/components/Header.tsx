import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useUser } from '../hooks/useUser';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { User } from '../types';

export default function Header() {
  const { user, removeUser } = useUser();
  const [storedUser, setUser] = useLocalStorage('user', {} as User);

  const logout = () => {
    setUser({} as User);
    removeUser();
  }

  return (
    <div className={styles.header}>
      <div className={styles.dsh}>
        <Link className={styles.btn} to="/">
          Dashboard
        </Link>
      </div>
      <div className={styles.login}>
        {user?.id ? (
          <Link onClick={logout} className={styles.btn} to="/">
            Logout
          </Link>
        ) : (
          <Link className={styles.btn} to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}