import _ from "lodash";
function Paginate(lists, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  const pagelist = _(lists).slice(startIndex).take(pageSize).value();
  return pagelist;
}

export default Paginate;
