function func(s, a, b) {
	if (s.match(/^$/)) {
	  return -1;
	}
	if (s.lastIndexOf(a) === -1 && s.lastIndexOf(b) === -1) {
		return -1;
	}
	if (s.lastIndexOf(a) !== -1) {
		if (s.lastIndexOf(b) === -1) {
			return s.lastIndexOf(a);
		}
	}else if (s.lastIndexOf(b) !== -1){
		return s.lastIndexOf(b);
	}
}