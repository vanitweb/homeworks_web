function matrix(m, n) {
    var result = []
    for(var i = 0; i < n; i++) {
        result.push(new Array(m).fill('x'))
    }
    return result
}
console.log(matrix(3,3))