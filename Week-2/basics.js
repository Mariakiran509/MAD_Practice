console.log('hello')
//expressions
var name1 = "Maria"
var name2 = "Maria";
//varibales
var _name = "Maria";
let age=27;
const gender = "female";
//how variables differ
//#1. global vs local scope before es6
function my_name()
{
    //local
    var another_name="Maria kiran";
//using global variable
    console.log(_name);
    console.log("name inside function",another_name);
}
my_name();
console.log("name outside function");
//console.log( another_name);

//block scope
function hello_world(){
    let my_name2="Maria Kiran Abid";
    if (2<3){
        const my_name3="Maria Kiran Abid";
 console.log("i can access my_name3 here");
        console.log( my_name3)

    }
    console.log("i can't access my_name3 here");
    console.log( my_name3)
}
hello_world();
console.log("i can't access my_name3 here" , my_name3);


