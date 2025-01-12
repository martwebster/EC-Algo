import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {readTestData} from "../utility/fileHelper";
import {getWinningActionPlans, race, RacePlan, raceWithTrack, Track} from "./quest7";

describe('Quest 7', () => {
    test('Part 1 - sample', ()=> {
        const data = readTestData('./src/quest7/part1.sample.txt');
        const racePlans = RacePlan.create(data)
        expect(racePlans.length).toBe(4)
        const result = race(racePlans, 10)
        expect(result).toBe("BDCA")
    })

    test('Part 1', ()=> {
        const data = readTestData('./src/quest7/part1.txt');
        const racePlans = RacePlan.create(data)
        const result = race(racePlans, 10)
        expect(result).toBe("FGCEAIJKD")
    })

    test('Part 2 Sample', ()=> {
        const data = readTestData('./src/quest7/part1.sample.txt');
        const track= [
            "S+===",
            "-   +",
            "=+=-+"
            ]
        const parseTrack = Track.create(track)
        const racePlans = RacePlan.create(data)
        const result = raceWithTrack(parseTrack, racePlans,1)
        expect (result).toBe("DCBA")

        raceWithTrack(parseTrack, racePlans,10)
    })

    test('Part 2', ()=> {
        const data = readTestData('./src/quest7/part2.txt');
        const track = readTestData('./src/quest7/part2.track.txt');

        const parseTrack = Track.create(track)
        expect(parseTrack.length).toBe(156)
        const racePlans = RacePlan.create(data)
        const result = raceWithTrack(parseTrack, racePlans,10)
        expect (result).toBe("IGBAHJFEC")
        raceWithTrack(parseTrack, racePlans,10)
    })

    test('Part 3', ()=> {
        const data = readTestData('./src/quest7/part3.txt');
        const track = readTestData('./src/quest7/part3.track.txt');

        const parseTrack = Track.create(track)
        expect(parseTrack.length).toBe(340)
        const racePlans = RacePlan.create(data)
        const result = getWinningActionPlans(parseTrack, racePlans[0],11)
        expect (result).toBe(3924)
    })
})