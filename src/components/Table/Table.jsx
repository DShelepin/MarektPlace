import classNames from 'classnames';
import styles from './Table.module.scss';
import { rowsPerPageOptions } from './constants';
import { ReactComponent as Arrow } from './../../assets/icons/arrow-select.svg';
import { ReactComponent as ArrowNext } from './../../assets/icons/arrow-next.svg';
import { ReactComponent as ArrowPrev } from './../../assets/icons/arrow-prev.svg';
import { useState } from 'react';

// const columns = [
//   {
//     key: 'id',
//     label: 'ID',
//   },
//   {
//     key: 'name',
//     label: 'Название'
//   }
// ];

// const rows = [{
//   id: '1',
//   name: 'Мебель'
// }];

export function Table({ className, columns, rows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const firstRowIndexOnPage = rowsPerPage * (currentPage - 1);
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const isLastPage = currentPage === totalPages;
  const lastRowIndexOnPage = isLastPage
    ? rows.length - 1
    : firstRowIndexOnPage + rowsPerPage - 1;

  const onRowsPerPageChange = (event) => {
    setCurrentPage(1);
    setRowsPerPage(Number(event.target.value));
  };

  const onNextPageButtonClick = () => setCurrentPage((prev) => prev + 1);
  const onPrevPageButtonClick = () => setCurrentPage((prev) => prev - 1);

  console.log(currentPage);

  return (
    <div
      className={classNames(styles.table, {
        [className]: className,
      })}
    >
      <div className={styles.tableHead}>
        {columns.map((column) => (
          <div
            key={`column-${column.key}`}
            className={classNames(styles.tableHeadCell, {
              [column.className]: column.className,
            })}
          >
            {column.label}
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {rows
          .slice(firstRowIndexOnPage, lastRowIndexOnPage + 1)
          .map((row, index) => (
            <div
              key={`row-${index}`}
              className={classNames(styles.tableRow, {
                [row.className]: row.className,
              })}
            >
              {columns.map((column) => (
                <div
                  key={`rowCell-${column.key}-${index}`}
                  className={classNames(styles.tableRowCell, {
                    [column.className]: column.className,
                  })}
                >
                  {row[column.key]}
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className={styles.tableFooter}>
        <div className={styles.tableFooterRowsPerPage}>
          <span>Строк на странице:</span>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={rowsPerPage}
              onChange={onRowsPerPageChange}
            >
              {rowsPerPageOptions.map(({ value, label }) => (
                <option key={`rowsPerPageOptions-${value}`} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.tableFooterRowsCount}>
          {firstRowIndexOnPage + 1}-{lastRowIndexOnPage + 1} из {rows.length}
        </div>
        <div className={styles.tableFooterArrows}>
          <button
            className={styles.arrowButton}
            onClick={onPrevPageButtonClick}
            disabled={currentPage === 1}
          >
            <ArrowPrev />
          </button>
          <button
            className={styles.arrowButton}
            onClick={onNextPageButtonClick}
            disabled={isLastPage}
          >
            <ArrowNext />
          </button>
        </div>
      </div>
    </div>
  );
}
