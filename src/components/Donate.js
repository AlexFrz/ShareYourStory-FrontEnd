import React, { useState, useRef, useEffect } from "react";
import "./Donate.scss";
import styled, { css } from "styled-components";
import { deepPurple } from "@material-ui/core/colors";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  InputBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: 30,
    minWidth: 400,
  },
  inputLabel: {
    fontSize: "4rem",
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "-1px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  select: {
    minWidth: 200,
    color: "black",
    fontWeight: 600,
    fontFamily: "Poppins",
    borderStyle: "none",
    zIndex: 2,
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 30,
    paddingTop: 25,
    paddingBottom: 15,
    boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
    "&:focus": {
      borderRadius: 12,
      background: "white",
      borderColor: "red",
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
      background: deepPurple[100],
      "& li": {
        fontWeight: 200,
        paddingTop: 12,
        paddingBottom: 12,
      },
      "& li:hover": {
        background: deepPurple[100],
      },
      "& li.Mui-selected": {
        color: "white",
        background: deepPurple[100],
      },
      "& li.Mui-selected:hover": {
        background: deepPurple[100],
      },
    },
  },
}));

function Donnate() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="donate">
      <div className="donate__line">
        <h1 className="donate__text">I AM :</h1>
        <input type="text" className="donate__input" placeholder="NAME" />
      </div>
      <div className="donate__line">
        <h1 className="donate__text">MY EMAIL IS :</h1>
        <input type="text" className="donate__input" placeholder="EMAIL" />
      </div>
      <div className="dollar">
        <h1 className="donate__text">& I WANNA DONATE :</h1>
        <input type="text" className="donate__input" placeholder="10" />
        <h1 className="donate__text">$</h1>
      </div>
      <div className="donate__line">
        <h1 className="donate__text_to">
          TO :
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.inputLabel}>WHO?</InputLabel>

            <Select
              className={classes.select}
              multiple
              multiple
              value={personName}
              onChange={handleChange}
            >
              <MenuItem className={classes.list} value="Altira Djal">
                Altira Djal
              </MenuItem>
              <MenuItem className={classes.list} value="Inana Patali">
                Inana Patali
              </MenuItem>
              <MenuItem className={classes.list} value="Martha Lincel">
                Martha Lincel
              </MenuItem>
              <MenuItem className={classes.list} value="Alex Frezoul">
                Alex Frezoul
              </MenuItem>
            </Select>
          </FormControl>
        </h1>
      </div>
      <button>DONATE</button>
    </div>
  );
}

export default Donnate;
