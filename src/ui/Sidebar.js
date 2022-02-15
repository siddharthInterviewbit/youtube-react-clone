import PrimarySidebar from "./PrimarySidebar";
import SecondarySideBar from "./SecondarySidebar";

const Sidebar = ({ toggleSidebar }) => {
  return toggleSidebar ? <PrimarySidebar /> : <SecondarySideBar />;
};
export default Sidebar;
