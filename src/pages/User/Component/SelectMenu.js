import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";


const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectMenu = (props) => {
  const { name, lable, options } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    icon: "",
    sport: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  //   const value = state.{name};

  console.log("options.icon__", options[0].icon);

  return (
    <div>
      {/* <img src={options[0].icon} /> */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{lable}</InputLabel>
        <Select
          native
          value={state.sport}
          onChange={handleChange}
          label={lable}
          inputProps={{
            name: name,
            id: "outlined-age-native-simple",
          }}
          style={{ width: 200 }}
        >
          <option aria-label="None" value="" />
          {options &&
            options.map((item) => (
              <option value={item.title}>
                <div style={{ display: "flex", gap: 15, height: 50 }}>
                  <img src={item.icon} />
                   {item.title}
                </div>
              </option>
            ))}
          {/* <option value='Padel'>Padel</option>
          <option value='Squash'>Squash</option> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMenu;
