var person ={
    fName:"Preet",
    lName:"Patel"
};
console.log(person.fName+" "+person.lName);
var personJSONString = JSON.stringify(person);

console.log(personJSONString.fName);//This won't work
console.log(personJSONString);
var personFromString= JSON.parse(personJSONString);
console.log(personFromString.fName+' '+personFromString.lName);