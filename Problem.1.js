/**
 * Created by Dave K on 9/21/2016.
 */
console.log("Hello World");

for (var x=1; x <= 100; x++)
{
    if (x % 15 == 0)
        console.log("FizzBuzz");
    else if (x % 3 == 0)
        console.log("Fizz");
    else if (x % 5 == 0)
        console.log("Buzz");
    else
        console.log(x);


    var fs = require("fs");
    var readMe = fs.readFileSync('Assignment1_names-1.txt', 'utf8');
    console.log(readMe);


    /* Everything below here works.. kinda'
fs.readFile('Assignment1_names-1.txt', function(err, data){
    var names = data.toString().split('\n');
    names.sort(function(a, b){return a-b});
    console.log(data.toString());*/
};




/*var array = fs.readFileSync('Assignment1_names-1.txt').toString().split("\n");
for(i in array) {
   console.log(array[i]);
}

console.log('Executed Before File Reading');

fs.readFile('./test.project.01/Assignment1_names-1.txt', 'utf8', function(error, data) {
    console.log(data);
});

console.log('Executed After File Reading.. maybe');
*/