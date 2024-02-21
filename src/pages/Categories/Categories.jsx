import { Table, Button } from '../../components';
import { useState } from 'react';
import { buttonSizes, modalModes } from '../../shared';
import { CategoriesFormModal } from './CategoriesFormModal';
import { getColumns } from './utils';
import styles from './Categories.module.scss';

export function Categories() {
  const [modal, setModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [modalMode, setModalMode] = useState(modalModes.create);

  const columns = getColumns({
    onEditButtonClick: (params) => {
      setCurrentCategory(params.row);
      setModalMode(modalModes.edit);
      setModal(true);
    },
    onDeleteButtonClick: () => {},
  });

  const rows = [
    {
      id: 1,
      name: 'Мебель',
    },
    {
      id: 2,
      name: 'Одежда',
    },
    {
      id: 3,
      name: 'Спорт',
    },
    {
      id: 4,
      name: 'Элетроника',
    },
    {
      id: 5,
      name: 'Здоровье',
    },
  ];

  return (
    <div className={styles.page}>
      <Button
        className={styles.button}
        onClick={() => {
          setModal(true);
          setModalMode(modalModes.create);
        }}
        size={buttonSizes.large}
      >
        Добавить
      </Button>
      <div className={styles.container}>
        <Table className={styles.table} columns={columns} rows={rows} />
      </div>
      <CategoriesFormModal
        close={() => {
          setModal(false);
          setCurrentCategory(null);
        }}
        open={modal}
        modalMode={modalMode}
        currentCategory={currentCategory}
      />
    </div>
  );
}
