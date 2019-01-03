import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Start from "@material-ui/icons/Star";
import PlayArrow from "@material-ui/icons/PlayArrow";
import { Link } from 'react-router-dom';

const Icons = {
  start: <Start />,
  arrow: <PlayArrow />
};

const ItemList = ({ data, id, dispatchPageSelected }) => {
  return (
    <Link to={data.cod.toLowerCase()} style={{textDecoration:"none"}}>
      <ListItem button id={id} onClick={()=>dispatchPageSelected(data)}>
          <ListItemIcon>{id % 2 > 0 ? Icons.start : Icons.arrow}</ListItemIcon>
          <ListItemText>{data.name}</ListItemText>
      </ListItem>
    </Link>
  );
};

ItemList.propTypes = {
  data: PropTypes.object.isRequired
};

export default ItemList;
