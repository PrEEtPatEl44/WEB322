/*****OBJECT ORIENTED JAVASCRIPT FUNCTIONS *****/

//1.

//2.
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



//3. and //4.

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

class Square extends Rectangle{
    
    constructor(givenLength){
        super(givenLength, givenLength)
        //calling the base class constructor
        //as in square lenght=breadth 
    }
}
let square= new Square (4);
console.log('side of square(l): '+square.length);
console.log('side of square(b): '+square.breadth);
console.log('area of square: '+square.calculateArea());