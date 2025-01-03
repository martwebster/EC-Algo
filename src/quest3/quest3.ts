import {Position} from "../utility/position";

export interface Land {
    pos: Pos,
    depth: number,
}

export namespace Land {
    export const init = (data: string[]): Land[][] => {
        return data.factory2D<Land>(
            (value, pos) => ({
                pos,
                depth: value == "#" ? 1 : 0
            })
        )
    }

    export const getLand =
        (land: Land[][], pos: Pos): Land => {
            if (pos.y >= land.length || pos.y < 0 ||
                pos.x >= land[pos.y].length || pos.x < 0) {
                return {
                    depth: 0,
                    pos
                }
            }
            return land[pos.y][pos.x]
        }
}

export const dig = (land: Land[][], diag: boolean = false): number => {
    let toDig: Pos[] = []
    const maxDepth = land.flat().maxOf( it=> it.depth )
    const positionsAtMax = land
        .scanAll()
        .filter(it => Land.getLand(land, it).depth == maxDepth)

    for (const pos of positionsAtMax) {
        const adjacent = Position.adjacent(pos, diag)
        if (adjacent
            .map(it => Land.getLand(land, it))
            .every(it => it.depth == maxDepth)) {
            toDig.push(pos)
        }
    }
    toDig.forEach(it => Land.getLand(land, it).depth = maxDepth+1)
    return toDig.length;
}

export const bigDig = (land: Land[][], diag: boolean = false) => {
    let dug = dig(land, diag);
    while (dug > 0) {
        dug = dig(land, diag)
    }
    return land.flat().sumOf(it => it.depth)
}
