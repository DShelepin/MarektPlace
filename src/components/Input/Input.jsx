import classNames from 'classnames';
import styles from './Input.module.scss';

export function Input(props) {
  const { className, ...inputProps } = props;
  return (
    <input
      className={classNames(styles.input, {
        [className]: className,
      })}
      {...inputProps}
    />
  );
}
