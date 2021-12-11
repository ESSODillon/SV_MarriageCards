// Imports for React, Material UI components.
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Blueprint for producing cards for the JSON data, takes in variables for HTML/JSX called name, area, and image. Takes in ID and Num for data filtering, and the showInfo function for the button's onClick.
function Cards({ id, num, name, area, image, showInfo }) {
  return (
    <Card className="card">
      <CardContent className="card_content">
        {/* Typography for plugging in the area at the top left of the card */}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {area}
        </Typography>
        {/* Parapraph tag for pluggin in the name variable*/}
        <p className="name" component="div">
          {name}
        </p>
        {/* Image for the character avatars, the src is the image variable since the JSON file has a bunch of image URLs */}
        <img className="avatar" src={image}></img>
      </CardContent>
      <CardActions className="button_holder">
        {/* Button that activates the modal that shows character info */}
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

export default Cards;
