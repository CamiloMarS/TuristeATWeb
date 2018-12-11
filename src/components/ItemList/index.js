import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Start from "@material-ui/icons/Star";
import PlayArrow from "@material-ui/icons/PlayArrow";

const Icons = {
  start: <Start />,
  arrow: <PlayArrow />
};

const ItemList = ({ data, id }) => {
  return (
    <ListItem button id={id}>
      <ListItemIcon>{id % 2 > 0 ? Icons.start : Icons.arrow}</ListItemIcon>
      <ListItemText>{data.name}</ListItemText>
    </ListItem>
  );
};

ItemList.propTypes = {
  data: PropTypes.object.isRequired
};

export default ItemList;
