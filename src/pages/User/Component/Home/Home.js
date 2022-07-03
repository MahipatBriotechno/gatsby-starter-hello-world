import React from "react";
import DialogBox from "../DialogBox/DialogBox";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import AutoCompleteBox from "../AutoCompleteBox";
import SelectMenu from "../SelectMenu";
import { useStyles } from "./Home.styles";
import Tennis from "../../../../images/icon/Tennis.svg";
import Badminton from "../../../../images/icon/Badminton.svg";
import Squash from "../../../../images/icon/Squash.svg";
import Padel from "../../../../images/icon/Padel.svg";

import {
  compose,
  spacing,
  palette,
  styleFunctionSx,
} from "@material-ui/system";
import styled, { ThemeProvider } from "styled-components";
import SelectWithImage from "../../Component/SelectWithImage/SelectWithImage";
import VerticalTabsCalender from "../VerticalTabsCalender/VerticalTabsCalender";
import DropdownMenu from "../DropdownMenu";
import { Link as NavLink } from 'gatsby'
const styleFunction = styleFunctionSx(compose(spacing, palette));
const Box = styled.div(styleFunction);

// const useStyles = makeStyles({
//   dialog_like: {
//     backgroundColor: 'red',

//   },
// });

const Home = () => {
  const classes = useStyles();


  const DATA_AutoComplete = [
    { title: "Stockholms stad 1" },
    { title: "Stockholms stad 2" },
    { title: "Stockholms stad 3" },
    { title: "Stockholms stad 4" },
  ];
  const DATA_sport = [
    { label: "Tennis", icon: Tennis },
    { label: "Padel", icon: Padel },
    { label: "Squash", icon: Squash },
    { label: "Badminton", icon: Badminton },
    { label: "Golf", icon: Badminton },
  ];

  const DialogBoxContent = () => {
    return (
      <>
        <Box sx={{ display: "flex", gap: 15, padding: "30px 30px" }}>
          <SelectWithImage placeholder="Sport" options={DATA_sport} />

          <DropdownMenu option={<VerticalTabsCalender />} />
          {/* <SelectMenu name="sport" lable="Sport" options={DATA_sport} /> */}

          <AutoCompleteBox
            label="Klubb, postkod, stad…"
            options={DATA_AutoComplete}
          />
          <NavLink to="/User/Pages/SearchClub/" className={classes.link}>
            <Button
              className={classes.btn_primary}
              // onClick={handleDialogClose}
              variant="containedPrimary"
              color="primary"
              

            >
              Sök
            </Button>
          </NavLink>
        </Box>
      </>
    );
  };

  return (
    <div>
      <Box className={classes.home_bg}>
        <Box className={classes.dialog_like}>
          <Box sx={{ padding: "30px 30px 0px" }} id="alert-dialog-title">
            <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 15 }}>
              Hej, boka en bana här!
            </h2>
            <p>Hitta klubbar och tillgängliga tider.</p>
          </Box>
          <DialogBoxContent />
        </Box>
      </Box>

    </div>
  );
};

export default Home;
