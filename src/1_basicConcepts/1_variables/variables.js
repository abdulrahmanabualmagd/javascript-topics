// --------------------------------------- [ VARIABLES ] ---------------------------------------------
// | Feature              | var                    | let                    | const                  |
// |----------------------|------------------------|------------------------|------------------------|
// | Scope                | Function or global     | Block                  | Block                  |
// | Reassignment         | Allowed                | Allowed                | Not allowed            |
// | Redeclaration        | Allowed                | Not allowed            | Not allowed            |
// | Hoisting             | Yes (only declaration) | Yes (declaration and   | Yes (declaration and   |
// |                      |                        | initialization)        | initialization)        |
// ---------------------------------------------------------------------------------------------------

// ---------------------------- [ Hoisting ] 
// - var        // Only Declaration without initialization
// - let        // Declaration and Initialization
// - const      // The same as let [ Declaration and Initialization ]

// ------------------- [ Scope ] 

// -                        var
if (true){ var varItemInsideBlock = "var inside block"}         // Is global and we can see it outsite that block
console.log(varItemInsideBlock);

// -                        let
if (true){ let letItemInsideBlock = "let inside block"}          
// console.log(letItemInsideBlock);                             // Will through an exception (not defined)

// -                        const
if (true) { const constItemInsideBlock = "const inside block"} 
// console.log(constItemInsideBlock);                           // the same as let (not defined exception)


// ---------------------------- [ Reassignment & Redeclaration ] 
// -                        var
var x = 5;
var x = 6;      // Redeclaration Works normally
x = 8;          // Reassignment is Allowed

// -                        let
let y = 5;
// let y = 6;   // Cannot redeclare block scope variable 
    y = 8;      // Reassignment is Allowed
     

// -                        const
const z = 5;
// const z = 6; // The same as let, Cannot redeclare block scope variable  
// z = 8;       // Reassignment is Not Allowed

















