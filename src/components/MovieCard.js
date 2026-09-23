import React from 'react';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 flex-shrink-0 cursor-pointer">
      <img
        alt="Movie Card"
        className="rounded-md hover:scale-105 transition-transform duration-300"
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
      />
    </div>
  );
};

export default MovieCard;