import React, {useState, useEffect} from 'react'
import ShuffleArray from './util/shuffleArray'
import Puzzle from './Puzzle';
import './Game.css'

const Game = () => {

    


    let arr = ShuffleArray();
    let [shuffledArray, setShuffledArray] = useState(arr);
    // console.log("###########", arr)
    let [move, setMove] = useState(0)
    // let [time, setTime] = useState(0)
    // let [timerActive, setTimerActive] = useState(false)
    let [win, setWin] = useState(false)

    useEffect(()=>{
        
    },[move])

    const dragStart = (e)=>{
        e.dataTransfer.setData("tile", e.target.id);
    }

    const dragOver = e =>{
        e.preventDefault();

    }

    const dropped = e =>{
        e.preventDefault();
        const tile = e.dataTransfer.getData("tile")
        // latter
        
        const oldPlace = Number(document.getElementById(tile).parentElement.id.slice(6)) - 1;
        const newPlace = Number(e.target.id.slice(6)) - 1;
        
        

        if (!(Math.abs(oldPlace - newPlace) == 4 || Math.abs(oldPlace - newPlace) == 1)) {
            return;
        }

        if([4, 8].includes(newPlace) && newPlace-oldPlace == 1){
            //console.log("************")
            return;
        }
        if([7, 11].includes(newPlace) && oldPlace-newPlace == 1){
            //console.log("###########")
            return;
        }






            

        const [i, j] = [Math.min(oldPlace, newPlace), Math.max(oldPlace, newPlace)];
        
        // i = 5
        // j = 11
        // let x = [...shuffledArray.slice(0, i), shuffledArray[j], ...shuffledArray.slice(i+1, j), shuffledArray[i], ...shuffledArray.slice(j + 1)];
        // console.log("******", ...shuffledArray.slice(0, i),"-----", shuffledArray[j], "+++++", ...shuffledArray.slice(i+1, j), "&&&&&&", shuffledArray[i], "@@@@@@@@", ...shuffledArray.slice(j + 1))
        setShuffledArray([...shuffledArray.slice(0, i), shuffledArray[j], ...shuffledArray.slice(i+1, j), shuffledArray[i], ...shuffledArray.slice(j + 1)]);

        setMove(++move);


    }

  return (
    <>
        <h1>{move}</h1>
    <div className='game'>
        <Puzzle 
            shuffledArray={shuffledArray} 
            dragStart={dragStart}
            dragOver={dragOver}
            dropped={dropped} />
    </div>
    </>
  )
}

export default Game