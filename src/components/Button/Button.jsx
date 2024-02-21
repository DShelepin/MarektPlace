import classNames from 'classnames';
import styles from './Button.module.scss';

export function Button({
  children,
  className,
  size = 'm',
  variant = 'primary',
  ...props
}) {
  return (
    <button
      className={classNames(styles.button, {
        [styles[`variant-${variant}`]]: true,
        [styles[`size-${size}`]]: true,
        [className]: className,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
