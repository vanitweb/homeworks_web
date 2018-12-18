function University(name, library) {
    this.name = name;
    this.library = library;
}

function Faculty(name, library, deanoffice, lesson, ) {
    University.call(this, name, library);
    this.deanoffice = deanoffice;
    this.lesson = lesson;
}
Faculty.prototype = Object.create(University.prototype);
Faculty.prototype.constructor = Faculty;

function Deanoffice(name, library, deanoffice, lesson, assistent) {
    Faculty.call(this, name, library, deanoffice, lesson);
    this.assistent = assistent;
}
Deanoffice.prototype = Object.create(Faculty.prototype);
Deanoffice.prototype.constructor = Deanoffice;

const university = new University('YSU', 'Gradaran');
const faculty = new Faculty('YSU', 'Gradaran', 'Math', 'mathequations');
const deanoffice = new Deanoffice('YSU', 'Gradaran', 'Math', 'mathequations', 'Avagyan');
console.log(university);
console.log(faculty);
console.log(deanoffice);