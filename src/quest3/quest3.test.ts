import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {bigDig, dig, initDig, Land} from './quest3';
import {readTestData} from "../utility/fileHelper";

describe('Quest 3 - part1', () => {

    test('sample', ()=> {
        const data = readTestData('./src/quest3/part1.sample.txt');
        // pass 1
        const land = Land.init(data)
        initDig(land)
        dig(land,2)
        dig(land,3)
        const sum = land.flat().filter(it => it.depth != undefined).sumOf(it => it.depth!)
        expect(sum).toBe(35)
    })

    test('sample - Big Dig', ()=> {
        const data = readTestData('./src/quest3/part1.sample.txt');
        const land = Land.init(data)
        const result = bigDig(land)
        expect(result).toBe(35)
    })

    test('Part 1', ()=> {
        const data = readTestData('./src/quest3/part1.txt');
        // pass 1
        const land = Land.init(data)
        const result = bigDig(land)
        expect(result).toBe(114)
    })

    test('Part 2', ()=> {
        const data = readTestData('./src/quest3/part2.txt');
        const land = Land.init(data)
        const result = bigDig(land)
        expect(result).toBe(2589)
    })

    test('Part 3', ()=> {
        const data = readTestData('./src/quest3/part3.txt');
        const land = Land.init(data)
        const result = bigDig(land, true)
        expect(result).toBe(10074)
    })
})