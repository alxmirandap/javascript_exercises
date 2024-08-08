
function randomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max+1 - min))   
}

module.exports = {
    randomNumber
}