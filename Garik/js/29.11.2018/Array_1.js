//literal
let institut = {
    anun : "anun1",
    gradaran : "gradaran1",
    fakultet : {
        ambion : {
            lsaran : "lsaran1", 
            dekanat : {
                dekan : "dekan1",
                dasaxos : "dasaxos1",
            }
        }
    }
}
//console.log(institut)
new Oject
let institut = new Object();
institut.anun = "anun1";
institut.gradaran = "gradaran1";
institut.fakultet = new Object();
institut.fakultet.ambion = new Object();
institut.fakultet.ambion.lsaran = "lsaran1";
institut.fakultet.ambion.dekanat = new Object();
institut.fakultet.ambion.dekanat.dekan = "dekan1";
institut.fakultet.ambion.dekanat.dasaxos = "dasaxos1";
console.log(institut)
//constructor
function Dekanat(dekan, dasaxos){
    this.dekan = dekan;
    this.dasaxos = dasaxos;
}
function Ambion(lsaran, dekan, dasaxos){
    this.lsaran = lsaran;
    this.dekanat = new Dekanat(dekan, dasaxos);
}
function Fakultet(lsaran, dekan, dasaxos){
    this.ambion = new Ambion(lsaran, dekan, dasaxos);
}
function Institut (anun, gradaran, lsaran, dekan, dasaxos){
    this.anun = anun;
    this.gradaran = gradaran;
    this.fakultet = new Fakultet(lsaran, dekan, dasaxos);
}