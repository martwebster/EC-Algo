import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";
import {getMinBeetles, getMinBeetlesTotalPart2, getPair, getPairs} from "./quest9";

describe('Quest 9', () => {
    test('Part 1 - sample', ()=> {
        const data = readTestData('./src/quest9/part1.sample.txt');
        var stamps = [10,5,3,1]
        const min = getMinBeetles(data, stamps);
        expect(min).toBe(10)
    })

    test('Part 1', ()=> {
        const data = readTestData('./src/quest9/part1.txt');
        var stamps = [10,5,3,1]
        const min = getMinBeetles(data, stamps);
        expect(min).toBe(14289)
    })

    test('Part 2 - sample', ()=> {
        const data = readTestData('./src/quest9/part2.sample.txt');
        var stamps = [1, 3, 5, 10, 15, 16, 20, 24, 25, 30].reverse()
        const min = getMinBeetlesTotalPart2(data, stamps);
        expect(min).toBe(10)
    })

    test('Part 2', ()=> {
        const data = readTestData('./src/quest9/part2.txt');
        var stamps = [1, 3, 5, 10, 15, 16, 20, 24, 25, 30].reverse()
        const min = getMinBeetlesTotalPart2(data, stamps);
        expect(min).toBe(5035)
    })

    test('Part 3 - sample', ()=> {
        const data = readTestData('./src/quest9/part3.sample.txt');
        var stamps = [1, 3, 5, 10, 15, 16, 20, 24, 25, 30, 37, 38, 49, 50, 74, 75, 100, 101].reverse()
        expect(getPairs(data, stamps)).toBe(10449)
    })

    test('Part 3', ()=> {
        const data = readTestData('./src/quest9/part3.txt');
        var stamps = [1, 3, 5, 10, 15, 16, 20, 24, 25, 30, 37, 38, 49, 50, 74, 75, 100, 101].reverse()
        expect(getPairs(data, stamps)).toBe(148813)
    })
})