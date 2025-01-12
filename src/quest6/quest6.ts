
export const buildTree = (data: string[]): Map<string, string[]> =>{
    const tree = new Map<string, string[]>()
    data.forEach((item) => {
        const node = item.substringBefore(":")
        const children = item.substringAfter(":").split(",")
        tree.set(node, children)
    })
    return tree
}

const followNode = (tree: Map<string, string[]>, path: string): string[] => {
    const node = path.substringAfterLast(":")

    let children = tree.get(node)
    if (children == undefined){
        children = []
    }
    children = children.filter( it => path.indexOf(":"+it)==-1)
    return children.map( child => path + ":" + child)
};

export const getPaths= (tree : Map<string, string[]>, node: string): string[] =>{
    const result : string[] = []
    let nodes = [":" + node];
    while (nodes.length > 0){
        nodes = nodes.flatMap(it => followNode(tree, it))
        nodes.filter(it => it.endsWith("@")).forEach(it => {result.push(it)})
        nodes = nodes.filter( it => !it.endsWith("@"))
    }
    return result;
}

export const getMinPath= (tree : Map<string, string[]>, firstchar: boolean = false): string =>{
    const result = getPaths(tree, "RR")
    const lengths = result.map( it => it.length).groupByCount();
    const unique = lengths.filter( it => it[1] ==1).first()[0]

    const minResult = result.find(it => it.length==unique)!
    if (firstchar){
        return minResult.split(":").map(it => it[0]).join("")
    }
    return minResult.split("").filter(it => it != ":").join("")
}
