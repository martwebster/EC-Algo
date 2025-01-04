import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";

describe('Quest x', () => {
    test('Part 1 - sample', ()=> {
        const data = readTestData('./src/questx/part1.sample.txt');
        expect(35).toBe(35)
    })
})