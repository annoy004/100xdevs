type keyPressed = 'up' | 'down' | 'left' | 'right';//this is not that much human readable
enum Direction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
    }
function dosomething(keyPressed: Direction) {
  // Your code here
  console.log(`You pressed: ${keyPressed}`);
}
dosomething(Direction.Up);//this is good way to use enum
/////////////////////////////////////////////////////////////////////////
// uses of enums
// const app = express();

// enum Responsestatus {
//     success = 200,
//     not_found = 404,
//     internal_server_error = 500
// }

// app.get('/', (req, res) => {
//     if(!req.query.userId) {
//         res.status(Responsestatus.not_found).json({})
//     }
//     res.json({});
   
// });


//////////////////////////////////////////////////////////////////

// type Input = number | string;

// function firstEL(arr:Input[]){
//     return arr[0];
// }

// const value= firstEL(["arnav", "harkirat"]);
// const value2= firstEL(["arnav", 2, 3]);
// console.log(value.toUpperCase());        this is a problem because it can be string or number


// now we will solve this problem using generics

//learn generics 
function identify<T>(value:T):T {
    return value;
}

const str = identify<string>("Hello, World!");
const num = identify<number>(42);


console.log(str.toUpperCase()); // Output: HELLO, WORLD!


//now we will solve above problem


function firstEL<T>(arr:T[]):T {
    return arr[0];
}

const value3 = firstEL<string>(["arnav", "harkirat"]);
const value4 = firstEL<number>([2, 3, 4]);
console.log(value3.toUpperCase()); // Output: ARNAV