//es5 class inheritance 
function Hamalsaran(name, usanoxneri_qanak) {
	this.name = name;
	this.usanoxneri_qanak;
}
Hamalsaran.prototype.Info = function()
{
	return(name, usanoxneri_qanak);
}
Hamalsaran.prototype.Fakultet;
function Fakultet(name, ambionneri_qnak) {
	this.name = name;
	this.ambionneri_qnak = ambionneri_qnak;
	this.info = function()
	{
		return (name, ambionneri_qnak);
	}
}
Fakultet.prototype.Ambion;
function Ambion(dasaxosneri_qanak) {
	this.dasaxosneri_qanak = dasaxosneri_qanak;
	this.info = function()
	{
		return (dasaxosneri_qanak);
	}
}
Fakultet.prototype.Lsaran;
function Lsaran(qanak) {
	this.qanak = qanak;
	this.info = function()
	{
		return qanak;
	}
}
Fakultet.prototype.dekanat;
function dekanat(ashxatoxneri_qanak) {
	this.ashxatoxneri_qanak = ashxatoxneri_qanak;
	this.info = function()
	{
		return ashxatoxneri_qanak;
	}
}
Dekanat.prototype.Dekan
function Dekan(name , gitakan_astichan) {
	this.name = name;
	this.gitakan_astichan = gitakan_astichan;
	this.info = function()
	{
		return (name, gitakan_astichan)
	}
}

//es6 class inheritance 
class Hamalsaran {
	constructor(name, usanoxneri_qanak) 
	{
		this.name = name;
		this.usanoxneri_qanak;
	}
	info()
	{
		return(name, usanoxneri_qanak);
	}
}
class Fakultet extends Hamalsaran {
	constructor(name, ambionneri_qnak)
	{
		this.name = name;
		this.ambionneri_qnak = ambionneri_qnak;
	}
	info()
	{
		return (name, ambionneri_qnak);
	}
}
class Ambion extends Fakultet
{
	constructor(dasaxosneri_qanak)
	{
		this.dasaxosneri_qanak = dasaxosneri_qanak;
	}
	info()
	{
		return (dasaxosneri_qanak);
	}
}
class Lsaran extends Fakultet
{
	constructor(qanak)
	{
		this.qanak = qanak;
	}
	this.info = function()
	{
		return qanak;
	}
}
class Dekanat extends Fakultet
{
	constructor(ashxatoxneri_qanak)
	{
		this.ashxatoxneri_qanak = ashxatoxneri_qanak;
	}
	info()
	{
		return ashxatoxneri_qanak;
	}
}
class Dekan extends Dekanat
{
	constructor(name , gitakan_astichan)
	{
		this.name = name;
		this.gitakan_astichan = gitakan_astichan;
	}
	info = function()
	{
		return (name, gitakan_astichan);
	}
}