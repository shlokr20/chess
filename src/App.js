import React, { useState } from 'react';
import ChessBoard from './components/ChessBoard';
import Timer from './components/Timer';
import MovesDatabase from './components/MovesDatabase';
import PlayButton from './components/PlayButton';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [moves, setMoves] = useState([]);
  const [isP1Active, setIsP1Active] = useState(true); // Player 1 starts
  const timeLimit = 5; // Default time limit in minutes

  const handlePlay = () => {
    setIsGameStarted(true);
  };

  const handleMove = (move) => {
    setMoves((prevMoves) => [...prevMoves, `${move.from} -> ${move.to}`]);
    setIsP1Active(!isP1Active); // Switch timers after each move
  };

  return (
    <div>
      <h1>Live Chess Game</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Timer timeLimit={timeLimit} isActive={isP1Active && isGameStarted} onTimeUp={() => alert('Player 1 is out of time!')} player="Player 1" />
          <ChessBoard onMove={handleMove} />
          <Timer timeLimit={timeLimit} isActive={!isP1Active && isGameStarted} onTimeUp={() => alert('Player 2 is out of time!')} player="Player 2" />
        </div>
        <div>
          <PlayButton onPlay={handlePlay} />
          <MovesDatabase moves={moves} />
        </div>
      </div>
    </div>
  );
};

export default App;
