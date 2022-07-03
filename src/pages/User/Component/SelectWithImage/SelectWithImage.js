import React, { useState, useRef, useEffect  } from "react";
import "./Select.css";
import listenForOutsideClicks from './listenForOutsideClicks'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

  active: {
    border: "1px solid #209ca2",
  }


}));



const SelectWithImage =({ placeholder, options })=> {
  const classes = useStyles();
  
  const [showDropDown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const menuRef = useRef(null)
  const [listening, setListening] = useState(false)
  useEffect(listenForOutsideClicks(listening, setListening, menuRef, setShowDropdown))

  
  const onClickHandler = (option) => {
    return () => {
      setShowDropdown(false);
      setSelectedOption(option);
    };
  };
 

  return (
    <div className={`select ${showDropDown == false ? '' : classes.active}`} ref={menuRef} >
      <button
        className={`select__label `}
        onClick={() => setShowDropdown(!showDropDown)}
        
      >
        {(selectedOption && selectedOption.label) || placeholder}
      </button>
      {showDropDown && (
        <ul className="select__options">
          <li>
            <button onClick={onClickHandler(null)}>
              <div className="option-img-text" style={{color: 'gray'}}>{placeholder}</div>
            </button>
          </li>
          {options.map((option) => (
            <li>
              <button onClick={onClickHandler(option)}>
                <div className="option-img-text">
                  <img src={option.icon} /> {option.label}
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectWithImage;
