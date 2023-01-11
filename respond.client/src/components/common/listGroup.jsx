import { library } from "@fortawesome/fontawesome-svg-core";
import React, { Component, useLayoutEffect } from "react";

const ListGroup = ({ items, selectedElement, onElementSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onElementSelect(item)}
          className={
            item === selectedElement
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
