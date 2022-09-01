// write your code here
function print_from_1_to_100() {
    for (var i = 1; i <= 100; i++){
        if (i%15 == 0){
            console.log("FizzBuzz");
        }
        else if (i%3 == 0){
            console.log("Fizz");
        }
        else if (i%5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
//this is implementation of not using %15
function print_from_1_to_100_ver2() {
    for (var i = 1; i <= 100; i++){
        if (i%3 == 0){
            if (i%5 == 0){
                console.log("FizzBuzz");
            }
            else{
                console.log("Fizz");
            }
        }
        else if (i%5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
print_from_1_to_100_ver2()