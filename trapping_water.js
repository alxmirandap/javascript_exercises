let minWall = (previous, current) => {
    if (!previous) return 0
    return Math.min(previous, current)
}

let maxWall = (previous, current) => {
    if (!previous) return current
    return Math.max(previous, current)
}

let sum = (array) => {
    let cumulativeSum = 0
    for (const element of array) {
        cumulativeSum += element
    }
    return cumulativeSum
}

function calculateWallHeight(input) {
    let wall = []
    for (const index in input.slice(0, -1)) {
        wall.push(maxWall(wall[index-1], input[index]))
    }
    wall.unshift(0)

    return wall
}


function calculate(input) {
    let leftwall = calculateWallHeight(input)
    
    let reversedInput = input.toReversed()
    let rightwall = calculateWallHeight(reversedInput)
    rightwall.reverse()

    let capacity = []
    for (const index in input) {
        capacity[index] = Math.max(0, minWall(leftwall[index], rightwall[index]) - input[index])
    }

    return sum(capacity)
}

module.exports = {
    calculate
}