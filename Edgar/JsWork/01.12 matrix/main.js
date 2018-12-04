let matrix = function matrix(m = 3, n = 3) {
    var result = []
    for(var i = 0; i < n; i++) {
        result.push(new Array(m).fill(' '))
		
    }
    return result
}
console.log(matrix(3,3));