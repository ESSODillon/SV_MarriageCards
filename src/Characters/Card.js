import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function Bachelors({
  name,
  area,
  address,
  birthday,
  family,
  friends,
  gifts,
  image,
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar src={image}></Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {area}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2">
          {birthday.month} {birthday.day}
          <br />
          {family[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Bachelors;
