import React from "react";
import _, { range } from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageSelect } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((p) => (
          <li
            key={p}
            className={currentPage === p ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageSelect(p)}>
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
