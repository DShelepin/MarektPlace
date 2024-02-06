import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as FixIcon } from '../assets/icons/pencil.svg';
import { ReactComponent as Cross } from '../assets/icons/cross.svg';
import styles from './Categories.module.scss';
import { Input, Table, Button } from '../components';
import { useState } from 'react';
import { buttonSizes, buttonVariants, modalModes } from '../shared';
import Modal from '../components/Modal/Modal';

export function Categories() {
  const [modal, setModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [modalMode, setModalMode] = useState(modalModes.create);

  console.log(currentCategory);

  const columns = [
    {
      key: 'name',
      label: 'Название',
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
              setCurrentCategory(params.row);
              setModalMode(modalModes.edit);
              setModal(true);
            }}
          />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
  ];

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
        onClick={() => setModal(true)}
        size={buttonSizes.large}
      >
        Добавить
      </Button>
      <div className={styles.container}>
        <Table className={styles.table} columns={columns} rows={rows} />
      </div>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className={styles.modalHeader}>
          <h2>Создание категории</h2>
          <Cross
            className={styles.modalCrossButton}
            onClick={() => setModal(false)}
          />
        </div>
        <form className={styles.modalForm}>
          <div className={styles.modalInputWrapper}>
            <label htmlFor="name">Название</label>
            <Input id="name" />
          </div>
          <div className={styles.modalInputWrapper}>
            <label htmlFor="img">Картинка(URL)</label>
            <Input id="img" />
          </div>
          <div className={styles.modalButtonContainer}>
            <Button
              variant={buttonVariants.secondary}
              onClick={() => setModal(false)}
              type="button"
            >
              Отмена
            </Button>
            <Button>Создать</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
