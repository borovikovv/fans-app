import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useUser } from '../hooks/useUser';

export default function Header() {
  const { user, removeUser } = useUser();

  const logout = () => {
    removeUser();
  };

  return (
    <div className={styles.header}>
      <div className={styles.dsh}>
        <Link className={styles.btn} to="/">
          Dashboard
        </Link>
      </div>
      {user?.id && (
        <Link className={styles.btn} to="/user">
          User
        </Link>
      )}
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
