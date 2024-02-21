import { useState } from 'react';
import { Button, Input } from '../../components';
import { buttonVariants, modalModes } from '../../shared';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
import Modal from '../../components/Modal/Modal';
import styles from './Products.module.scss';

export function ProductsFormModal({ open, modalMode, close, currentCategory }) {
  const [form, setForm] = useState({
    name: '',
    img: '',
  });

  function onFormChange(e) {
    const id = e.target.id;
    console.log(id);
    setForm((prevForm) => ({
      ...prevForm,
      [id]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (modalMode === 'create') {
      console.log(form);
    } else if (modalMode === 'edit') {
      console.log(form);
      console.log(currentCategory.id);
    }

    close();
  };

  return (
    <Modal open={open} onClose={close}>
      <div className={styles.modalHeader}>
        <h2>
          {modalMode === modalModes.create
            ? 'Создание товара'
            : 'Редактирование товара'}
        </h2>
        <Cross className={styles.modalCrossButton} onClick={close} />
      </div>
      <form className={styles.modalForm} onSubmit={onSubmit}>
        <div className={styles.modalInputWrapper}>
          <label htmlFor="name">Название</label>
          <Input required id="name" onChange={onFormChange} value={form.name} />
        </div>
        <div className={styles.modalInputWrapper}>
          <label htmlFor="category">Категории</label>
          <div className={styles.modalSelectWrapper}>
            <select
              placeholder="Категории"
              className={styles.modalSelect}
            ></select>
          </div>
        </div>
        <div className={styles.modalInputWrapper}>
          <label htmlFor="amount">Количество</label>
          <Input
            required
            id="amount"
            value={form.img}
            onChange={onFormChange}
          />
        </div>
        <div className={styles.modalInputWrapper}>
          <label htmlFor="price">Цена</label>
          <Input required id="price" value={form.img} onChange={onFormChange} />
        </div>
        <div className={styles.modalInputWrapper}>
          <label htmlFor="img">Картинка(URL)</label>
          <Input required id="img" value={form.img} onChange={onFormChange} />
        </div>
        <div className={styles.modalButtonContainer}>
          <Button
            variant={buttonVariants.secondary}
            onClick={close}
            type="button"
          >
            Отмена
          </Button>
          <Button>Создать</Button>
        </div>
      </form>
    </Modal>
  );
}
