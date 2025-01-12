const calculateBeetleCount = (ball: number, stamps: number[]) => {
    let left = ball;
    let stampsUsed = 0;
    while (left>0){
        const stamp = stamps.find( it => left >= it)
        stampsUsed++
        left = left - stamp!
    }
    return stampsUsed;
};

export const getMinBeetles = (data: string[], stamps:number[]): number =>{
    const balls = data.map( it => Number(it))
    return balls.sumOf( it => calculateBeetleCount(it, stamps))
}

const nextNumber = (numberToGet: number, stamps: number[]) : number[] =>{
    return stamps.filter( stamp => stamp<= numberToGet).map( stamp => numberToGet - stamp)
}

export const getMinBeetlesTotalPart2 = (data: string[], stamps:number[]): number =>{
    const balls = data.map( it => Number(it))
    return balls.sumOf( it => getMinBeetlesSearch(it, stamps))
}

export const getMinBeetlesSearch = (numberToGet : number, stamps: number[]): number =>{
    let left = numberToGet;
    let stampsUsed = 0;
    while (left>1500){
        const stamp = stamps.find( it => left >= it)
        stampsUsed++
        left = left - stamp!
    }
    let numbers: number[] = [left];

    while (numbers.find(it => it==0)== undefined){
        numbers = numbers.flatMap( it => nextNumber(it, stamps))
        numbers = Array.from( new Set( numbers ) )
        stampsUsed++
    }
    return stampsUsed
}

export const getPair = (toGet: number, stamps: number[]): number =>{
    let first;
    let second;
    if (toGet %2 ==0){
        // even
        first = toGet/2;
        second = toGet/2
    } else{
        first = Math.floor(toGet / 2)+1
        second = Math.floor(toGet / 2)
    }
    let diff = first - second;
    let minBeatles = Number.MAX_VALUE;
    while (diff <= 100){
        const firstResult = getMinBeetlesSearch(first, stamps)
        const secondResult = getMinBeetlesSearch(second, stamps)
        const beetles = firstResult + secondResult
        if (beetles< minBeatles){
            minBeatles = beetles
        }
        first = first + 1;
        second = second -1;
        diff = first - second;
    }
    return minBeatles
}

export const getPairs = (data: string[], stamps:number[]): number =>{
    const balls = data.map( it => Number(it))
    return balls.sumOf( it => getPair(it, stamps))
}