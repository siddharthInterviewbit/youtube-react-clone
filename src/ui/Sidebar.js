import PrimarySidebar from "./PrimarySidebar";
import SecondarySidebar from "./SecondarySidebar";

const Sidebar = ({toggleSidebar}) => {
  console.log(toggleSidebar);
  return (
    toggleSidebar ? <PrimarySidebar /> : <SecondarySidebar/>
  );
};
export default Sidebar;