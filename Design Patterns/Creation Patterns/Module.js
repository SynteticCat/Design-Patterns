/* 
 * (en) The "Module" Pattern fully encapsulates data,
 * which are enclosed with IIFE, this pattern solves the issues
 * associated with the clogging of the global scope and intentional
 * or not intentionally changing data that is considered NOT publicly available.
 * 
 * P.S: this pattern is implemented “out of the box” in JS using "JS Modules"
 */

// Own example and description (see higher)
const Laptop = (function() {
    let seconds = 0;
    let timerID;
    
    function turnOn() {
      timerID = setInterval(() => seconds++, 1000);
    };
    
    function turnOff() {
      clearInterval(timerID);
    };
    
    function getSecondsOfWorking() {
      return seconds;
    };
    
    return {
      turnOn: turnOn,
      turnOff: turnOff,
      getSecondsOfWorking: getSecondsOfWorking
    };
  })();
  
  console.log(Laptop);
  console.log(`Try to get "seconds" value = ${seconds}`);
  console.log(`Gettting "seconds" value by API = ${Laptop.getSecondsOfWorking()}`);

  Laptop.turnOn();  // turn on timer, private data changing every second
  setTimeout(() => console.log(`"seconds" value after 2 seconds = ${Laptop.getSecondsOfWorking()}`), 2000);
  setTimeout(() => console.log(`"seconds" value after 4 seconds = ${Laptop.getSecondsOfWorking()}`), 4000);
  Laptop.turnOff();  // turn off timer, stop changing of private data
  