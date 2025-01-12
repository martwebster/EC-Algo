import {Dir} from "../utility/direction";

export interface Column {
    people : number[]
}

export const createCols = (data: string[]): Column[]=>{
    var cols = data[0].split(" ").length

    var result : Column[] = []
    for (let col = 0; col < cols; col++) {
        var column : number[] = []
        for (let row = 0; row < data.length; row++) {
            column.push( Number(data[row].split(" ")[col]))
        }
        result.push( {
            people: column
        })
    }
    return result
}

export const round = (cols: Column[], col: number): number =>{
    const clapper = cols[col].people[0];

    let nextColNum = col + 1;
    if (nextColNum == cols.length) {
        nextColNum = 0
    }
    const nextCol = cols[nextColNum];

    let direction = "D"
    var pos = 0;
    for (let i = 1; i <= Number(clapper)-1; i++) {
        if (direction === "D") {
            pos += 1
        } else{
            pos -= 1
        }
        if (pos <0){
            pos = 1;
            direction = "D"
        }
        if (pos > nextCol.people.length){
            pos = nextCol.people.length-1
            direction = "U"
        }
    }

    nextCol.people = nextCol.people.insertAt(clapper, pos);
    cols[col].people = [ ...cols[col].people.slice(1)];
    return nextColNum;
}

export const completeRounds= (columns: Column[], rounds: number): number =>{
    console.log(columns)
    var nextCol = 0;
    for (let x = 0; x < rounds; x++) {
        nextCol = round(columns, nextCol)
        console.log(columns)
    }
    return Number ( columns.map(it => it.people[0]).join(""))
}

export const shouts= (columns: Column[]): number|undefined =>{

    const totalShouts = new Map<number, number>();
    var nextCol = 0;

    var highest= Number.MIN_VALUE

    for (let x = 0; x < 100_000_000; x++) {
        nextCol = round(columns, nextCol)
        const shout = Number ( columns.map(it => it.people[0]).join(""))
        if (shout> highest){
            highest = shout
        }
        var shoutOut = totalShouts.get(shout)

        if (shoutOut == undefined){
            totalShouts.set(shout, 1)
        } else{
            totalShouts.set(shout, shoutOut+1)
            if (shoutOut + 1 == 2024){
                console.log(shout, totalShouts.get(shout), x+1, highest)
                return shout * (x+1)
            }
        }
    }
    return undefined
}

export const highestShout= (columns: Column[]): number|undefined =>{

    var nextCol = 0;

    var highest= Number.MIN_VALUE

    for (let x = 0; x < 1_000_000; x++) {
        nextCol = round(columns, nextCol)
        const shout = Number ( columns.map(it => it.people[0]).join(""))
        if (shout> highest){
            highest = shout
        }
    }
    return highest
}