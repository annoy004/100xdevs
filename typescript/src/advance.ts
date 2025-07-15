interface Userx{
    id:string;
    email:string;
    password:string;
    name:string;
    age:number;
}

function sumOfAges(user1:Userx,user2:Userx) {
    return user1.age+user2.age;
}

//  sumOfAges({name:'Taro',age:20},{name:'arnav',age:20});
// interface updatePropsx{
//     name:string ;
//     age:number;
//     password:string;
// }
type updatedPropsx = Pick<Userx,'name'|'age'|'email'>//it can pick avalue from interface as well and type

type updatepropis = Partial<userprofile>;
function updateUserx(props:updatedPropsx) {
    console.log(`Name: ${props.name},Email : ${props.email}`)
}

updateUserx({name:'arnav',age:14,email:'av'});

//////////////////////////////////////////////////////////////////////
const a= [1,2,3];
a[0] =4; // i am able to update the property of constant  we cannot change whole array but inside of array


const username = "harkirat";

// username = "arnav";cannot change strig

type userxx = {
    readonly email:string;
    readonly age:string;
    password:string;
}

// const obj : userxx= {
// age:"14",
//      email:'av',
//     password:'234',
// }



//obj.email = 'asd';//this can be changes so we will use read onlhy

const obj :Readonly<userxx>= {
age:"14",
     email:'av',
    password:'234',
}

/////////////record and map///////////////////////////////////

type usera ={
    id:string;
    username:string;
}

type allocate = {
    [key:string]:usera;  //iska matlab jo keyhai woh string and jo uske andar ka hai ko usera main bataya hai

}

// we can write this allocate in cleaner way like with records 
type allocaterec = Record<string,{id:string;username:string}>;
const userxxx:allocaterec = {
    "arnav" : {
        id:'arn',
        username:'harkirat'
    },
     "aryan" : {
        id:'ayn',
        username:'simran'
    },
}

////////////////////////////map//////////////////////////////////////
type useraaa = {
    name:string;
    age:number;
}
const sers= new Map<string,useraaa>()  //you can enfore the type of map by using generics
sers.set('id1',{name:'harkirat',age:20});
sers.set('id2',{name:'arnav',age:30});
const userxxxx = sers.get('id1');

sers.delete("id2");
console.log(sers);

//////////////////////////////////////////////////////////////////////
type Eventstype = 'click' | 'hover' | 'scroll';
type EventExclude = Exclude<Eventstype, 'scroll'>;// Exclude removes 'scroll' from the type

const handleEvent = (event: EventExclude) => {
    console.log(event);
}
handleEvent('click'); 


// This will log 'click' and 'hover', but not 'scroll'


///
const userInfo: [string, number] = ["Arnav", 21];
// userInfo[0] is string, userInfo[1] is number
