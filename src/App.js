import './App.css';
import { useState } from 'react';
// To "remember" things, components use STATE !

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    const nextSquares = squares.slice()
    nextSquares[i] = "X"
    setSquares(nextSquares)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

// className="square" is a button property or prop that tells CSS how to style the button.
// Group the squares into rows with divs and add some CSS classes(board-row) to make a 3x3 board.

/*
The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method.
slice() function creates a COPY of the squares array instead of modifying th existing array.
Then, handleClick updates the nextSquares array to add X to the clicked square.

Immutability makes complex features much easier to implement. 
Later, a “time travel” feature can be implemented that lets you review the game’s history and “jump back” to past moves. 
This functionality isn’t specific to games—an ability to undo and redo certain actions is a common requirement for apps. 
Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.
*/