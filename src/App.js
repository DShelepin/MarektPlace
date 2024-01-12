import { Navigate, Route, Routes } from 'react-router-dom';
import { Categories } from './pages/Categories';
import { Products } from './pages/Products';
import { AdminLayout } from './components/AdminLayout/AdminLayout';
import './styles/globals.scss';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          path="/admin"
          element={<Navigate to="/admin/categories" replace />}
        />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="*" element={<Navigate to="/admin/categories" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
