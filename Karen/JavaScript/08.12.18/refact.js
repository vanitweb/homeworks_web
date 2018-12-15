function searchIndexMax(text, a, b) {
	for(let i = text.length - 1; i > 0; i--) {
		if(text[i] == a || text[i] == b) {
			return i;
		}
	}
	return -1;
}