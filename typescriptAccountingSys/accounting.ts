class EmpData
{
    EmployeeName: string
    EmployeeFullName: string
    FatherName: string
    NicNo: number
    Attendence: string
    OvertimeAllowance : number

    setData (empName: string, empFullName: string, fathrName: string, nic: number, Attendnce: string, allowance: number) :void
    {
        this.EmployeeName = empName
        this.EmployeeFullName = empFullName
        this.FatherName = fathrName
        this.NicNo = nic
        this.Attendence = Attendnce
        this.OvertimeAllowance = allowance
        
    }

    getempName () : string
    {
        return this.EmployeeName
    }
    getEmployeeFullName() : string
    {
        return this.EmployeeFullName
    }
    getFatherName() : string
    {
        return this.FatherName
    }
    getNicNo() : number
    {
        return this.NicNo
    } 
     getAttendence() : string
    {
        return this.Attendence
    }  
    getOvertimeAllowance() : number
    {
        return this.OvertimeAllowance
    }
}


//------------- child smodule -----------------

class Salary extends EmpData
{
    EmployeeFixsalary: number
    EmployeeAdvanceSalary: number
    EmployeeBonusAllowance: number
    EmployeeBonus_perMonth: number
    EmployeeTax_perMonth: number
                 
    setSalary( EmpFixsal: number, EmplAdvSal: number,EmplBonusAllow: number, EmpBonus_perMonth: number, EmplTax_perMonth: number) :void
    {
        this.EmployeeFixsalary = EmpFixsal
        this. EmployeeAdvanceSalary = EmplAdvSal
        this.EmployeeBonusAllowance = EmplBonusAllow
        this.EmployeeBonus_perMonth = EmpBonus_perMonth
        this.EmployeeTax_perMonth = EmplTax_perMonth
    }

    getEmployeeFixsalary(): number
    {
        return this. EmployeeFixsalary
    }
    
    getEmployeeAdvanceSalary(): number
    {
        return this.EmployeeAdvanceSalary
    }
    
    getEmployeeBonusAllowance(): number
    {
        return this.EmployeeBonusAllowance
    }
    
    getEmployeeBonus_perMonth(): number
    {
        return this.EmployeeBonus_perMonth
    }
    
    getEmployeeTax_perMonth(): number
    {
        return this.EmployeeTax_perMonth
    }

    totalSalary() : number
    {
        var sal = this.EmployeeFixsalary + this.EmployeeAdvanceSalary + this.EmployeeBonusAllowance + this.EmployeeBonus_perMonth - this.EmployeeTax_perMonth
        return sal 
    }
}


//------------------- main ----------------

var emp1 = new Salary()
emp1.setData("Shamaim", "Shamaim Shaikh", "father", 421013468943, "present", 1000)
console.log("Employee Name: " + emp1.getEmployeeFullName())
console.log("Employee's Father Name: " + emp1.getFatherName())
console.log("Employee Attendence: " + emp1.getAttendence())
console.log("Employee Over Time Allowance: " + emp1.getOvertimeAllowance())

//--------- voucher ------------

emp1.setSalary(35000, 20000, 4000, 1000, 500)

console.log("\n----------- voucher ------------\n" )
console.log("Employee Name: " + emp1.getempName())
console.log("Employee Nic Number: " + emp1.getNicNo())
console.log("Employee Name:" + emp1.getEmployeeFixsalary())
console.log("Employee Advance Salary: " + emp1.getEmployeeAdvanceSalary())
console.log("Employee Bonus Allowance: " + emp1.getEmployeeBonusAllowance())
console.log("Employee Bonus per Month: " + emp1.getEmployeeBonus_perMonth())
console.log("Employee Tax per Month: " + emp1.getEmployeeTax_perMonth())
console.log("--------------------------------")
console.log("Total Salary = " + emp1.totalSalary())



