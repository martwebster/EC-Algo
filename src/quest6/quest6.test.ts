import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";
import {buildTree, getMinPath, getPaths} from "./quest6";

describe('Quest 6', () => {
    test('Part 1 - sample', ()=> {
        const data = readTestData('./src/quest6/part1.sample.txt');
        const tree = buildTree(data)
        expect(tree.size).toBe(9)
        //expect (getPaths(tree, "RR")).toStrictEqual([])
        expect (getMinPath(tree)).toBe("RRB@");
    })

    test('Part 1', ()=> {
        const data = readTestData('./src/quest6/part1.txt');
        const tree = buildTree(data)
        expect (getMinPath(tree)).toBe("RRXPPLPMGFBZ@");
    })

    test('Part 2', ()=> {
        const data = readTestData('./src/quest6/part2.txt');
        const tree = buildTree(data)
        expect (getMinPath(tree, true)).toBe("RRGXMFHJRT@");
    })

    test('Part 3', ()=> {
        const data = readTestData('./src/quest6/part3.txt');
        const tree = buildTree(data)
        expect (getMinPath(tree, true)).toBe("RQKZBPDZLJTS@");
    })
})