import React, { useEffect, useState } from 'react';

const MovesDatabase = ({ moves }) => {
  return (
    <div className="moves-database">
      <h3>Moves:</h3>
      <ul>
        {moves.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovesDatabase;
