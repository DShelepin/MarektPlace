import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './AdminLayout.module.scss';

export function AdminLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
