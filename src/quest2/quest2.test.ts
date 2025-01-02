import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import {countRunicTokens, countRunicWordGrid, countRunicWords} from "./quest2";
import {readTestData} from "../utility/fileHelper";

describe('Quest 2', () => {

    test('sample', () => {
        const words = "THE,OWE,MES,ROD,HER".split(",")
        const sentence = "AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE"
        expect (countRunicWords(sentence, words)).toBe(4)
        expect (countRunicWords("THE FLAME SHIELDED THE HEART OF THE KINGS", words)).toBe(3)
        expect (countRunicWords("POWE PO WER P OWE R", words)).toBe(2)
        expect (countRunicWords("THERE IS THE END", words)).toBe(3)
    })

    test('part 1', () => {
        const data = "CABACACAACAABBCCBBAAACBAACBCACBAACAABBBCCCACCCCABBABABBBCAABBBBBAACBAABAACAAACBCAABBABAACBBBBABCBCBACBBABAABBCAAACBABBABBCCAAAABBBABBBABACACCAAACABBCCABAABACBCBBBABBAABBBAACBCBCCBCBCBAABAABBCBBBBAACBBABBAAACABCABBCACCCCBBCBAACBCCCAAAACCBACBAACBBACCBCABAAABCABBCBACACBBBABCABBCCCACBBACBABBAACCABCCCABABCBBBBCBABCACBCCCABCBCCABCABCACCCCAAACCCBBBCABCBACABABBBCBBCABBBCCCBABCABBCBAACABBBBAACBBAACABCACBBCCBCBACCCABCBABCCCBCBACCAABCBABACCACBABCCABABCCCCCCACBAAACACCACCCBBBCABCBCCBCCAAABCAACAAABCACCAAABCBAACBCBBCACBBAACCCACCAACBBABCABCABAABCCCCACCABACBCCCBBABABABCBCABBAAAAACAAAAACBBCABCCBCCCAACACCAACCACABBCCBAABAABBCCACACBAABBAAACBCBCAABCAABABABCAACACABBCACBBBAAACBBCBCCBBBCBCCAAACBABCBACCCCBCBABAACCBBBABCCABBAACCBABCABCAACBBBBBBCCCBCCCBABCCABACBAABBCBBBACBCBABCBBCBCCAACCCCBBCBBAABCBCAABCBABCBCBBAACBCBABABCBBAABBBABACCCBABBABBABCCBBABCBCBCACABBABBAABABBACBCCAABACABBCCCABABCCBCCCCBABABACCAACBCCBACCCCCAABBBACBBBCAABCACABCABAAACBCBBACBABBBABBBBBBCBABBCBABCACCBCCCABBCACCBABCCACAACACBAAAABCAABAAAACABAC"
        //  expect( getPortions(data)).toBe(1322)
        const words = "LOR,LL,SI,OR,T.,IS,LA".split(",")
        const sentence = "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM."
        expect(countRunicWords(sentence, words)).toBe(32)
    });

    test('sample 2', () => {
        const words = "THE,OWE,MES,ROD,HER,QAQ".split(",")
        const sentence = "AWAKEN THE POWE ADORNED WITH THE FLAMES BRIGHT IRE"
        expect (countRunicTokens([sentence], words)).toBe(15)
        expect (countRunicTokens(["THE FLAME SHIELDED THE HEART OF THE KINGS"], words)).toBe(9)
        expect (countRunicTokens(["POWE PO WER P OWE R"], words)).toBe(6)
        expect (countRunicTokens(["THERE IS THE END"], words)).toBe(7)
        expect (countRunicTokens(["QAQAQ"], words)).toBe(5)
        expect (countRunicTokens(["THEHT"], words)).toBe(5)
    })

    test('part2 - sample', () => {
        const data = readTestData('./src/quest2/part2.sample.txt');
        const words = data[0].substringAfter(":").split(",")
        const inscription = data.split("")[1]
        expect(countRunicTokens(inscription, words)).toBe(42)
    })

    test('part3 - sample', () => {
        const data = readTestData('./src/quest2/part3.sample.txt');
        const words = data[0].substringAfter(":").split(",")
        const inscription = data.split("")[1]
        //4893
        expect(countRunicWordGrid(inscription, words)).toBe(10)
    })

    test('part3 ', () => {
        const data = readTestData('./src/quest2/part3.txt');
        const words = data[0].substringAfter(":").split(",")
        const inscription = data.split("")[1]
        //4893
        expect(countRunicWordGrid(inscription, words)).toBe(11964)
    })
})
