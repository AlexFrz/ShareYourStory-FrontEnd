import React, { useState, useRef, useEffect } from "react";
import "./Donate.scss";
import styled, { css } from "styled-components";
import { deepPurple } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  InputBase,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: 30,
    minWidth: 400,
    marginTop: "-12px",
    marginLeft: "28vw",
    [theme.breakpoints.down("md")]: {
      width: 100,
      minWidth: 100,
      marginTop: "-12px",
      marginLeft: "28vw",
    },
  },
  inputLabel: {
    fontSize: "4rem",
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#ff7373",
    textShadow: "-1px 4px 10px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      marginTop: "-12px",
    },
  },
  heart: {
    fontSize: "5rem",
    color: "#ff7373",
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
    [theme.breakpoints.down("md")]: {
      width: 100,
      paddingTop: 0,
    },
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

function Donate() {
  const classes = useStyles();

  // Logic for the select dropdown
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

  // Logic for the dialog
  const [name, setName] = useState("NAME");
  const [email, setEmail] = useState("EMAIL");
  const [donation, setDonation] = useState("10");

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="donnate__container">
      <div className="donate">
        <div className="donate__wrapper">
          <di className="donate__line">
            <h1 className="donate__text">I AM </h1>
            <input
              value={name}
              type="text"
              className="donate__input"
              onChange={(e) => setName(e.target.value)}
            />
          </di>
          <div className="donate__line">
            <h1 className="donate__text">MY EMAIL </h1>
            <input
              type="text"
              className="donate__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="donate__line">
            <h1 className="donate__text">& I GIVE </h1>
            <div className="how-much">
              <input
                type="text"
                className="donate__input"
                value={donation}
                onChange={(e) => setDonation(e.target.value)}
              />
              <h1 className="donate__text">$</h1>
            </div>
          </div>
          <div className="donate__line">
            <div className="how-much">
              <h1 className="donate__text_to">TO </h1>
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
            </div>
          </div>
          <div className="donate__line">
            <Button className="donate__button">
              NOW <FavoriteIcon className={classes.heart} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
