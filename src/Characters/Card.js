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
    <Card
      sx={{
        minWidth: 275,
        // background: "linear-gradient(to right bottom, #430089, #82ffa1)",
      }}
    >
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
          Birthday:
          <br />
          {birthday.month} {birthday.day}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Bachelors;
