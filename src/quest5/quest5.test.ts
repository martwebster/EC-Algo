import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";
import {completeRounds, createCols, highestShout, round, shouts} from "./quest5";

describe('Quest 5', () => {
    test('Part 1 - sample', ()=> {
        const data = readTestData('./src/quest5/part1.sample.txt');
        const columns = createCols(data)
        console.log(columns)
        expect(35).toBe(35)
        round(columns,0)
        console.log(columns)
        round(columns,1)
        console.log(columns)
        round(columns,2)
        console.log(columns)
        round(columns,3)
        console.log(columns)
    })
    test('Part 1 - big', ()=> {
        const data = readTestData('./src/quest5/part1.sample.txt');
        const columns = createCols(data)
        const result = completeRounds(columns,10)
        expect (result).toBe(2323)
    })

    test('Part 1 ', ()=> {
        const data = readTestData('./src/quest5/part1.txt');
        const columns = createCols(data)
        const result = completeRounds(columns,10)
        expect (result).toBe(2222)
    })

    test('Part 2 - Sample ', ()=> {
        const data = readTestData('./src/quest5/part2.sample.txt');
        const columns = createCols(data)
        //const result = shouts(columns)
        const result = shouts(columns)
        expect (result).toBe(50877075)
    })

    test('Part 2 - Insert at ', ()=> {
        const array = [1,2,3]

        expect (array.insertAt(0,0)).toStrictEqual([0,1,2,3])
        expect (array.insertAt(0,1)).toStrictEqual([1,0,2,3])
        expect (array.insertAt(0,2)).toStrictEqual([1,2,0,3])
        expect (array.insertAt(0,3)).toStrictEqual([1,2,3,0])
    })

    test('Part 2 ', ()=> {
        const data = readTestData('./src/quest5/part2.txt');
        const columns = createCols(data)
        //const result = shouts(columns)
        //96992417
        const result = shouts(columns)
        expect (result).toBe(20144411919768)
    })

    test('Part 3', ()=> {
        const data = readTestData('./src/quest5/part3.txt');
        const columns = createCols(data)
        //const result = shouts(columns)
        //96992417
        const result = highestShout(columns)
        expect (result).toBe(7771100910061000)
    })
})