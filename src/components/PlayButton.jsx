import React from 'react';

const PlayButton = ({ onPlay }) => {
  return (
    <div>
      <button onClick={onPlay}>Play Game</button>
    </div>
  );
};

export default PlayButton;
