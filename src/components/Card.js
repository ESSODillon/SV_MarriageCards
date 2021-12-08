import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function Characters({ id, num, name, area, image, showInfo }) {
  return (
    <Card
      className="card"
      sx={{
        minWidth: 275,
        background: "linear-gradient(to bottom, #ECA65E, #FBC470, #ECA65E)",
        position: "relative",
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            position: "absolute",
            bottom: "25%",
            right: 0,
            width: "100px",
            height: "100px",
          }}
          src={image}
        ></Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {area}
        </Typography>
        <p className="name" variant="h5" component="div">
          {name}
        </p>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            showInfo(id, num);
          }}
          sx={{
            background: "#904c33",
            color: "white",
            "&:hover": {
              backgroundColor: "#6e2f18",
            },
          }}
          variant="contained"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Characters;
