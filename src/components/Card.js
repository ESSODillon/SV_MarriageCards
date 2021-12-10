import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Characters({ id, num, name, area, image, showInfo }) {
  return (
    <Card className="card">
      <CardContent className="card_content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {area}
        </Typography>
        <p className="name" component="div">
          {name}
        </p>
        <img className="avatar" src={image}></img>
      </CardContent>
      <CardActions className="button_holder">
        <Button
          onClick={() => {
            showInfo(id, num);
          }}
          sx={{
            background: "#904c33",
            "&:hover": {
              backgroundColor: "#6e2f18",
            },
          }}
          variant="contained"
          size="small"
          className="card_button"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Characters;
