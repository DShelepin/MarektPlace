import { useLocation } from 'react-router-dom';
import { pathNames } from '../../../shared/constants/routing';
import styles from './Header.module.scss';

export function Header() {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{pathNames[location.pathname]}</h2>
      <div className={styles.content}>
        <h2 className={styles.title}>Админ</h2>
        <button className={styles.button}>Выход</button>
      </div>
    </div>
  );
}
