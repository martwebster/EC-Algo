import {Position} from "../utility/position";

export interface Land {
    x: number,
    y: number
    depth?: number,
}

export namespace Land {
    export const init = (data: string[]): Land[][] => {
        const lands: Land[][] = []
        for (let y = 0; y < data.length; y++) {
            const row = data[y];
            const rowData: Land[] = []
            for (let x = 0; x < row.length; x++) {
                const letter = data[y].charAt(x)
                if (letter == "#") {
                    rowData.push({depth: 0, x, y})
                } else {
                    rowData.push({depth: undefined, x, y})
                }
            }
            lands.push(rowData)
        }
        return lands
    }
    export const getLand =
        (land: Land[][], pos: Pos): Land => {
            const undefinedLand = {
                value: undefined,
                x: pos.x,
                y: pos.y
            }
            if (pos.y >= land.length || pos.y < 0) {
                return undefinedLand
            }
            const result = land[pos.y][pos.x]
            if (result == undefined) {
                return undefinedLand
            }
            return result
        }
}

export const initDig = (land: Land[][]) => {
    land.flat().forEach((it: Land) => {
        if (it.depth == 0) {
            it.depth = 1
        }
    })
}

export const dig = (land: Land[][], depth: number, diag: boolean = false): number => {
    let nextLayer: Pos[] = []
    const positions = land
        .scanAll()
        .filter(it => Land.getLand(land, it).depth == depth - 1)

    for (const pos of positions) {
        const adjacent = Position.adjacent(pos, diag)
        if (adjacent
            .map(it => Land.getLand(land, it))
            .every(it => it.depth == depth - 1)) {
            nextLayer.push(pos)
        }

    }
    nextLayer.forEach(it => Land.getLand(land, it).depth = depth)
    return nextLayer.length;
}

export const bigDig = (land: Land[][], diag: boolean = false) => {
    initDig(land)
    let depth = 2;
    let dug = dig(land, depth, diag);
    while (dug > 0) {
        depth++
        dug = dig(land, depth, diag)
    }
    return land.flat().filter(it => it.depth != undefined).sumOf(it => it.depth!)

}
