function printHello() {
  console.log('hello');
}

function greet(name) {
  console.log(`hello, ${name}`);
}

let i = 0;
function printCount() {
  i++;
  console.log(`count is now ${i}`);
}

module.exports.printHello = printHello;
module.exports.greet = greet;
module.exports.printCount = printCount;
