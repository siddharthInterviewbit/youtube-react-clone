//UI
import List from "./List";
//Material UI
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";

const iconColor = {
  color: "white",
  cursor: "pointer"
};
const SecondarySidebar = () => (
  <div className="sb-container secondary-sb">
    <ul>
      <List icon={<HomeIcon style={iconColor} />} description="Home" />
      <List icon={<ExploreIcon style={iconColor} />} description="Explore" />
      <List
        icon={<SubscriptionsIcon style={iconColor} />}
        description="Subscription"
      />
      <hr />
      <List
        icon={<VideoLibraryIcon style={iconColor} />}
        description="Library"
      />
      <List icon={<HistoryIcon style={iconColor} />} description="History" />
      <List
        icon={<WatchLaterIcon style={iconColor} />}
        description="Watch Later"
      />
      <List
        icon={<ThumbUpIcon style={iconColor} />}
        description="Liked Videos"
      />
      <hr />
      <List
        icon={<YouTubeIcon style={iconColor} />}
        description="Youtube Premium"
      />
      <List icon={<SettingsIcon style={iconColor} />} description="Settings" />
      <List
        icon={<FlagIcon style={iconColor} />}
        description="Report History"
      />
      <List icon={<HelpOutlineIcon style={iconColor} />} description="Help" />
      <List
        icon={<FeedbackIcon style={iconColor} />}
        description="Send Feedback"
      />
    </ul>
  </div>
);

export default SecondarySidebar;
