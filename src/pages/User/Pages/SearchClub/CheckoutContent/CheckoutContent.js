import React, { useState } from "react";
import { useStyles } from "./CheckoutContent.style";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Tennis from "../../../../../images/icon/Tennis.svg";
import calander from "../../../../../images/icon/calander.svg";

import clock from "../../../../../images/icon/clock.svg";
import credit_card from "../../../../../images/icon/credit-card.svg";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import PeopleIcon from "@material-ui/icons/People";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";


// const DATA_PRICE = [
//   { label: "SEK", value: 1, icon: flagIcon },
//   { label: "SEK", value: 2, icon: flagIcon },
//   { label: "SEK", value: 3, icon: flagIcon },
// ];

const CheckoutContent = () => {
  const classes = useStyles();

  const [openCollaps, setOpenCollaps] = React.useState(false);

  const [selected, setSelected] = useState("");
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  console.log("selected__", selected);

  const handleClickCollaps = () => {
    setOpenCollaps(!openCollaps);
  };

  const SportDetailList = (props) => {
    const { image, title, subtitle, option } = props;
    return (
      <Box className="list">
        <img src={image} />
        <div className="title">
          <h5>{title}</h5>
          <span>{subtitle}</span>
          {option}
        </div>
      </Box>
    );
  };

  const RadioButton = (props) => {
    const { label, name, value, content } = props;
    return (
      <Box
        className={`${`radiooo_btn ${classes.radio_button}`} ${
          selected == value ? classes.radio_active : classes.radio_deactive
        }`}
      >
        <Box className="lable">
          <input
            type="radio"
            name={name}
            value={value}
            id={value}
            checked={selected === value}
            onChange={changeHandler}
          />
          <label htmlFor={value}>{label}</label>
        </Box>
        <div className={`content ${selected == value ? "active" : "none"}`}>
          {content}
        </div>
      </Box>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Left */}
        <Grid item xs={6} className={classes.left}>
          <Box className={classes.left_body}>
            <Box className={classes.heading}>
              <h3>Översikt av banbokning</h3>
            </Box>
            {/* selected_sport_detail */}
            <Box className={classes.selected_sport_detail}>
              <h3>Collector Bank Arena (GTG)</h3>
              <SportDetailList
                image={Tennis}
                title="Tennis, Bana 2"
                subtitle="(Utomhus, grus)"
              />
              <SportDetailList
                image={calander}
                title="Lör 28 maj, 2022"
                subtitle=""
              />
              <SportDetailList
                image={clock}
                title="16:00 - "
                option={
                  <select>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </select>
                }
              />
              <SportDetailList image={credit_card} title="250 kr" subtitle="" />
            </Box>

            {/* Collaps Lägg till spelare */}
            <Box
              className={`${classes.selected_sport_detail} ${classes.collaps_style}`}
            >
              <ListItem button onClick={handleClickCollaps}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Lägg till spelare"
                  secondary="Dela automatiskt bokningsdetaljer via email"
                />
                {/* {openCollaps ? <ExpandLess /> : <ExpandMore />} */}
                {openCollaps ? <AddIcon /> : <AddIcon />}
              </ListItem>
              <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <CloseIcon className="close_icon" />
                </form>

                <Box className="add_spelare">
                  <AddIcon />
                  Lägg till spelare
                </Box>
              </Collapse>
            </Box>
          </Box>
        </Grid>

        {/* Right */}
        <Grid item xs={6} className={classes.right}>
          <Box className={classes.right_body}>
            <Box className={classes.heading}>
              <h3>Checkout</h3>
            </Box>
            
              {/* <SelectWithIcon
                data={DATA_PRICE}
                placeHolder="Telefonnummer"
                label="1111"
              /> */}
           

            {/* 1. Radio button Collaps Logga in/Skapa konto */}
            <Box
              className={`${classes.selected_sport_detail} ${classes.radio_showhide}`}
            >
              <RadioButton
                label="Logga in/Skapa konto"
                name="first"
                value="logga"
                content={<>Logga in/Skapa konto </>}
              />
              <RadioButton
                label="Fortsätt som gäst"
                name="first"
                value="fortsätt"
                content={
                  <>
                    <form
                      className={classes.form_full}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </form>
                  </>
                }
              />
            </Box>
            {/*2. Radio button Collaps Logga in/Skapa konto */}
            <h4>Betalsätt</h4>
            <Box
              className={`${classes.selected_sport_detail} ${classes.radio_showhide}`}
            >
              <RadioButton
                label="Kort"
                name="second"
                value="kort"
                content={<>Kort</>}
              />
              <RadioButton
                label="Swish"
                name="second"
                value="swish"
                content={
                  <>
                    Swish
                  </>
                }
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutContent;
