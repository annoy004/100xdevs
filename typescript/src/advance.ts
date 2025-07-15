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
const userxxx:allocate = {
    "arnav" : {
        id:'arn',
        username:'harkirat'
    },
     "aryan" : {
        id:'ayn',
        username:'simran'
    },
}


