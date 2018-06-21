var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmpData = /** @class */ (function () {
    function EmpData() {
    }
    EmpData.prototype.setData = function (empName, empFullName, fathrName, nic, Attendnce, allowance) {
        this.EmployeeName = empName;
        this.EmployeeFullName = empFullName;
        this.FatherName = fathrName;
        this.NicNo = nic;
        this.Attendence = Attendnce;
        this.OvertimeAllowance = allowance;
    };
    EmpData.prototype.getempName = function () {
        return this.EmployeeName;
    };
    EmpData.prototype.getEmployeeFullName = function () {
        return this.EmployeeFullName;
    };
    EmpData.prototype.getFatherName = function () {
        return this.FatherName;
    };
    EmpData.prototype.getNicNo = function () {
        return this.NicNo;
    };
    EmpData.prototype.getAttendence = function () {
        return this.Attendence;
    };
    EmpData.prototype.getOvertimeAllowance = function () {
        return this.OvertimeAllowance;
    };
    return EmpData;
}());
//------------- child smodule -----------------
var Salary = /** @class */ (function (_super) {
    __extends(Salary, _super);
    function Salary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Salary.prototype.setSalary = function (EmpFixsal, EmplAdvSal, EmplBonusAllow, EmpBonus_perMonth, EmplTax_perMonth) {
        this.EmployeeFixsalary = EmpFixsal;
        this.EmployeeAdvanceSalary = EmplAdvSal;
        this.EmployeeBonusAllowance = EmplBonusAllow;
        this.EmployeeBonus_perMonth = EmpBonus_perMonth;
        this.EmployeeTax_perMonth = EmplTax_perMonth;
    };
    Salary.prototype.getEmployeeFixsalary = function () {
        return this.EmployeeFixsalary;
    };
    Salary.prototype.getEmployeeAdvanceSalary = function () {
        return this.EmployeeAdvanceSalary;
    };
    Salary.prototype.getEmployeeBonusAllowance = function () {
        return this.EmployeeBonusAllowance;
    };
    Salary.prototype.getEmployeeBonus_perMonth = function () {
        return this.EmployeeBonus_perMonth;
    };
    Salary.prototype.getEmployeeTax_perMonth = function () {
        return this.EmployeeTax_perMonth;
    };
    Salary.prototype.totalSalary = function () {
        var sal = this.EmployeeFixsalary + this.EmployeeAdvanceSalary + this.EmployeeBonusAllowance + this.EmployeeBonus_perMonth - this.EmployeeTax_perMonth;
        return sal;
    };
    return Salary;
}(EmpData));
//------------------- main ----------------
var emp1 = new Salary();
emp1.setData("Shamaim", "Shamaim Shaikh", "father", 421013468943, "present", 1000);
console.log("Employee Name: " + emp1.getEmployeeFullName());
console.log("Employee's Father Name: " + emp1.getFatherName());
console.log("Employee Attendence: " + emp1.getAttendence());
console.log("Employee Over Time Allowance: " + emp1.getOvertimeAllowance());
//--------- voucher ------------
emp1.setSalary(35000, 20000, 4000, 1000, 500);
console.log("\n----------- voucher ------------\n");
console.log("Employee Name: " + emp1.getempName());
console.log("Employee Nic Number: " + emp1.getNicNo());
console.log("Employee Name:" + emp1.getEmployeeFixsalary());
console.log("Employee Advance Salary: " + emp1.getEmployeeAdvanceSalary());
console.log("Employee Bonus Allowance: " + emp1.getEmployeeBonusAllowance());
console.log("Employee Bonus per Month: " + emp1.getEmployeeBonus_perMonth());
console.log("Employee Tax per Month: " + emp1.getEmployeeTax_perMonth());
console.log("--------------------------------");
console.log("Total Salary = " + emp1.totalSalary());
