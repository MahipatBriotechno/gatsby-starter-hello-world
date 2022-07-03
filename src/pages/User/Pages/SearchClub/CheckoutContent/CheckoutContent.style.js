import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "1000px",
    maxWidth: "100%",
    "& h1, h2, h3, h4, h5, h6": {
      margin: "0 0 15px",
    },
  },
  left: {
    backgroundColor: "#f9fafc",
  },
  left_body: {
    padding: "0 10px",
  },
  right: {
    backgroundColor: "#fff",
  },
  right_body: {
    padding: "0 40px",
  },
  heading: {
    fontSize: "25px",
    "& h3": {
      margin: "0 0 15px",
    },
  },
  selected_sport_detail: {
    backgroundColor: "#fff",
    borderLeft: "5px solid #209ca2",
    padding: "20px 20px 10px",
    borderRadius: "10px",
    boxShadow: "0px 0 2px 0px grey",
    marginBottom: "22px",
    "& .list": {
      display: "flex",
      gap: "15px",
      fontSize: "18px",
      marginBottom: "15px",

      "& span": {
        color: "#b4b4b4",
      },
      "& img": {
        width: "20px",
      },
      "& .title": {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        fontSize: "18px",
        "& h5": {
          marginBottom: 0,
        },
      },
    },
  },

  // Collaps Section
  collaps_style: {
    borderLeft: "none",
    paddingTop: 10,
    "& .MuiListItem-gutters": {
      padding: "0",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "38px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "10px 0 15px",
      
    },
    "& .close_icon": {
        position: "absolute",
        marginTop: "25px",
        marginLeft: "-35px",
        cursor: 'pointer',
      },
    "& .add_spelare": {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#209ca2",
      fontSize: "14px",
      cursor: 'pointer',
    },
  },


//   Right Side Checkout
radio_showhide: {
    "& .active": {
        display: 'block',
    },
    "& .none": {
        display: 'none',
    },
}, 

".radio_button":{
    display: 'flex',
    gap: '10px',
},

}));

export { useStyles };
