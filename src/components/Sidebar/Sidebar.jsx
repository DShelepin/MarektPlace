import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { links } from './constans';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

export function Sidebar() {
  const [isCollapsed, setisCollapsed] = useState(false);
  const click = () => setisCollapsed(!isCollapsed);

  return (
    <div
      style={{ width: isCollapsed ? '240px' : '70px' }}
      className={styles.container}
    >
      <div className={styles.titleWrapper}>
        <h2
          style={{ display: isCollapsed ? 'block' : 'none' }}
          className={styles.title}
        >
          Market
        </h2>
        <BurgerIcon
          style={{ right: isCollapsed ? '10px' : '20px' }}
          className={classNames(styles.icon, styles.titleIcon)}
          onClick={click}
        />
      </div>
      <nav>
        <ul className={styles.links}>
          {links.map(({ name, to, icon: Icon }) => {
            return (
              <li key={name} className={styles.linkWrapper}>
                <Link to={to} className={styles.link}>
                  <Icon className={styles.icon} />
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
