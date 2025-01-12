import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {build, build2, build3} from "./quest8";

describe('Quest 8', () => {
    test('Part 1 - sample', ()=> {
        expect(build(13)).toBe(21)
    })

    test('Part 1', ()=> {
       expect(build(4098913)).toBe(6931888)
    })

    test('Part 2 - sample', ()=> {
        expect(build2(50, 3,5)).toBe(27)
    })

    test('Part 2', ()=> {
        expect(build2(20240000, 378, 1111)).toBe(106887550)
    })

    test('Part 3 - sample', ()=> {
        expect(build3(160, 2,5)).toBe(162)
    })

    test('Part 3', ()=> {
        expect(build3(202400000, 991737, 10)).toBe(41082)
    })
})