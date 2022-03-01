import React from "react";
//import button from materialui
import Button from "@material-ui/core/Button";
// import input button from materialui
import Input from "@material-ui/core/Input";

import { PickerOverlay } from "filestack-react";

class PageOne extends React.Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div>
        <div>
          {this.state.visible ? (
            <div>
              <PickerOverlay
                apikey={"A2LtKqrOfTd6YSJSQM6wqz"}
                onSuccess={(res) => console.log(res)}
                onUploadDone={(res) => console.log(res)}
              />
            </div>
          ) : (
            <div></div>
          )}
          <Button
            variant="contained"
            component="label"
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            Upload File
          </Button>
        </div>
      </div>
    );
  }
}

export default PageOne;
