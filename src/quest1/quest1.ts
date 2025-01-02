export const portionForMonster = (monster: string, uplift: number = 0): number =>{
    switch (monster){
        case "A":
            return uplift;
        case "B":
            return 1 + uplift;
        case "C":
            return 3 + uplift;
        case "D":
            return 5 + uplift;
        default:
            return 0
    }
}

// part 1
export const getPortions = (line: string): number | undefined => {
    return line.split("").sumOf(monster => portionForMonster(monster))
}

// part 2
export const getPortionsPairs = (line: string): number | undefined => {
    let portions = 0;

    for (const monsters of line.chunk(2)) {
        const gaps = monsters.split("").countOf(it=> it =="x")
        let uplift = 1-gaps
        portions += monsters.split("").sumOf(monster=> portionForMonster(monster, uplift))
    }
    return portions;
}

// part 3
export const getPortionsThrees = (line: string): number | undefined => {
    return line.chunk(3).sumOf(monsters =>{
        const gaps = monsters.split("").countOf(it=> it =="x")
        let uplift = 2-gaps;
        return monsters.split("").sumOf(monster=> portionForMonster(monster, uplift))
    })
}
