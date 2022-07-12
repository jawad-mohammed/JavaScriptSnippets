//scope
//Nested  function's scope
//closures
//currying
//this keyword
//Prototype
//prototypal inheritence
//CLASS
//itrables and iterators
//Generators
//<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SCOPE concept
/*Block Scope -variables declared inside a pair of curly braces cannot be accesses from 
outside the block
 */

//scoping example of lexical environment
function funcA(){
let a =1
    function funcB(){
let b =2
function funcC(){
let c = 3
    function funcD(){
let d = 4
console.log(a,b,c,d);
    }
    funcD()
    
}
funcC()

    }
    funcB()
  
}
funcA()

//<><<<<<<<<<<<<<<<<<<<<<<<<<<<<</>CLOSURES <<>>>>>>>>>>>>>>>>
//closure is created everytime a function is created at function creating time 
//a closure is the combination of a function bundled together with references to its surrounding state
let count = 1
function parentFunc(){
count ++
function childFunc(){
count++
console.log(count);
}
childFunc()

}
// parentFunc()
/* when JS engine executes it checks in inner function whther the 
variable is present, if not found it looks in its outer function,
 and keeps on looking until it reaches the global scope
 */
//lets invoke the parentFunction twice

function outer(){
let count =1

    function inner(){
count ++
console.log(count);
}
return   inner

}
const fn = outer()

function addOne(){
 fn()
 fn()
 fn() 

}
addOne()
/*In Javascript when we return a function from another function we are effectively returnning 
a combination of the function definition along with the function scope
this would let the function definition have an associated persistent memory which could hold in to 
live data between executions.That combination of the function and its scope chain is what is called 
a closure in javascript
 */
function outerFun(){
let count = 1
    function innerFunc(){
      count++
      count++
     
      console.log(count);
    }
 return  innerFunc

}
const fn = outerFun()
fn()
//inner function has the accecss to outer function variable /scope

//<><>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>
//                         ---------Currying
//function currying
//currying is a process in functional programming in which we transform a function with 
//multiple arguments into a sequence of nesting function 
//that take one argument at a time 
function sum(a,b,c,d){
    return a+b+c+d
    }
   


function curryying(fn){

    return function (a){

    return function (b){

        return function(c){

            return function(d){
               return fn(a,b,c,d)
            }
        }
    }

    }

}
const curriedSum = curryying(sum)
console.log(curriedSum(1)(2)(3)(4));

//we will look another example
function add(arg1,arg2,arg3,arg4,arg5){
  return arg1+arg2+arg3+arg4+arg5 
}

function currying (fn){

    return (a)=>{

        return (b)=>{

            return (c)=>{

                return (d)=>{

                    return (e)=>{
                    
                        return fn(a,b,c,d,e)
                    }
                }
            }
        }
    }
}
const addNums = currying(add)
console.log(addNums(1)(2)(3)(4)(5));
//output 15