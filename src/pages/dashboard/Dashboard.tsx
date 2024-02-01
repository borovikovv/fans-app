import { useUser } from '../../hooks/useUser';
import styles from './dashbpard.module.css';

export default function Dashboard() {
  const { user } = useUser();
  return (
    <>
      {user?.id ? (
        <div className={styles.dsh}>
          <span>Hello, </span>
          <span>{user?.firstName}</span>
          <span>{user?.lastName}</span>
        </div>
      ) : (
        <div className={styles.dsh}>
          <span>Please, go to login page</span>
        </div>
      )}
    </>
  );
}