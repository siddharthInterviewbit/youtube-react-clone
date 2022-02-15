//material ui icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

//style
const iconColor = {
  color: "white"
};
const PrimarySidebar = () => (
  <div className="sb-container primary-sb">
    <ul>
      <li>
        <HomeIcon style={iconColor} />
        <p>Home</p>
      </li>
      <li>
        <ExploreIcon style={iconColor} />
        <p>Explore</p>
      </li>
      <li>
        <SubscriptionsIcon style={iconColor} />
        <p>Subscriptions</p>
      </li>
      <li>
        <VideoLibraryIcon style={iconColor} />
        <p>Library</p>
      </li>
    </ul>
  </div>
);

export default PrimarySidebar;
