import React from "react";
import List from "@material-ui/core/List";
import ItemList from "../ItemList/index";

const TList = ({ collection, itemAction }) => {
  return (
    <List>
      {collection.map((item, i) => (
        <ItemList data={item} key={i} id={i} dispatchPageSelected={itemAction}/>
      ))}
    </List>
  );
};

export default TList;
