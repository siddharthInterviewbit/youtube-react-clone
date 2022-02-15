import React from 'react';

import MediaSlider from "ui/MediaSlider";
import Header from "ui/Header";
import Sidebar from "ui/Sidebar";
import { useState } from "react";



function HomeScreen() {
  const [isToggledSidebar, setIsToggledSideBar] = useState(true);

  return (
    <div>
      <Header 
        onClickMenu={() => setIsToggledSideBar((isToggled) => !isToggled)}
      />
      <Sidebar 
        toggleSidebar={isToggledSidebar}
      />
      <MediaSlider
        mediaType="tv"
        title="Youtube"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
    </div>
  );
}

export default HomeScreen;
