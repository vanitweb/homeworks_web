function binSearch(mass, searchElem) {
	let len = mass.length;
	let middle = Math.floor(len/2);
	if(mass[middle] == searchElem) {
		return mass[middle];
	} else if(mass[middle] < searchElem) {
		return binSearch(mass.splice(middle, len - 1), searchElem);
	} else if(mass[middle] > searchElem) {
		return binSearch(mass.splice(0, middle), searchElem);
	}
	return -1;
}
