import { useUser } from './../../hooks/useUser';
import clx from 'classnames';
import styles from './user.module.css';

export default function UserPage() {
  const { user } = useUser();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.field}>
          <span>{user?.firstName}</span>
          <span className={styles.lastName}>{user?.lastName}</span>
        </div>
        <p className={styles.field}>{user?.email}</p>
        <p className={clx(user?.isOnline ? styles.online : styles.offline, styles.field)}>
          {user?.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}
