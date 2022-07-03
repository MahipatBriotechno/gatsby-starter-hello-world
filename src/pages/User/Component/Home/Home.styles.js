import { makeStyles } from "@material-ui/core/styles";
import bgimg from "../../../../images/bg/homebackgroud.png";

const useStyles = makeStyles({
  home_bg: {
    backgroundImage: `url(${bgimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "94vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog_like: {
    backgroundColor: "#fff",
    maxWidth: "fit-content",
    borderRadius: "6px",
    boxShadow: "2px 2px 10px 0px black",
    borderLeft: "solid 5px #209ca2",
  },
  btn_primary: {
    backgroundColor: "#209ca2 !important",
    color: "#fff !important",
    minWidth: "160px",
    padding: '15px',

  },
  link: {
    textDecoration: 'none'
  }
});

export { useStyles };
