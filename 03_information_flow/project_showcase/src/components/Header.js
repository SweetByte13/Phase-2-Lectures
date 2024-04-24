import React, {useState} from "react";

const Header = ({onChange, isDarkMode, setIsDarkMode}) => {

  // previous code from prior to us moving the data to th APp to hand it down
  // const [isDarkMode, setIsDarkMode] = useState(true)

  //Update state when button is clicked
  // const handleClick = () => {
  //   setIsDarkMode(!isDarkMode)
  // }
  
  // function handleClick(){
  //   setIsDarkMode(!isDarkMode)
  // }
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      {/* <button onClick={setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button> */}
    </header>
  );
}

export default Header;