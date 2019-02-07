function fizzBuzz(num) {

    for (i = 0; i < num; i++) {
        if ((num % 3) == 0 && (num % 5) == 0) {
            return "FizzBuzz";
        } else if ((num % 5 == 0 )|| String(num).includes("5")) {
            return "Buzz";
        } else if ((num % 3 == 0 ) || String(num).includes("3")) {
            return "Fizz"
        } else {
            return num;
        }
    }

}

module.exports = fizzBuzz;