import React from 'react'
import Tile from './Tile'
import EmptyTile from './EmptyTile'
import './Game.css'
const Puzzle = ({ shuffledArray, dragOver, dragStart, dropped }) => {
  return (
    <div className='puzzle'>
        {
            shuffledArray.map((value, index)=>{
                
                if(value===16){
                    return(<EmptyTile dragOver={dragOver} dropped={dropped} index={index} />)
                }
                return(<Tile index={index} value={value} dragStart={dragStart} />)

            })
        }
    </div>
  )
}

export default Puzzle


/*
if(){
return 
}else{
    }


*/