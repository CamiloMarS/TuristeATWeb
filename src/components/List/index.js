import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ItemList from "../ItemList/index";

const TList = ({ collection }) => {
  return (
    <List>
      {collection.map((item, i) => (
        <ItemList data={item} key={i} id={i} />
      ))}
    </List>
  );
};

export default TList;
