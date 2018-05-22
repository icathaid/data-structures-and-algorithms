# reverse-array

## challenge

write a function that accepts an array as input and returns the reverse of that array as an output without using any of the built-in methods for this

## solution

iterated through the array back to front and pushed each value to a new array

<img src="https://github.com/icathaid/data-structures-and-algorithms/blob/master/assets/array_reverse.png">

# array-shift

## challenge

Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## solution

I declared a variable indicating the middle position of the index and ran a for loop from 0 to that value, pushing each element to a new array.  It then pushes the input value to the next position in the output array, and a separate loop iterates through the rest of the array, pushing the rest of the elements into the output array, then returns the completed array.

Tests 1-2 confirm basic functionality.
Subsequent test check for null or undefined values in both input fields, and for empty arrays.  

Sorry for sidebar comment on my whiteboard, was getting a little bit frustrated with translating how i write pseudocode to the standard format.

<img src="https://github.com/icathaid/data-structures-and-algorithms/blob/master/assets/array_shft.jpg">