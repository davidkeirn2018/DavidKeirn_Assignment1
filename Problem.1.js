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
}