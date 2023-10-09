class Person{
    public personID:number;
    private greetings:string;
    protected refMemberId:number;

    constructor(a:number){
        this.personID = a;
        this.greetings = "Welcome"
        this.refMemberId=300;
        console.log("personID: " + this.personID);
    }

    public createPerson():string{
        console.log("public createPerson method called");
        return this.greetings+ " with warm--->" + this.personID+"created" 
    }

    private testPrivate():string{
        return "I am private implementtion"
    }

    public testPreveledged():string{
        return this.testPrivate()
    }
}


class Student extends Person{
    public testChildMethod():string{
        return "child is creaated with memberId"+this.refMemberId
    }
}

let p = new Person(101);
let s=new Student(101);
console.log("call the public createPerson method"+ p.createPerson())
console.log("call preveledged method"+ p.testPreveledged())
console.log("call the child wit protected -->" +s.testChildMethod());

