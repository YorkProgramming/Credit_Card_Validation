//Credit Card Validation

/* The Luhn formula is sometimes used to validate credit card numbers. 
Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), 
and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

Set aside the last digit; do not include it in these calculations (until step 5);

Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;

If any results are larger than 9, subtract 9 from them;

Add all numbers (not just our odds) together;

Now add the last digit back in – the sum should be a multiple of 10.
For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], 
then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. 
After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, 
we would instead return false. */

function isCreditCardValid(digitArr) {
    var sum = 0;
    var lastDigit = digitArr[digitArr.length - 1];
    for (var i = digitArr.length - 2; i >= 0; i -= 2) {
        digitArr[i] *= 2;
        if (digitArr[i] > 9) {
            digitArr[i] -= 9;
        }
    }
    for (var j = 0; j < digitArr.length; j++) {
        sum += digitArr[j];
    }
    sum += lastDigit;
    if (sum % 10 == 0) {
        return true;
    }
    return false;
}

console.log(isCreditCardValid([5, 2, 2, 8, 2])); // true
console.log(isCreditCardValid([5, 2, 2, 8, 3])); // false
