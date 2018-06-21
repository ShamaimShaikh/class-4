class Data
{
     name: string ;
     FatherName: string;
     class: number;
     LastClass: number;
     lastPassingMarks : number;
     rollNo: number;

    setData(sname: string, sFatherName: string,  sclass: number,  sLastClass: number, slastPassingMarks : number,  srollNo: number):void
    {
        this.name = sname ;
        this.FatherName = sFatherName;
        this.class = sclass;
        this.LastClass = sLastClass;
        this.lastPassingMarks = slastPassingMarks ;
        this.rollNo = srollNo ;

    }

    getName() :string
    {
        return this.name;
    }

    getFatherName() :string
    {
        return this.FatherName;
    }
    getClass() :number
    {
        return this.class;
    }

    getLastClass() :number
    {
        return this.LastClass;
    }

    getLastPassingMarks() :number
    {
        return this.lastPassingMarks; 
    }

    getRollNo() :number
    {
        return this.rollNo;
    }

  
    
}


//---------- module 2-----------

class Fees extends Data
{
    AdmissionFees: number;
    MothlyFees: number;
    ExtracirculumFees: number;
    GameFees: number;

    setFees(admFees: number, monthFees: number, extraFees: number, gmeFees: number): void
    {
       this.AdmissionFees = admFees;
       this.MothlyFees = monthFees;
       this.ExtracirculumFees = extraFees;
       this.GameFees = gmeFees;
    }

    getAdmissionFees() : number
    {
        return this.AdmissionFees;
    }

    getMothlyFees() : number
    {
        return this.MothlyFees;
    }
    getExtracirculumFees() : number
    {
        return this.ExtracirculumFees;
    }
    getGameFees() : number
    {
        return this.GameFees;
    }
}

//------------- module 3---------------
class marks extends Fees
{ 
    english: string
    physics: string

    setMarks(eng: string, phy: string) : void
    {
        this.english = eng
        this.physics = phy
    }

    getEng() : string
    {
        return this.english;
    }

    getPhy() : string
    {
        return this.physics
    }
}


//------------- mian body -----------------

var student1 = new marks();

student1.setData("nikamma", "uncle", 10, 9, 90, 22);
console.log("Student name : " + student1.getName());
console.log("Father name : " + student1.getFatherName());
console.log("Class name : " + student1.getClass());
console.log("Last Class : " + student1.getLastClass());
console.log("Last passing Marks : " + student1.getLastPassingMarks());
console.log("Roll number : " + student1.getRollNo() + "\n");

//---------- module 2--------------

student1.setFees(20000, 5000, 1000, 1000);
console.log("Admission Fees = " + student1.getAdmissionFees())
console.log("Mothly Fee = " + student1.getMothlyFees())
console.log("Extracirculum Fees = " + student1.getExtracirculumFees())
console.log("Game Fees = " + student1.getGameFees() + "\n")


//------------- module 3---------------

student1.setMarks("fail", "pass")
console.log("English Marks = " + student1.getEng())
console.log("Physics Marks = " + student1.getPhy())