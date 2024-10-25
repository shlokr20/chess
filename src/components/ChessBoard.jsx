import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';

const ChessBoard = ({ onMove }) => {
  const [game, setGame] = useState(new Chess());
  const [turn, setTurn] = useState('w'); // Start with white's turn

  const handleMove = (move) => {
    const legalMove = game.move(move);
    if (legalMove) {
      setGame({ ...game });
      onMove(move); // Pass the move to the parent component (for timer and database)
      setTurn(game.turn());
    }
  };

  useEffect(() => {
    // Corrected checkmate logic
    if (game.is_checkmate()) {
      alert(`${game.turn() === 'w' ? 'Black' : 'White'} wins by checkmate!`);
    }
  }, [game]);

  return (
    <div>
      <Chessboard
        position={game.fen()} // Correct usage of game.fen()
        onDrop={(move) => handleMove({
          from: move.sourceSquare,
          to: move.targetSquare,
          promotion: 'q', // Default to queen promotion
        })}
        orientation={turn === 'w' ? 'white' : 'black'}
        draggable={true}
      />
    </div>
  );
};

export default ChessBoard;
