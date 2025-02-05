function cellsDistance(rows, cols, rCenter, cCenter){
    let cells = [];
    for(let r=0; r<rows; r++){
        for(let c=0; c<cols; c++){
            let dist = Math.abs(r-rCenter + c-cCenter);
            cells.push({pos: [r,c], distance: dist});
        }
    }
    cells.sort((a,b) => a.distance - b.distance);
    return cells.map(cell => cell.pos);
}
console.log(cellsDistance(1,2,0,0));
console.log(cellsDistance(2,2,0,0));
console.log(cellsDistance(3,2,0,0));