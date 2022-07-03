import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../../images/logo.svg'
import logoText from '../../../images/name_logo.svg'
import '../../../../src/index.css'

import { Button, Grid } from '@material-ui/core'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ReactComponent as userIcon } from '../../../images/user_logo.svg'
import laptopIcon from '../../../images/laptop.svg'
import logoutIcon from '../../../images/logout.svg'
import loginLogo from '../../../images/sign_in.svg';
import { Link } from 'gatsby'
import {
  Select,
  SvgIcon,
  Box,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'DM Sans',
    width: '100%'
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    height: "50px",
    '& .MuiToolbar-regular': {
      minHeight: "50px"
    },
    width: '100%'
  },
  appHeading: {
    marginLeft: '7px',
    marginTop: '7px',
    alignItems: 'center'
  },
  name: {
    marginLeft: '100px',
    marginRight: "15px",
    paddingRight: '15px'
  },
  navLink: {
    color: '#000000',
    marginLeft: '40px'
  },
  link: {
    textTransform: "unset",
    color: "#a5a5a5",
    marginLeft: "100px",
    textDecoration: "unset"
  },
  signIn: {
    height: '25px'
  }
})
);

const theme = createTheme({
  link: {
    fontFamily: [
      "DM Sans",
      "sans-serif"
    ].join(","),
    fontSize: '18px',

  }

});

const userMenu = [
  {
    icon: laptopIcon,
    title: "Platform"
  },
  {
    icon: logoutIcon,
    title: "Platform"
  },

]

export default function AppBarNew() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar elevation={0} position="static" className={classes.appBar}>

          <Toolbar className={classes.name}>
            <Grid justifyContent='space-around' alignItems='center' container >
              <Link to="/User/Pages/homepage">
                <Grid item >
                  <img src={logo} />
                  <img src={logoText} className={classes.appHeading} />
                </Grid>
              </Link>

              <Grid item xs={6}>
                <Typography className={classes.navLink}>
                  <Link className={classes.link}>Book</Link>
                  <Link className={classes.link}>Find racqys</Link>
                  <Link className={classes.link}>Explore</Link>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Button variant='outlined' className={classes.lineButton}>Download app</Button>
              </Grid>
              <Grid item xs={2}>
                <img src={loginLogo} className={classes.signIn} />
              </Grid>
            </Grid>
          </Toolbar>

        </AppBar>
      </div>

    </ThemeProvider>
  );
}