//Task - Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, fakultet->ambion,lsaran, dekanat->dekan ashxatoxner 
//1.class-i mijocov
console.log("********************************class*******************************************");
class Institut {
    constructor(name, gradaran) {
        this.name = name;
        this.gradaran = gradaran;
    }
}
class Facultet extends Institut {
    constructor(facAnun, qanak1, qanak2, name, gradaran) {
        super(name, gradaran);
        this.facAnun = facAnun;
        this.ambionneriQanak = qanak1;
        this.ararkaneriQanak = qanak2;
    }
}
class Dekanat extends Facultet {
    constructor(dekan, qanak, facAnun, qanak1, qanak2, name, gradaran) {
        super(facAnun, qanak1, qanak2, name, gradaran);
        this.dekan = dekan;
        this.ashxatoxneriqQanak = qanak;
    }
} 
class Usanoxner extends Facultet {
    constructor(anun, azganun, gnahatakan, tiv, facAnun, qanak1, qanak2, name, gradaran) {
        super(facAnun, qanak1, qanak2, name, gradaran);
        this.usanoxiAnun = anun;
        this.usanoxiAzganun = azganun;
        this.stacacGnahatakanner = gnahatakan;
        this.endunmanTaretiv = tiv;
    }
    getUsanox() {
        return "anun- " + this.usanoxiAnun + " azganun- " + this.usanoxiAzganun;
    }
    mog() {
        return this.stacacGnahatakanner /  this.ararkaneriQanak;
    }
    kurs() {
        return new Date() - this.endunmanTaretiv;
    }
}
let buh = new Institut("EPH", " EPH gradaran");
let facultet = new Facultet("IKM", 4, 10);
let dekanat = new Dekanat("V.Dumanyan", 5);
let usanox1 = new Usanoxner("Ani", "Karapetyan", 16, Date(2014,9,1));
let usanox2 = new Usanoxner("Suren", "Alaverdyan", 18, Date(2016,9,1));
console.log(buh);
console.log(facultet);
console.log(dekanat);
console.log(usanox1);
console.log(usanox2);
console.log(usanox1.getUsanox());
console.log(usanox1.mog());
console.log(usanox2.kurs()); 

//cnoxi parametrer@ chi @ndunum undefined e talis,inchu ????????

//2.function-i mijocov
console.log("********************************function*******************************************");
function Institut1(name, gradaran) {
    this.name = name;
    this.gradaran = gradaran;
}
function Facultet1(facAnun, qanak1, qanak2, name, gradaran) {
    Institut1.call(this, name, gradaran);
    this.facAnun = facAnun;
    this.ambionneriQanak = qanak1;
    this.ararkaneriQanak = qanak2;
}
function Dekanat1(dekan, qanak, facAnun, qanak1, qanak2, name, gradaran) {
    Facultet1.call(this, facAnun, qanak1, qanak2, name, gradaran);
    this.dekan = dekan;
    this.ashxatoxneriqQanak = qanak;
} 
function Usanoxner1(anun, azganun, gnahatakan, tiv, facAnun, qanak1, qanak2, name, gradaran) {
    Facultet1.call(this, facAnun, qanak1, qanak2, name, gradaran);
    this.usanoxiAnun = anun;
    this.usanoxiAzganun = azganun;
    this.stacacGnahatakanner = gnahatakan;
    this.endunmanTaretiv = tiv;
    this.getUsanox = function() {
        return "anun- " + this.usanoxiAnun + " azganun- " + this.usanoxiAzganun;
    }
    this.mog = function() {
        return this.stacacGnahatakanner /  this.ararkaneriQanak;
    }
    this.kurs = function() {
        return new Date() - this.endunmanTaretiv;
    }
}
Facultet1.prototype = Object.create(Institut1.prototype);
Facultet1.prototype.constructor = Facultet1;

Dekanat1.prototype = Object.create(Facultet1.prototype);
Dekanat1.prototype.constructor = Dekanat1;

Usanoxner1.prototype = Object.create(Facultet1.prototype);
Usanoxner1.prototype.constructor = Usanoxner1;

let buh1 = new Institut1("EPH", " EPH gradaran");
let facultet1 = new Facultet1("IKM", 4, 10, "EPH", " EPH gradaran");
let dekanat1 = new Dekanat1("V.Dumanyan", 5, "IKM", 4, 10, "EPH", " EPH gradaran");
let usanox11 = new Usanoxner1("Ani", "Karapetyan", 16, Date(2014,9,1), "IKM", 4, 10, "EPH", " EPH gradaran");
let usanox22 = new Usanoxner1("Suren", "Alaverdyan", 18, Date(2016,9,1), "IKM", 4, 10, "EPH", " EPH gradaran");
console.log(buh1);
console.log(facultet1);
console.log(dekanat1);
console.log(usanox11);
console.log(usanox22);
console.log(usanox11.getUsanox());
console.log(usanox11.mog());
console.log(usanox22.kurs());

