import { Navigate, Route, Routes } from 'react-router-dom';
import { Categories } from './pages/Categories';
import { Products } from './pages/Products';
import { AdminLayout } from './components/AdminLayout/AdminLayout';
import './styles/globals.scss';
import { paths } from './shared/constants/routing';

function App() {
  return (
    <Routes>
      <Route path={paths.admin} element={<AdminLayout />}>
        <Route
          path={paths.admin}
          element={<Navigate to={paths.categories} replace />}
        />
        <Route path={paths.categories} element={<Categories />} />
        <Route path={paths.products} element={<Products />} />
        <Route path="*" element={<Navigate to={paths.categories} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
