/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. One rule is implicit binding where the this keyword is refering to the object left of the dot when it is invoked. 
* 2. Explicit binding is for functions. It allows your to directly express what the this keyword is by using call, bind, or apply. 
* 3. By using the keyword new before an object a new object will be created. The this' in that object will belong to that object.
* 4. If none of the other binding methods are applied and this is not defined then the this keyword will bind to the window unless in "use strict" mode. 
*
* write out a code example of each explanation above
*/

// Principle 1
var caution = function(obj) {  
   
         console.log(`Don't swim with the ${this.name} ${this.type}`);
     };

var sea = {
type: "shark",
name: "hammerhead"
};
caution();
// code example for Window Binding

// Principle 2

var seaAnimal = {
    type: "shark",
    name: "hammerhead",
    warn: function() {
     console.log(`Don't swim with the ${this.name} ${this.type}.`);

    }
};
seaAnimal.warn();
// code example for Implicit Binding

// Principle 3

 var SeaAnimal = function(type, name) {
    this.type = type;
    this.name = name;
}
var sandShark = new SeaAnimal("shark", "sandshark");
// code example for New Binding

// Principle 4
var warn = function() {
    console.log(`Don't swim with the ${this.name} ${this.type}.`);

   }
var seaAnimal = {
    type: "shark",
    name: "hammerhead",
    
};
warn.call(seaAnimal);
// code example for Explicit Binding