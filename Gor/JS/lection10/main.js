//18.11.2018 classwork
//Map, Set tiper
let people = [
	{
		name: 'Gor',
		surname: 'Manukyan',
		age: 25,
		email: 'gorman93@mail.ru',
		id: 1111111111111,
	},
	{
		name: 'David',
		surname: 'Manukyan',
		age: 27,
		email: 'davman91@mail.ru',
		id: 222222222222222,
	}
];
let job = new Map();
job.set(people[0],{
	jobTitle: "Net Admin",
	salary: 90000,
	experience: 3,
});
function isEmployed(person) {
	return job.has(person);
}
function employmend(person) {
	isEmployed(person)?console.log(job.get(person)): console.log("tvyal ogtater@ chi ashxatum:");
}
console.log(isEmployed(people[0]));
employmend(people[1]);