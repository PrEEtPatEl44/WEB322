/*//////////////////////////////////////////////////////////////////////////////*
Name            :Preet Bhagyesh Patel
Student Number  :132603226   
Section         :NBB
Date            :19 January 2024
Email           :pbpatel48@myseneca.ca
////////////////////////////////////////////////////////////////////////////////*/ 





/******************** OBJECT ORIENTED JAVASCRIPT FUNCTIONS ********************/



//1.Write a JavaScript function using Object Literal Notation to create a 'Car' object with properties.
function createStudent(givenName, givenAge , givenStudentID){
    const Student={
        name:givenName,
        age:givenAge,
        studentID:givenStudentID
    };
    return Student;
}
let preet=createStudent('Preet', 19, 132603226);
console.log("Age: "+preet.age+" Name: "+preet.name+" ID: "+preet.studentID);



//2.Method Implementation with this: Implement a method in the 'Car' object that uses this.
const Car ={
    company: 'Mercedes',
    name: 'AMG GT63s',
    year:'2078',
    getCompany: function(){
        return this.company;
    },
    getName: function(){
        return this.name;
    },
    getYear: function(){
        return this.year;
    }

}
console.log(Car.getCompany());
console.log(Car.getYear());
console.log(Car.getName());


//3.Class and Constructor: Create a 'Rectangle' class with constructor and methods. 
//and 
//4.Private Properties and Accessors: Add private properties with getters and setters in 'Rectangle'.

class Rectangle{
    //private properties
    #length
    #breadth;
    //constructor with default values in case 
    //no arguments are passed while creating the object
    constructor(givenLength=0, givenBreadth=0){
        this.#length=givenLength;
        this.#breadth=givenBreadth;
    }
    //setters for length and breadth
    set length(newLength){
        this.#length=newLength;
    }
    
    set breadth(newBreadth){
        this.#breadth=newBreadth;
    }
    //getters for lenght and breadth
    get length(){
        return this.#length;
    }
    get breadth(){
        return this.#breadth;
    }
    // a method which calculates the area
    calculateArea(){
        return this.#length*this.#breadth;
    }
}
let rect= new Rectangle(4,8);
console.log('length of rect: '+rect.length);
console.log('breadth of rect: '+rect.breadth);
console.log('Area of rect: '+rect.calculateArea());


//5.Class Inheritance: Demonstrate inheritance with a 'Square' class extending 'Rectangle'.

class Square extends Rectangle{
    
    constructor(givenLength){
        super(givenLength, givenLength)
        //calling the base class constructor
        //as in square lenght=breadth passing 
        //the length for both length and breadth
    }
}
let square= new Square (4);
console.log('side of square(l): '+square.length);
console.log('side of square(b): '+square.breadth);
console.log('area of square: '+square.calculateArea());




/******************** MODERN JAVASCRIPT SYNTAX QUESTIONS ********************/




//1.Use destructuring to swap values of two variables.
let a=10, b=2;
console.log("Before swap Value of a: "+a+" Value of b: "+b);
[a,b]=[b,a];
console.log("After swap Value of a: "+a+"Value of b: "+b);

//////--This array is used in question 2,3 and 4 
const array=[1,2,3,4,5,6,7,8];



//2.Iterate over an array using for...of.
for (const element of array){
    console.log(element);
}



//3. Double each number in an array with forEach().
console.log("DOUBLED ARRAY");
array.forEach((element)=>{
    element=element*2;
    console.log(element);
})



//4.Extract the first two elements of an array.
let [x,y]=array; ///array =[1,2,3,4,5,6,7,8]
//x=1
//y=2
console.log("First Extracted Element: "+x+" Second Extracted Element: "+y);     



//5.Write an arrow function for summing two parameters.
const sum =(c, d)=>{
    return c+d;
}
console.log("Sum: "+sum(9,60));




/******************** ADVANCED JAVASCRIPT TECHNIQUES ********************/




//1.Create a greeting message function using template literals.
let name= `Preet`;
const greeting =`Hello ${name}`;
console.log(greeting);



//2.Error Handling with try/catch: Implement error handling in a function.
const value =6;
//a constants value cannot be changed
//so when we try to change the value variable it should catch an error
try{
    value=9;
}catch(error){
    console.log(`ERROR: ${error.message}`);
}



//3.Custom Error Throwing: Throw a custom error for non-numeric arguments.

function nonNumeric(str){
    if(!isNaN(str)){
        throw new Error('not a number');
    }
}
try{
    nonNumeric(6);
}catch(error){
    console.log(`ERROR: ${error.message}`);
}



//4.Object Destructuring in Functions: Extract properties from an object argument.
let Animal={
    animalName:"tiger",
    animalType:"wild"
}
let{animalName, animalType}=Animal;
console.log("Extracted Animal Name: "+animalName+" Extracted Animal type: "+animalType);



//5.Spread Syntax in Arrays: Combine two arrays using spread syntax
arr1=[1,2,3];
arr2=[4,5,6];
arr3=[...arr1, ...arr2];//combining both the arrays into a thrid array using console log
console.log(`merged arr :[${arr3}]`);




/******************** MORE JAVASCRIPT FUNCTIONALITIES ********************/




//1.Advanced Array Destructuring: Swap first and last elements of an array
let aArray=[1,2,3,4,5,6];
// 1st element is 1
// last element is 6 (array.length-1)
let len=aArray.length;
[aArray[0], aArray[len-1]]=[aArray[len-1], aArray[0]];
console.log("After Swapping: "+ aArray);
//result: 6,2,3,4,5,1



//2.Object Merging with Spread Syntax: Merge two objects into one.
let person1={
    name_1:'preet', 
    age_1:19
}
let person2={
    name_2:'clown',
    age_2:879
}
//merging both objects into a person 3
let person3={...person1, ...person2};
console.log(person3);



//3.Calculations in Template Literals: Perform calculations inside a template literal.
const n1=2, n2=5, n3=10, n4=1;

console.log(`equation: (${n1}+${n2}/${n3})*${n4}`);

//calculation through tempelate literal
console.log(`answer :${((n1+n2)/n3)*n4}`);



//4.Create a JavaScript function that uses closures to encapsulate and protect
   // a private variable within an object, allowing it to be accessed only through a specific method.
function question4(){
    question4="Create a JavaScript function that uses closures to encapsulate and protect a private variable within an object, allowing it to be accessed only through a specific method.";
    return {
        //only the methods which manipulate the variable i.e question4 are returned
        display:()=>{
            console.log(question4);
        }
    }
}
const Q4=question4();
Q4.display();



//5. Write a simple JavaScript function to create an object representing a 'Book' using Object Literal Notation.
     //This object should include properties like 'title', 'author', and 'yearPublished'.
function makeBook(givenTitle, givenAuthor, givenPublishedYear, givenRating){
    const book={
        title:givenTitle,
        author:givenAuthor,
        publishedYear:givenPublishedYear,
        rating:givenRating
    }
    return book;

}
let bk1= makeBook("asd", "ads", 1998, 5.6);
console.log(bk1);