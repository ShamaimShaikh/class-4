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
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.setData = function (sname, sFatherName, sclass, sLastClass, slastPassingMarks, srollNo) {
        this.name = sname;
        this.FatherName = sFatherName;
        this["class"] = sclass;
        this.LastClass = sLastClass;
        this.lastPassingMarks = slastPassingMarks;
        this.rollNo = srollNo;
    };
    Data.prototype.getName = function () {
        return this.name;
    };
    Data.prototype.getFatherName = function () {
        return this.FatherName;
    };
    Data.prototype.getClass = function () {
        return this["class"];
    };
    Data.prototype.getLastClass = function () {
        return this.LastClass;
    };
    Data.prototype.getLastPassingMarks = function () {
        return this.lastPassingMarks;
    };
    Data.prototype.getRollNo = function () {
        return this.rollNo;
    };
    return Data;
}());
//---------- module 2-----------
var Fees = /** @class */ (function (_super) {
    __extends(Fees, _super);
    function Fees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fees.prototype.setFees = function (admFees, monthFees, extraFees, gmeFees) {
        this.AdmissionFees = admFees;
        this.MothlyFees = monthFees;
        this.ExtracirculumFees = extraFees;
        this.GameFees = gmeFees;
    };
    Fees.prototype.getAdmissionFees = function () {
        return this.AdmissionFees;
    };
    Fees.prototype.getMothlyFees = function () {
        return this.MothlyFees;
    };
    Fees.prototype.getExtracirculumFees = function () {
        return this.ExtracirculumFees;
    };
    Fees.prototype.getGameFees = function () {
        return this.GameFees;
    };
    return Fees;
}(Data));
//------------- module 3---------------
var marks = /** @class */ (function (_super) {
    __extends(marks, _super);
    function marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    marks.prototype.setMarks = function (eng, phy) {
        this.english = eng;
        this.physics = phy;
    };
    marks.prototype.getEng = function () {
        return this.english;
    };
    marks.prototype.getPhy = function () {
        return this.physics;
    };
    return marks;
}(Fees));
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
console.log("Admission Fees = " + student1.getAdmissionFees());
console.log("Mothly Fee = " + student1.getMothlyFees());
console.log("Extracirculum Fees = " + student1.getExtracirculumFees());
console.log("Game Fees = " + student1.getGameFees() + "\n");
//------------- module 3---------------
student1.setMarks("fail", "pass");
console.log("English Marks = " + student1.getEng());
console.log("Physics Marks = " + student1.getPhy());
