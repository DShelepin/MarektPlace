import { ReactComponent as CategoriesIcon } from '../../../assets/icons/categories.svg';
import { ReactComponent as ProductsIcon } from '../../../assets/icons/products.svg';
import { paths } from '../../../shared/constants/routing';

export const links = [
  {
    name: 'Категории',
    to: paths.adminCategories,
    icon: CategoriesIcon,
  },
  {
    name: 'Товары',
    to: paths.adminProducts,
    icon: ProductsIcon,
  },
  
];

