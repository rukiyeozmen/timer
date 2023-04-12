//!command line arguments and asynchronous programming 
// Implement an alarm clock / timer which 
// will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

//node timer1.js 10 3 5 15 9 

/* This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/


const args = process.argv.slice(2); // getting input from command lne arguments as strings
const intervals = args.map(arg => Number(arg)); // converting string to numbers
console.log(intervals);

// checks if there is no input exits
if (!args) {
  process.exit();
}
// function to beep after a specified amount of time:
function beep(interval) {
  setTimeout(() => {
    process.stdout.write('\x07'); // makes the beep sounds
  }, interval * 1000); // every x amount of secs
}


//loop through the list of intervals and call the beep function for each one:
for (const interval of intervals) {
  //skips when interval is a negative number or not a number
  if (interval < 0 || isNaN(interval)) {
    continue;
  }
  beep(interval);
}
