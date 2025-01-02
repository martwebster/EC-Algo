export type Movement = (pos: Pos) => Pos;

export namespace Pos {
   export const up: Movement = (pos: Pos): Pos => ({ x: pos.x, y: pos.y - 1 })
   export const left: Movement = (pos: Pos): Pos => ({ x: pos.x - 1, y: pos.y })
   export const right: Movement = (pos: Pos): Pos => ({ x: pos.x + 1, y: pos.y })
   export const down: Movement = (pos: Pos): Pos => ({ x: pos.x, y: pos.y + 1 })
   export const upLeft: Movement = (pos: Pos): Pos => ({ x: pos.x - 1, y: pos.y - 1 })
   export const upRight: Movement = (pos: Pos): Pos => ({ x: pos.x + 1, y: pos.y - 1 })
   export const downLeft: Movement = (pos: Pos): Pos => ({ x: pos.x - 1, y: pos.y + 1 })
   export const downRight: Movement = (pos: Pos): Pos => ({ x: pos.x + 1, y: pos.y + 1 })

   export const toString = (pos: Pos): string => pos.x + ":" + pos.y

   export const find = (positions: Pos[], pos: Pos): Pos|undefined =>{
      return positions.find(it => it.x == pos.x && it.y == pos.y)
   }
   export const filter = (positions: Pos[], pos: Pos): Pos[] =>{
      return positions.filter(it => it.x == pos.x && it.y == pos.y)
   }
}


