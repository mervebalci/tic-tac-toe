import './App.css';
import { useState } from 'react';
// To "remember" things, components use STATE !

function Square() {
  const [value, setValue] = useState(null)
  
  function handleClick() {
    setValue('X')
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

// className="square" is a button property or prop that tells CSS how to style the button.
// Group the squares into rows with divs and add some CSS classes(board-row) to make a 3x3 board.