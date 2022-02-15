//hooks
import {useState} from 'react';
//Material UI icons
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

//Images
import yt_logo from "../assets/youtube-logo.svg";


const Header = (props) => {
  //style
  const iconColor = {
    color: "white",
    cursor: "pointer"
  };
 const [searchTerm, setSearchTerm] = useState('');
  const searchInputHandler=(e)=>{
      setSearchTerm(e.target.value);
  }

  return (
    <div className="hp-header-container">
      <div className="hp-header-left hp-header">
        <MenuIcon
          style={iconColor}
          onClick={() => {
            props.onClickMenu();
          }}
        />
        <img className="header__logo" src={yt_logo} alt="youtube-logo" />
      </div>
      <div className="hp-header-middle hp-header">
        <div className="hp-header-control hp-header">
          <div className="ctrl-input">
            <input type="text" placeholder="  Search" value={searchTerm} onChange={searchInputHandler} />
            <div className="clear-input-button">
             { searchTerm.length !== 0 && <ClearIcon 
            style={iconColor} 
            sx={{ fontSize: 30 }}
            onClick ={()=>{setSearchTerm("")}}
            />}
            </div>
          </div>
          <button>
            <SearchIcon style={iconColor} sx={{ fontSize: 30 }} />
          </button>
        </div>
        <Avatar sx={{ bgcolor: "#121212", width: 35, height: 35 }}>
          <KeyboardVoiceIcon />
        </Avatar>
      </div>
      <div className="hp-header-right hp-header">
        <div className="r-icon">
          <VideoCallIcon style={iconColor} />
        </div>
        <div className="r-icon">
          {" "}
          <AppsIcon style={iconColor} />
        </div>
        <div className="r-icon">
          <NotificationsIcon style={iconColor} />
        </div>
        <div className="r-icon">
          <Avatar sx={{ bgcolor: "#4488d1", width: 35, height: 35 }}>S</Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
