import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
    

    "& .PrivateTabIndicator-colorSecondary-21, .PrivateTabIndicator-vertical-21, .MuiTabs-indicator":
      {
        backgroundColor: "#209ca2",
      },
  },
  tabs: {
    
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 100,
    "& .MuiTab-wrapper": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      background: "#209ca2",
      borderRadius: "4px",
      color: "#fff",
    },
  },
  TabPanel: {
    paddingLeft: 15,
    
  },
  cal_style: {
    
    "& .react-calendar__tile--active": {
      backgroundColor: "#209ca2 !important",
    },
    "& .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus":
      {
        backgroundColor: "#209ca2 !important",
      },
  },
}));

const VerticalTabsCalender = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [CalValue_1, setCalValue_1] = React.useState(new Date());
  const [CalValue_2, setCalValue_2] = React.useState(new Date());
  const [CalValue_3, setCalValue_3] = React.useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} 12233445555555555`}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Idag" {...a11yProps(0)} />
        <Tab label="Imorgon" {...a11yProps(1)} />
        <Tab label="Fredag" {...a11yProps(2)} />
      </Tabs>
      <TabPanel className={classes.TabPanel} value={value} index={0}>
        <Calendar
          className={classes.cal_style}
          onChange={setCalValue_1}
          value={CalValue_1}
        />
      </TabPanel>
      <TabPanel className={classes.TabPanel} value={value} index={1}>
        <Calendar className={classes.cal_style} onChange={setCalValue_2} value={CalValue_2} />
      </TabPanel>
      <TabPanel className={classes.TabPanel} value={value} index={2}>
        <Calendar className={classes.cal_style} onChange={setCalValue_3} value={CalValue_3} />
      </TabPanel>
    </div>
  );
};

export default VerticalTabsCalender;
