import React from 'react'

const EmptyTile = ({index, dropped, dragOver}) => {
  return (
    <div
	onDragOver={dragOver}
	onDrop={dropped}
	id={`place-${index + 1}`}
	className='emptyTile'
	></div>
  )
}

export default EmptyTile