import React from "react";
const ListGroup = (props) => {
  const {
    lists,
    keyProperty,
    valueProperty,
    onItemSelected,
    slectedItem,
  } = props;
  return (
    <ul class="list-group">
      {lists.map((l) => (
        <li
          class={
            l === slectedItem ? "list-group-item active" : "list-group-item "
          }
          key={l[keyProperty]}
          onClick={() => onItemSelected(l)}
        >
          {l[valueProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueProperty: "name",
  keyProperty: "_id",
};

export default ListGroup;
