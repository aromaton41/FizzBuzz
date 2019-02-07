const fizzbuzz = require('./FizzBuzz');
describe('FizzBuzz', function(){  
    test('should have "fizz" when three passed', function() {
      var result = fizzbuzz(3);
      expect(result).toBe('Fizz');
    });
  
    test('should have "buzz" when five passed', function() {
      var result = fizzbuzz(5);
      expect(result).toBe('Buzz');
    });
  
    test('should have "fizzbuzz" when multiple of three and five passed', function() {
      var result = fizzbuzz(15);
      expect(result).toBe('FizzBuzz');
    });

    test('A number is fizz if it is divisible by 3 or if it has a 3 in it', function() {
        var result = fizzbuzz(13);
        expect(result).toBe('Fizz');
      });

    test('A number is fuzz if it is divisible by 5 or if it has a 5 in it', function() {
        var result = fizzbuzz(54);
        expect(result).toBe('Buzz');
      });
  });