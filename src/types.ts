let myString: string;
let num: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

//changing from  null or undefined wont make a difference
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

let strNumTuple: [string, number];

myString = "Tenkile" + " " + "Wenilkle".slice(0, 3);
num = 1;
myBool = true;
myVar = "whaterver type";

strArr = ["Nujood", "Here"];
numArr = [1, 2, 4];
boolArr = [true, false];
// hase to match the declared index exactly- you can  add after the pattern but not before
strNumTuple = ["hello", 4];

console.log(myString, num, myBool, strArr, numArr, boolArr, strNumTuple);
