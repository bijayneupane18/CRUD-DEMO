import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

const Create = () => {
  const [checked, setChecked] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const postData = () => {
    axios.post("https://63e0b1b68b24964ae002aaa3.mockapi.io/fakeData", {
      firstname,
      lastname,
      checked,
    });
  };

  const handleSubmit = (e) => {
    window.alert("form submitted successfully");
    setFirstName("");
    setLastName("");
    setChecked(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="remember"
            />
          </FormGroup>
          <Button
            variant="outlined"
            style={{ color: "grey", borderColor: "grey" }}
            onClick={postData}
            type={"submit"}
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </>
  );
};

export default Create;
