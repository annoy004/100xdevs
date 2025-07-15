let heh:number=1;
heh=2;  //type ineferencing ke wajah se problem aati hai isliye ts 
console.log(heh);

let m : string='arnav';
console.log(`arnav ${m}`)

function greet (fn:string) {
    console.log("hello" + fn);
}


let ducati:any =1;
ducati=true;
ducati="harkirat";


function x (fn:number) {
   return 5;
}
function y (fn:number) {
    return 5;
}

let number : number = x(1) + y(2);
console.log(number);


function islegal(age: number):boolean {
    if(age>18) {
        return true;
    }else{
        return false;
    }
} 
let ans :boolean = islegal(5);  //can give boolean here or in the funtion one is enough


function delayed(fn:() => number) {//number ke jagah void bhi likh sakte hai 
    setTimeout(fn,1000);
}
function delayedsssss(fn : (()=>number) | ((a:number) => number )) {
    setTimeout((fn),1000);
}
delayed(function () {
    console.log("kash");
    return 5;
})



// lets make a funtion in which we can pass diff isParameter


let greeti = () => {
    console.log("hi there");
}


function greetin(user: {
    name: string;
    age: number;
    lastname: string;
}) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}


let user: {
    name: string;
    age: number;
    lastname:string;
} = {
    name: "John",
    age: 30,
    lastname: "Doe"
}

greetin(user);
////////////////////////////////////////////////////
type UserType = { //ican write it as interface by removing equalsto  jab type use karte hai toh union milta hai ( | )
    firstname: string,
    age: number,
    lastname: string
}

//like

type Stringy = string | number;
// but inside a interface u can do union

function great(users:UserType):boolean {
    return true;
}
let users = {
    firstname:"arnav",
    age :14,
    lastname:"singh",
}
great(users);
///////////////////////////////////////////////////////t
