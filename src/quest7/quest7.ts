import {Position} from "../utility/position";

export interface RacePlan{
    id: string,
    symbols: number[]
    raw: string[]
}
export namespace RacePlan {
    export const create= (data: string[]): RacePlan[] =>{
        const results : RacePlan[] = []
        data.forEach((item) => {
            const id = item.substringBefore(":")
            const raw = item.substringAfter(":")
                .split(",")
            const numbers = raw
                .map(it => {
                    let val = 0;
                    if (it =="+"){
                        val = 1;
                    } else if (it =="-"){
                        val = -1
                    }
                    return val;
                })

            results.push({
                id,
                symbols: numbers,
                raw,
            })
        })
        return results;
    }
}

export interface Track{
    symbol: string,
    pos : Pos
}

export const getValue = (pos: Pos, data: string[]): string | undefined =>{
    if (pos.y<0 || pos.x< 0){
        return undefined;
    }
    if (pos.y >= data.length || pos.x >= data[0].length ){
        return undefined;
    }
    return data[pos.y][pos.x]
}

export namespace Track {
    const parse = (char: string, pos: Pos): Track=> {
        return {
            symbol: char,
            pos: pos
        };
    }

    const isValidMovement = (prev: Track[], nextPos: Pos, value?: string) : boolean =>{
        if (value === undefined || value=="" || value==" "){
            return false;
        }
        if (prev.map(it => it.pos).includesObject(nextPos)){
            return false;
        }
        return true;
    }

    export const create = (data: string[]): Track[] =>{
        const result: Track[] = [];

        const start = data.scan( it=> it=="S").first()!

        var currentTrack = parse(getValue(start, data)!, start)
        while (result.length==0 || currentTrack.symbol!="S") {
            let right = Position.right(currentTrack.pos);
            const rightVal = getValue(right, data)

            let left = Position.left(currentTrack.pos);
            const leftVal = getValue(left, data)

            let up = Position.up(currentTrack.pos);
            const upVal = getValue(up, data)

            let down = Position.down(currentTrack.pos);
            const downVal = getValue(down, data)

            if (isValidMovement(result, right, rightVal)) {
                result.push(parse(rightVal!, right))
            } else if (isValidMovement(result, up, upVal)) {
                result.push(parse(upVal!, up))
            } else if (isValidMovement(result, down, downVal)) {
                result.push(parse(downVal!, down))
            } else if (isValidMovement(result, left, leftVal)) {
                result.push(parse(leftVal!, left))
            }
            currentTrack = result.last()!;
        }
        return result;
    }
}

export const getEssence = (plan: RacePlan, distance : number): number =>{
    var essence = 10;
    let total : number = 0;
    var pos = 0;
    for (let i = 0; i < distance; i++) {
        if (pos == plan.symbols.length){
            pos = 0;
        }
        essence = essence + plan.symbols[pos];
        total += essence
        pos++
    }
    return total;
}

export const race =(plan: RacePlan[], distance: number): string =>{
    var results : Map<string, number> = new Map();
    plan.forEach((item) => results.set(item.id, getEssence(item, distance)));
    results = results.sort( (a,b) => b[1] - a[1])
    return Array.from(results.keys()).join("")
}

export const getEssenceWithTrack = (track: Track[], plan: RacePlan, loops: number): number =>{
    var essence = 10;
    let total : number = 0;
    var pos = 0;
    var trackPos = 0;

    for (let loop  = 0; loop < loops; loop++) {
        for (let i = 0; i < track.length; i++) {
            if (pos == plan.symbols.length){
                pos = 0;
            }
            if (trackPos == track.length){
                trackPos = 0;
            }
            const trackBit = track[trackPos].symbol;
            if (trackBit =="+"){
                essence = essence +1
            } else if (trackBit =="-"){
                essence = essence -1;
            } else{
                essence = essence + plan.symbols[pos];
            }
            total += essence
            pos++
            trackPos++
        }
    }

    return total;
}


export const raceWithTrack =(track : Track[], plan: RacePlan[], loops: number): string =>{
    var results : Map<string, number> = new Map();
    plan.forEach((item) => results.set(item.id, getEssenceWithTrack(track,item, loops)));
    results = results.sort( (a,b) => b[1] - a[1])
    console.log(results);
    return Array.from(results.keys()).join("")
}

export interface GenItem {
    count: number,
    symbol: string,
}

export const generateStrings = (plusLeft : number, minusLeft: number, equalsLeft: number, currentSequence: string) : string[] =>{
    let result: string[] = [];
    if (plusLeft > 0) {
        result.push(...generateStrings(plusLeft - 1, minusLeft, equalsLeft, currentSequence + '+'));
    }
    if (minusLeft > 0) {
        result.push(...generateStrings(plusLeft, minusLeft - 1, equalsLeft, currentSequence + '-'));
    }
    if (equalsLeft > 0) {
        result.push(...generateStrings(plusLeft, minusLeft, equalsLeft - 1, currentSequence + '='));
    }
    if (plusLeft === 0 && minusLeft === 0 && equalsLeft === 0) {
        result.push(currentSequence.split("").join(","));
    }
    return result
}

export const getWinningActionPlans = (track: Track[], enemyPlan: RacePlan, loops: number): number =>{
    const enemyScore = getEssenceWithTrack(track, enemyPlan, loops)

    var planStrings  = generateStrings(5, 3, 3, '')

    planStrings =  planStrings.map( (item, index) => index + ":"+ item)

    var plans = RacePlan.create(planStrings);
    return plans.countOf( it => getEssenceWithTrack(track, it, loops) > enemyScore)
}
