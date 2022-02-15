import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import yt_logo from "../assets/youtube-logo.svg"
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";


const Header = () => {
  const iconColor = {
    color: "white",
    cursor: "pointer"
  }

  const [searchTerm, setSearchTerm] = useState('hello world');
  const searchInputHandler=(e) => {
    setSearchTerm(e.target.value);
  }
  return(
    <div className="hp-header-container hp-header">
      <div className="hp-header-left hp-header">
        <MenuIcon 
          style={iconColor}
        />
        <img className="header__logo" src={yt_logo} alt="youtube" />
      </div>
      <div className="hp-header-middle hp-header">
        <div className="hp-header-control hp-header">
          <div className="ctrl-input">
            <input type="text" placeholder="search" value={searchTerm} onChange={searchInputHandler}/>
            <div className="clear-input-button">
              {searchTerm.length !==0 &&<ClearIcon 
                style={iconColor} 
                sx={{fontSize: 30}}
                onClick= {() => {setSearchTerm('')}}
              />}

            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
export default Header;