import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as FixIcon } from '../assets/icons/pencil.svg';
import styles from './Categories.module.scss';
import { Table } from '../components';

export function Categories() {
  const columns = [
    {
      key: 'name',
      label: 'Название',
    },
    {
      key: 'actions',
      label: '',
      className: styles.tableActionsColumn,
    },
  ];

  const rows = [
    {
      name: 'Мебель',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Одежда',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Спорт',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'wer',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'wer',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'rew',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Мебель',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Одежда',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Спорт',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Мебель',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Одежда',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Спорт',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Мебель',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Одежда',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Спорт',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Мебель',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Одежда',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Спорт',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Мебель',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Одежда',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Спорт',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Элетроника',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
    {
      name: 'Здоровье',
      actions: (
        <div className={styles.actions}>
          <FixIcon className={styles.icon} />
          <DeleteIcon className={styles.icon} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <button className={styles.button}>Добавить</button>
      <div className={styles.container}>
        <Table className={styles.table} columns={columns} rows={rows}  />
        {/* <h2 className={styles.title}>Название</h2> */}
        {/* <div className={styles.content}> */}
        {/* <div>Мебель</div>
          <div>
            <FixIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className={styles.content}>
          <div>Одежда</div>
          <div>
            <FixIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className={styles.content}>
          <div>Спорт</div>
          <div>
            <FixIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className={styles.content}>
          <div>Электроника</div>
          <div>
            <FixIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className={styles.content}>
          <div>Здоровье</div>
          <div>
            <FixIcon />
            <DeleteIcon />
          </div>
        </div> */}

        {/* <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <div>Строк на странице: 5 </div>
            <div>1-5 из 24</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
