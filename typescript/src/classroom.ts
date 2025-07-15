interface zser{
    name:string ;
    age:number;

}
function sumOfAge(user5:zser,user2:zser) {
    return user5.age-user2.age;
}
const age = sumOfAge({name:'taro',age:20},{name:'arnav',age:30})
console.log(age);
///////////i////////////////////////////////////
interface xser{
    name:string ;
    age:number;
    id:string;
    email:string;
    password:string;


}
interface updateProps {
    name:string;
    age:number;
    password:string;
}
type userprofile = Pick<xser,'name'| 'age' | 'email'>

type updatepropi = Partial<userprofile>;
function updateUser(useredprofile:updatepropi){

}

/////////////////////////////////////////


const userName = ''

