import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as FixIcon } from '../../assets/icons/pencil.svg';
import styles from './Products.module.scss';

export function getColumns({ onEditButtonClick, onDeleteButtonClick }) {
  return [
    {
      key: 'name',
      label: 'Название',
    },
    {
      key: 'category',
      label: 'Категории',
    },
    {
      key: 'number',
      label: 'Количество',
    },
    {
      key: 'price',
      label: 'Цена',
    },
    {
      key: 'actions',
      label: '',
      className: styles.tableActionsColumn,
      renderCell: (params) => (
        <div className={styles.actions}>
          <FixIcon
            className={styles.icon}
            onClick={() => {
              onEditButtonClick(params);
            }}
          />
          <DeleteIcon
            className={styles.icon}
            onClick={() => {
              onDeleteButtonClick(params);
            }}
          />
        </div>
      ),
    },
  ];
}
