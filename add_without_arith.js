function add(n1, n2) {        
    return (n1 ^ n2) + ((n1 & n2) << 1)
}


module.exports = {
    add
}