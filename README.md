# reverse-array

## challenge

write a function that accepts an array as input and returns the reverse of that array as an output without using any of the built-in methods for this

## solution

iterated through the array back to front and pushed each value to a new array

I'm adding a few things to test travis/jest integration of my pi

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

# linked list insertions

used these to get started:
https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
https://medium.com/@deniswells59/singly-linked-lists-with-javascript-81859a5a5095


This explains what the bits of code I didn't understand from the first examples does.  I didn't implement it because I wanted to copy/paste as little code as possible.  Turns out they're important.  Also explains how to traverse through the list without .next.next.next.next.next.etc

https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392


# linked list kth from end

I had to pretty much copy/paste the example from here:
https://medium.com/@deniswells59/singly-linked-lists-with-javascript-81859a5a5095
to get my append method working right in order to generate valid lists to test.  I see what I did wrong with the previous whiteboarding now, but I was spending too much time working on that and hadn't started the task at hand yet, so I'm doing this to move forward.  I didn't change the code from ll_insertions.js

