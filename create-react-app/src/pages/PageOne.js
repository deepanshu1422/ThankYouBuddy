import React from "react";
//import button from materialui
import Button from "@material-ui/core/Button";
// import input button from materialui
import Input from "@material-ui/core/Input";

const PageOne = () => {
  //A button that could import images
  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button>
    </div>
  );
};

export default PageOne;
