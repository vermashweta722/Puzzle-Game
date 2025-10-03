import React from 'react'
import './Game.css'

const Tile = ({index, value, dragStart}) => {
  return (
    <div
        id={`place-${index+1}`}
        
    >
        <p 
            id={`tile-${index+1}`}
            draggable="true"  
            className={'tile '+ (index == value-1 ? 'correctTile' : '') }  
            onDragStart={dragStart}
        >
            {value}
        </p>
    </div>
  )
}

export default Tile