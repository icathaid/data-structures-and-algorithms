# array_adjacent_product

## challenge

write a function that will accept a 2d matrix (array of arrays) and return the the highest product of two adjacent values (horizontally, vertically, or diagonally).

## solution

It took a while of just playing with the code on this one to figure out how all the pieces worked before I could come up with a very cohesive plan about how to build it, and by that point I had it most of the way there anyway.

I ended up doing this with a nested for loop to iterate through each subarray in the array, then runs 4 checks on the numbers to the right and below (other checks are redundant because it iterates left to right).  It stores the highest product found in a variable and checks each subsequent product found.

I thought I still had a long way to go working out bugs when it started passing all the tests.  For time's sake, I stopped where I was at, so there aren't any checks for non-positive integers or weirdly sized arrays.

4 and 5 are blank on the whiteboard because I don't really understand how to calculate either one after the fact, muchless before.  I think the big O is running in O(n2) because it's running 2 processes (nested for loop).  I still don't understand how to convert my code into the standardized pseudocode format.

<img src="https://github.com/icathaid/data-structures-and-algorithms/blob/master/assets/array_adjacent_product-1.jpg">
<img src="https://github.com/icathaid/data-structures-and-algorithms/blob/master/assets/array_adjacent_product-2.jpg">


<!-- # reverse-array

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


# binary_array_search

##challenge

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## solution

I was actually unclear about the name of the challenge and the source cited on the lab repo, because I couldn't figure out how to implement an actual binary search without using the .includes() method.  For the sake of arriving at a solution, I simply iterated through the array, comparing the value of each element to the search key.  If it finds a match, it returns the current value of i, and if not, it returns -1.  

Tests 1-3 confirm basic functionality.

I started writing more tests until I realized I was writing tests for conditions that didn't need to be met, for example, checking to see if the array contains any null or undefined elements, but the specs don't actually say that it can't contain them, and the last test confirms that having undefined values in the array doesn't break it, it still returns the correct index position.

<img src = "https://github.com/icathaid/data-structures-and-algorithms/blob/master/assets/array_binary_search_1.jpg">
<img src="https://github.com/icathaid/data-structures-and-algorithms/blob/master/assets/array_binary_search_2.jpg">
 -->
