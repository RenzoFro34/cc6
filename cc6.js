class Employee { 
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
   
    describe() {
        return "${this.name} works in the ${this.department} department";
    }
    }

class Managers extends Employee {
 constructor(name, department, teamSize) {
super(name, department);
this.teamSize = teamSize;}

describe() {
    return "${this.name} is the manager of ${this.teamSize} employees in the ${this.department} department";
}
 }

 const employees = [
    new employee("Genevieve", "Bakery"),
    new employee("Kevin", "Bakery"),
    new employee("Patricia", "Apparel"),
    new employee("Sam", "Apparel"),
    new employee("Penelope", "Produce")
    new employee("Tony", "Produce")
 ];

