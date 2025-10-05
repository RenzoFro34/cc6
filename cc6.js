class Employee { 
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
   
    describe() {
        return `${this.name} works in the ${this.department} department`;
    }
    }

class Manager extends Employee {
 constructor(name, department, teamSize) {
super(name, department);
this.teamSize = teamSize;}

describe() {
    return `${this.name} is the manager of ${this.teamSize} employees in the ${this.department} department`;
}
 }

 const employees = [
    new Employee("Genevieve", "Bakery"),
    new Employee("Chris", "Bakery"),
    new Employee("Patricia", "Apparel"),
    new Employee("Sam", "Apparel"),
    new Employee("Penelope", "Produce"),
    new Employee("Alex", "Produce")
 ];

const managers = [
    new Manager("Karla", "Bakery", 12),
    new Manager("Jerry", "Apparel",11),
    new Manager("Harrison", "Produce", 34)
];

class Company {
    constructor() {
        this.employees = []};
       addEmployee(employee) {
        this.employees.push(employee);
       };
    listEmployees() {
    this.employees.forEach(Employee => {console.log(Employee.describe())});}
};

const company = new Company()
employees.forEach(Employee => company.addEmployee(Employee));
managers.forEach(Manager => company.addEmployee(Manager));

company.listEmployees();