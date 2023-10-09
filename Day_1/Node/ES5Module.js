var Person = function () {

}

Person.prototype.sayHello = () =>{
    return "Hello from es5"
}


Person.prototype.sayHi = () =>{
    return "Hi from es5"
}


module.exports = Person;