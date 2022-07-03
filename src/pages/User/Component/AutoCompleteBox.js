/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const filter = createFilterOptions();

const useStyles = makeStyles((theme) => ({
  btn_AutoComp: {
    backgroundColor: "#f7f7f7",
    borderRadius: 4,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#209ca2",
      borderWidth: 1,
    },
    "& .MuiAutocomplete-option": {
      "&:focus": {
        backgroundColor: "#209ca2",
      },
    },
  },
  active: {
    // border: "1px solid #209ca2",
  },
}));

const AutoCompleteBox = (props) => {
  const { label, options } = props;
  const [value, setValue] = React.useState(null);
  const classes = useStyles();

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== "") {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: "350px" }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          className={`${classes.btn_AutoComp} ${classes.active}`}
        />
      )}
    />
  );
};

// const top100Films = [
//   { title: 'Stockholms stad' },
//   { title: 'Stockholms stad' },
//   { title: 'Stockholms stad' },
//   { title: 'Stockholms stad' },

//   // { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];

export default AutoCompleteBox;
