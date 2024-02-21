import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { links } from './constants';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';
import { ReactComponent as BurgerIcon } from '../../../assets/icons/burger.svg';
import classNames from 'classnames';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerOpen]: isOpen,
      })}
    >
      <div className={classNames(styles.titleWrapper)}>
        <h2
          className={classNames(styles.title, {
            [styles.titleOpen]: isOpen,
          })}
        >
          Market
        </h2>
        {isOpen ? (
          <ArrowIcon
            onClick={toggleSidebar}
            className={classNames(styles.icon, styles.titleIcon)}
          />
        ) : (
          <BurgerIcon
            onClick={toggleSidebar}
            className={classNames(styles.icon, styles.titleIcon)}
          />
        )}
      </div>
      <nav>
        <ul className={styles.links}>
          {links.map(({ name, to, icon: Icon }) => {
            return (
              <li key={name} className={styles.linkWrapper}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? classNames(styles.link, styles.active)
                      : [styles.link]
                  }
                >
                  <Icon className={styles.icon} />
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
