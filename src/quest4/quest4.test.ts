import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";
import {getStrikes, getStrikesUpDown} from "./quest4";

describe('Quest 4', () => {
    test('Part 1 - sample', ()=> {
        const nails = [3,4,7,8]
        expect(getStrikes(nails)).toBe(10)
    })

    test('Part 1', ()=> {
        const data = readTestData('./src/quest4/part1.txt');
        const nails = data.toNumbers()
        expect(getStrikes(nails)).toBe(81)
    })

    test('Part 2', ()=> {
        const data = readTestData('./src/quest4/part2.txt');
        const nails = data.toNumbers()
        expect(getStrikes(nails)).toBe(902488)
    })

    test('Part 3 - sample', ()=> {
        const nails = [2,4,5,6,8]
        expect(getStrikesUpDown(nails)).toBe(8)
    })

    test('Part 3', ()=> {
        const data = readTestData('./src/quest4/part3.txt');
        const nails = data.toNumbers()
        expect(getStrikesUpDown(nails)).toBe(129462088)
    })
})