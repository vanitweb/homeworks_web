var array_counter =  function(array) {
	return "v massive naxoditsya " + array.length + " elementov!";
};

var multiplay = function(x, y) {
	return `${x} multiply ${y} pavno ${x*y}`; 
};

var some_value = 451;
//console.log(array_counter([1, 7, 99, 8, 45, 8]))
module.exports.array_counter = array_counter;
module.exports.some_value = some_value;
module.exports.multiplay = multiplay;