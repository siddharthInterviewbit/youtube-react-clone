import React, { useState, useEffect } from "react";

import MediaCard from "./MediaCard";
import tmdbApi from 'api/tmdb';

function MediaSlider({ mediaType, title, path, params = {}, isLarge }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await tmdbApi.get(path, params);
      setItems(json.results);
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="media-slider">
      <div className="media-slider__cards">
        {items.map((media) => (
          <MediaCard
            isLarge={isLarge}
            key={media.id}
            media={media}
            mediaType={media.media_type || mediaType}
          />
        ))}
      </div>
    </div>
  );
}

export default MediaSlider;
