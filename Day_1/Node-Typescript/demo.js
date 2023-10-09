var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(a) {
        this.personID = a;
        this.greetings = "Welcome";
        this.refMemberId = 300;
        console.log("personID: " + this.personID);
    }
    Person.prototype.createPerson = function () {
        console.log("public createPerson method called");
        return this.greetings + " with warm--->" + this.personID + "created";
    };
    Person.prototype.testPrivate = function () {
        return "I am private implementtion";
    };
    Person.prototype.testPreveledged = function () {
        return this.testPrivate();
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.testChildMethod = function () {
        return "child is creaated with memberId" + this.refMemberId;
    };
    return Student;
}(Person));
var p = new Person(101);
var s = new Student(101);
console.log("call the public createPerson method" + p.createPerson());
console.log("call preveledged method" + p.testPreveledged());
console.log("call the child wit protected -->" + s.testChildMethod());
