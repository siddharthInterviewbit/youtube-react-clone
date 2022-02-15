import React, { useState } from 'react';
import classNames from 'classnames';

import { generateImageUrl, ImageSizes } from "utils/tmdb";
import TrailerModal from './TrailerModal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function dayDiff(d) {
  const date1 = new Date();
  const date2 = new Date(d);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const months = date1.getMonth() - date2.getMonth() + 
    (12 * (date1.getFullYear() - date2.getFullYear()))
  const year = Math.ceil(months/12);
  console.log(months);
  if(diffDays < 31) {
    return (diffDays + " days");
  } else if(months < 12) {
    return months + " months"
  } else {
    return year+" years"
  }
}
function MediaCard({ media, mediaType, isLarge }) {
  const [isTrailerOpen, setTrailerOpen] = useState(false);
  const iconColor = {
    color: "white",
    cursor: "pointer",
    height: 45,
    width: 45,
  };
  return (
    <>
      <div
        key={media.id}
        className="media-card"
        onClick={() => setTrailerOpen(true)}
      >
        <img
          className={classNames(
            'media-card__poster',
            { 'media-card__poster--large': isLarge },
          )}
          src={
            isLarge
            ? generateImageUrl(media.poster_path, ImageSizes.poster)
            : generateImageUrl(media.backdrop_path, ImageSizes.card)
          }
          alt={media.original_title}
        />
        <div className="media-card__cover">
          <div className="media-card__image">
            <AccountCircleIcon
              style={iconColor}
            />
          </div>
          <div className="media-card__desc">
            <div className="media-card__name">
              {media.title || media.name || media.original_name}
            </div>
            <div className="media-card__description">
              {dayDiff(media.first_air_date) + ' ago'}
            </div>
          </div>
        </div>
      </div>
      {isTrailerOpen && (
        <TrailerModal
          mediaType={mediaType}
          mediaId={media.id}
          media={media}
          onClose={() => setTrailerOpen(false)}
        />
      )}
    </>
  );
}

export default MediaCard;
