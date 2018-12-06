import React from "react";
import { Link } from "react-router-dom";
import BoxItem from "../BoxItem";

const horizontalMenu = items => {
  return items.map((item, i) => {
    return (
      <Link to={item.href} key={i}>
        {item.name}
      </Link>
    );
  });
};

const panelMenu = items => {
  return (
    <div style={{ width: "80%", height: "50vh", padding: "10px" }}>
      {items.map((item, i) => (
        <Link to={item.name} key={i}>
          <BoxItem itemData={item} />
        </Link>
      ))}
    </div>
  );
};

const printMenu = (collection, type) => {
  if (Object.keys(collection).length > 0) {
    if (type === "Horizontal") {
      //Pintar un nav horizontal
      return horizontalMenu(collection);
    }
    //Pintar un menu
    return panelMenu(collection);
  }
};

const NavMenu = ({ type = "Horizontal", collection }) => {
  return <span>{printMenu(collection, type)}</span>;
};

export default NavMenu;
