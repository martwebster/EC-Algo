// part 1
export const build= (blockCount: number): number =>{
    let width = 1;

    let blocksLeft = blockCount - 1;

    while (blocksLeft> 0) {
        const thickness = 1;
        width = width + 2
        const layer = width * thickness;
        blocksLeft = blocksLeft - layer
    }
    return Math.abs(blocksLeft) * width
}

export const build2= (blockCount: number, priests: number, accolates: number): number =>{
    let width = 1;

    let blocksLeft = blockCount - 1;
    let thickness = 1;

    while (blocksLeft> 0) {
        thickness = (thickness * priests) % accolates
        width = width + 2
        const layer = width * thickness;
        blocksLeft = blocksLeft - layer
    }
    return Math.abs(blocksLeft) * width
}

export const build3= (blockCount: number, highPriests: number, accolates: number): number =>{
    let width = 1;

    let blocksLeft = blockCount - 1;
    let thickness = 1;

    let layerThickness: number[] = [1];
    while (blocksLeft> 0) {
        width = width + 2
        thickness = ((thickness * highPriests) % accolates) + accolates

        const blocksInLayer = width * thickness;
        blocksLeft = blocksLeft - blocksInLayer
        layerThickness.push(thickness)
    }

    let totalToRemove = 0;
    for (let col = 0; col < width; col++) {
        const midCol = Math.floor(width/2)
        const elementToStartFrom = Math.abs(col - midCol)
        const height = layerThickness.slice(elementToStartFrom).sum()

        let toRemove = ((highPriests * width) * height) % accolates;
        if (col ==0 || col == width-1){
            toRemove = 0;
        }
        totalToRemove = totalToRemove + toRemove
    }
    return Math.abs(blocksLeft + totalToRemove)
}