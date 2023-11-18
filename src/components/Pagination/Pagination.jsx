import React from "react";

import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  clickPrevPage,
  clickNextPage,
  clickPage,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button className={currentPage <= 1 ? styles.arrowActive : styles.arrow} disabled={currentPage <= 1} onClick={clickPrevPage}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={index + 1 === currentPage ? styles.active : styles.pageNumber}
            key={index}
            disabled={index + 1 === currentPage}
            onClick={() => clickPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className={currentPage >= totalPages ? styles.arrowActive : styles.arrow} disabled={currentPage >= totalPages} onClick={clickNextPage}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
