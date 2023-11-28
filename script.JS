console.log('HELLO WORLD');

//weird scope-dont use
//var x=5
//regular old variable
let y = 6;
y=10;//you can change the value

const z = 7;//this is a constant. Can't be changed 
//z=10//this throws and error

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z);//this does devision but returne=s the remainder
console.log(y^z);//exponents

let fname="Jashaun ";
let middle="Akanyili Awule Nii Lat3 Kwesi Kwashie "; 
let lname="Akamba";
console.log(fname+middle+lname);
console.log(lname + 6 )

let user="Jashaun";
let PASS="FOO";

user="Jashaun"
if (user=="Jashaun") {
    console.log('you are '+user)
}else{
    console.error("denied");
}


const license=18;
const jrop=16;
const rental=25;

let myAge=15;

function checkAge(myAge){
    console.log('running ...'+myAge);
    if (myAge<license && myAge>=jrop) {
        console.log('you can have a JrOp License');
}

if (myAge>=license) {
    console.log('you can have a regular license');
}

if (myAge>=rental){
    console.log('you can rent a car');
}

if (myAge<jrop) {
    console.log("You're too young to drive");
 }
}
checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);