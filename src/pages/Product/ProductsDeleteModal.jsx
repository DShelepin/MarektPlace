import { Button } from '../../components';
import { buttonVariants } from '../../shared';
import Modal from '../../components/Modal/Modal';
import styles from './Products.module.scss';

export function ProductsDeleteModal({ open, close }) {
  return (
    <Modal open={open} close={close}>
      <h2>Вы уверенны, что хотите удалить?</h2>
      <div className={styles.modalButtonContainer}>
        <Button
          variant={buttonVariants.secondary}
          onClick={close}
          type="button"
        >
          Отмена
        </Button>
        <Button>Удалить</Button>
      </div>
    </Modal>
  );
}
