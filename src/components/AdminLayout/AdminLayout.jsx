import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './AdminLayout.module.scss';
import { Header } from './Header/Header';

export function AdminLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
