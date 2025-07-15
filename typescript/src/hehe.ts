interface User {
     name:"arnav"|"shivam",
    age:number,
    address:undefined | {
        city:string,
        country : string,
        pincode?: number,//now pincode is optional because ?
    },
}
let usera:User = {
    name:"arnav",
    age:21,
    address:{
        city:"chandigarh",
        country : "India",
        pincode: 156034,
    },
}

function islegals(usera:User):boolean {
    if(usera.age>=18) {
        return true;
    }else {
        return false;
    }
}

const anse = islegals(usera) ;
if(anse) {
    console.log("there");

}else{
    console.log("not there");

}

///  image1.png//////////////////////////////////////////


interface people{
    name:string,
    age:number,
    greet1:() =>string,
}

let person :people = {
    name:"arnav",
    age:32,
    greet1 : () => {
        return "hi";
    }
}

let greeting = person.greet1();
console.log(greeting);

//////////////////////////////////////////////////////////////
interface Userss{
    name:string,
    age:number,
    islegail():boolean;
}
class Manager implements Userss{
    name:string;
    age:number;
    constructor (name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    islegail(): boolean {
        return this.age>18;
    }
}
class god extends Manager  {
    constructor(name:string,age:number) {
        super(name,age);
    }
}




const q = new Manager("harkirat",21);
console.log(q.name);
console.log(q.age);

/////////////////////////////////////////////////////////////////


abstract class usersss {
    name:string ;
    constructor(name:string) {
        this.name= name;
    }
    abstract greet:() => string;
}
 class Employee implements usersss{
    name:string;

    
    constructor(name:string,age:number) {
        this.name = name;
        
    }
    greet() {
        return "hi" +this.name;
    }
 }
///////////////////////////////////////////////////////////////
type gooduser={
    name:string;
    gift:string;

}

type baduser={
    name:string;
    tp:string;
}

type userssss = gooduser |baduser;//its a union

const uers :userssss = {
    name:"arnavv",
    tp:"hello",
    gift:"istbig",
    
}
console.log(uers.name);

/////////////////////////////////////////////////////////////////

type Name = string |boolean;

/////////////////////////////////////////////////////////////

interface point2d {
    x:number;
    y:number;
}
const intermediary = {x:1, y:1, name:"john",age:28};
const p3: point2d = intermediary;  // this will not complain because we had not pass directly
///////////////////////////////////////////////////////
