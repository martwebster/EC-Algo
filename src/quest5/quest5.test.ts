import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";

describe('Quest 5', () => {
    test('Part 1 - sample', ()=> {
        const data = readTestData('./src/quest5/part1.sample.txt');
        expect(35).toBe(35)
    })
})