let ShuffleArray = ()=>{
    let arr = Array(16).fill().map((_, i)=> i+1).sort(()=>Math.random()-0.5);
    return arr;
}

export default ShuffleArray