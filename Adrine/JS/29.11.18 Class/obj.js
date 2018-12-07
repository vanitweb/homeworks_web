// Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ University-> name, gradaran, 
 let university = new Object();
 let faculty = new Object();
university.faculty = new Object();


university.name = 'YSU';
university.library = 'Gradaran';
university.faculty = 'Matmex';
university.faculty.lesson = 'Mathequations';
university.faculty.deanoffice = 'Mathematical equations';
university.faculty.dean = 'Avagyan';
console.log(university);
console.log(university.faculty);
