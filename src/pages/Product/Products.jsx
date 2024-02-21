import { useState } from 'react';
import { Button, Input, Table } from '../../components';
import { buttonSizes, modalModes } from '../../shared';
import { ProductsFormModal } from './ProductsFormModal';
import { ProductsDeleteModal } from './ProductsDeleteModal';
import { getColumns } from './utils';
import styles from './Products.module.scss';

export function Products() {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [modalMode, setModalMode] = useState(modalModes.create);

  console.log(currentCategory);

  const columns = getColumns({
    onEditButtonClick: (params) => {
      setCurrentCategory(params.row);
      setModalMode(modalModes.edit);
      setModal(true);
    },
    onDeleteButtonClick: () => {
      setModalDelete(true);
    },
  });

  const rows = [
    {
      id: 1,
      name: 'Диван',
      category: 'Мебель',
      number: '2',
      price: '50000',
    },
    {
      id: 2,
      name: 'Футболка',
      category: 'Одежда',
      number: '3',
      price: '1800',
    },
    {
      id: 3,
      name: 'Мяч',
      category: 'Спорт',
      number: '1',
      price: '3500',
    },
    {
      id: 4,
      name: 'Смартфон',
      category: 'Электроника',
      number: '5',
      price: '64000',
    },
    {
      id: 5,
      name: 'Таблетки',
      category: 'Здоровье',
      number: '15',
      price: '120',
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.buttonContainer}>
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
        <div className={styles.inputContainer}>
          <div className={styles.selectWrapper}>
            <select placeholder="Категории" className={styles.select}>
              <option value="" disabled selected>
                Категории
              </option>
            </select>
          </div>
          <div className={styles.inputWrapper}>
            <Input placeholder="Поиск" className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Table className={styles.table} columns={columns} rows={rows} />
      </div>
      <ProductsFormModal
        close={() => {
          setModal(false);
          setCurrentCategory(null);
        }}
        open={modal}
        modalMode={modalMode}
        currentCategory={currentCategory}
      />
      <ProductsDeleteModal
        close={() => setModalDelete(false)}
        open={modalDelete}
      />
    </div>
  );
}
