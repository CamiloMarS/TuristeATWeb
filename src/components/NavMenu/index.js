import React from "react";
import { Link } from "react-router-dom";
import BoxItem from "../BoxItem";

const horizontalMenu = (items, toDo) => {
  return (
    <ul style={{ display: "flex", listStyle: "none" }}>
      {items.map((item, i) => (
        <li key={i} style={{ margin: " 0 2%" }} onClick={() => toDo(item.cod)}>
          <Link to={item.name}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const panelMenu = (items, toDo) => {
  return (
    <div
      style={{
        width: "90%",
        height: "90vh",
        padding: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {items.map((item, i) => (
        <Link to={item.name} key={i} onClick={() => toDo(item.cod)}>
          <BoxItem itemData={item} />
        </Link>
      ))}
    </div>
  );
};

const printMenu = (collection, type, action) => {
  if (Object.keys(collection).length > 0) {
    if (type === "Horizontal") {
      //Pintar un nav horizontal
      return horizontalMenu(collection, action);
    }
    //Pintar un menu
    return panelMenu(collection, action);
  }
};

const NavMenu = ({ type = "Horizontal", collection, action }) => {
  return printMenu(collection, type, action);
};

export default NavMenu;
