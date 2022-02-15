import React, { useState } from 'react';
import Header from 'ui/Header';
import Sidebar from 'ui/Sidebar';

function HomeScreen() {
  const [isToggledSidebar, setIsToggledSideBar] = useState(true);
  return (
    <div>
      <Header onClickMenu={() => setIsToggledSideBar((isToggled) => !isToggled)}/>
      <Sidebar 
        toggleSidebar={isToggledSidebar}
      />
    </div>
  );
}

export default HomeScreen;
