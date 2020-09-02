let myString: string = "Tenkile" + " " + "Wenilkle".slice(0, 3);
let num: number = 1;
let myBool: boolean = true;
let myVar: any = "whatever";

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string> = ["Nujood", "Here"];
let numArr: Array<number> = [1, 2, 4];
let boolArr: Array<boolean> = [true, false];

//changing from  null or undefined wont make a difference
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

let strNumTuple: [string, number];
// has to match the declared index exactly- you can  add after the pattern but not before
strNumTuple = ["hello", 4];

console.log(myString, num, myBool, strArr, numArr, boolArr, strNumTuple);
