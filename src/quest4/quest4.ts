import {MathExt} from "../utility/math.ext";

export const getStrikes = (nails: number[]): number =>{
    const min = nails.min();
    return nails.sumOf( it => it-min)
}

export const getStrikesUpDown = (nails: number[]): number =>{
    const median = MathExt.median(nails)
    return nails.sumOf( it => Math.abs(it-median));
}