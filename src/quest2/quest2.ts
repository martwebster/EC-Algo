export interface Cell {
    letter: string;
    symbol: boolean
}

const countRunicWord = (word: string, symbols: string[]): number => {
    return symbols.countOf(symbol => word.includes(symbol))
}

export const countRunicWords = (sentence: string, rustic: string[]): number => {
    return sentence.split(" ").sumOf(word => countRunicWord(word, rustic));
}

const populateSymbols = (cells: Cell[], ruins: string[], wrap: boolean): void => {
    const sentence = cells.map(it => it.letter).join("")
    for (let startPos = 0; startPos < cells.length; startPos++) {
        // this would be soo much easier if typescript had indexesOf
        let current = sentence.substring(startPos)
        if (wrap) {
            current = current + sentence
        }
        for (const ruin of ruins) {
            if (current.startsWith(ruin)) {
                for (let j = startPos; j <= startPos + ruin.length - 1; j++) {
                    cells[j % sentence.length].symbol = true;
                }
            }
        }
    }
}
const initCells = (sentence: string): Cell[] => {
    let symbols: Cell[] = [];
    for (let i = 0; i < sentence.length; i++) {
        symbols.push({
            letter: sentence.charAt(i),
            symbol: false
        })
    }
    return symbols;
}
// part 2
export const countRunicWordBi = (sentence: string, rustic: string[]): number => {
    let cells = initCells(sentence);

    const reversed = rustic.map(item => item.reverse())
    const ruins = [...rustic, ...reversed]

    populateSymbols(cells, ruins, true)
    return cells.countOf(it => it.symbol)
}

export const countRunicTokens = (inscription: string[], rustic: string[]): number => {
    return inscription.sumOf(it => countRunicWordBi(it, rustic));
}

//part 3
export const countRunicWordGrid = (sentences: string[], runicSymbols: string[]): number => {
    let grid = sentences.map(sentence => initCells(sentence))

    const reversed = runicSymbols.map(item => item.reverse())
    const ruins = [...runicSymbols, ...reversed]

    // for each row
    for (let row = 0; row < grid.length; row++) {
        populateSymbols(grid[row], ruins, true)
    }
    // for each column
    for (let col = 0; col < grid[0].length; col++) {
        const colCells = grid.map(it => it[col]);
        populateSymbols(colCells, ruins, false)
    }
    return grid.flat().countOf(cell => cell.symbol)
}