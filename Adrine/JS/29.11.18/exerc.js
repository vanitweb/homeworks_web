class University {
    constructor(name, library) {
        this.name = name;
        this.library = library;
    }
}
class Faculty extends University{
	constructor(name,audience){
		super(name);
		this.audience = audience;
	}
}
class Deansoffice extends Faculty{
	constructor(name,audience,dean){
		super();
		this.name = name;
		this.audience = audience;
		this.dean = dean;
	}
}
let University = new university('YSU','books');
let Faculty = new faculty('mathmex', 225);
let Deansoffice = new deansoffice('dekanat', 102, 'Antonyan' );




 
