import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const TCard = ({ title }) => {
  return (
    <Card>
      <Typography is="h6">{title}</Typography>
    </Card>
  );
};

export default TCard;
