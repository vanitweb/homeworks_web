class University {
    constructor(name, library) {
        this.name = name;
        this.library = library;
    }
}
class Faculty extends University {
    constructor(name, audience) {
        super('YSU', 'Gradaran');
        this.name = name;
        this.audience = audience;
    }
}
class Deanoffice extends Faculty {
    constructor(name, audience, dean) {
        super('YSU', 'FizMath');
        this.name = name;
        this.audience = audience;
        this.dean = dean;
    }
}
const university = new University('YSU', 'books');
const faculty = new Faculty('mathmex', 225);
const deanoffice = new Deanoffice('dekanat', 102, 'Antonyan');

console.log(university);
console.log(faculty);
console.log(deanoffice);


 
