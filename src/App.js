import { Navigate, Route, Routes } from 'react-router-dom';
import { Categories } from './pages/Categories/Categories';
import { Products } from './pages/Product/Products';
import { AdminLayout } from './components/AdminLayout/AdminLayout';
import './styles/globals.scss';
import { paths } from './shared/constants/routing';

function App() {
  return (
    <Routes>
      <Route path={paths.admin} element={<AdminLayout />}>
        <Route
          path={paths.admin}
          element={<Navigate to={paths.adminCategories} replace />}
        />
        <Route path={paths.adminCategories} element={<Categories />} />
        <Route path={paths.adminProducts} element={<Products />} />
        <Route
          path="*"
          element={<Navigate to={paths.adminCategories} replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
