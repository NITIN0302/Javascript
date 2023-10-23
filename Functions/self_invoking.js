// To remove the pollution from the globla scop we use Immediate Invoking Function Expression
// Semicolon will be used to end the execution of function IIFE

(function chai(){
    console.log("Hello world")
})();


(()=>{
    console.log("Hello World")
})();


((name)=>{
    console.log(`${name} Hello World`)
})("Hitesh");

