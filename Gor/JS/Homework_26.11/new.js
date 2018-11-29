//Homeworks 24.11.2018
//Create object with new Object()
console.log("**********************************************************************");
let Institut = new Object();
Institut.name = 'VSU';
Institut.library = 45000;
Institut.fakultet = new Object();
Institut.fakultet.name = 'Banasirakan';
Institut.fakultet.ambion = new Object();
Institut.fakultet.ambion.name = "Hayoc lezvi ev grakanutyan ambion";
Institut.fakultet.ambion.lsaran = 58;
Institut.fakultet.ambion.dasaxos = new Object();
Institut.fakultet.ambion.dasaxos.name = 'Gayane';
Institut.fakultet.ambion.dasaxos.surname = 'Hovhannisyan';
Institut.fakultet.ambion.dasaxos.age = 30;
Institut.fakultet.ambion.dasaxos.ararka = 'Ruseren';
Institut.fakultet.dekanat = new Object();
Institut.fakultet.dekanat.dekan = new Object();
Institut.fakultet.dekanat.dekan.name = 'Albert';
Institut.fakultet.dekanat.dekan.surname = 'Poghosyan';
Institut.fakultet.dekanat.dekan.age = 53;
Institut.fakultet.dekanat.dekan.ararka = 'Hayoc lezu ev grakanutyun';
Institut.fakultet.dekanat.ashxatox = new Object();
Institut.fakultet.dekanat.ashxatox.name = 'Naira';
Institut.fakultet.dekanat.ashxatox.surname = 'Gusenkova';
Institut.fakultet.dekanat.ashxatox.age = 32;
Institut.fakultet.dekanat.ashxatox.hastiq = 'operator';
console.log(Institut);