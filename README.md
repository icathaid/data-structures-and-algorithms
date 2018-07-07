#       Queue With Stacks

##      Notes

-   The README was becoming a mess, but I don't want to lose the notes I left myself on the next merge, so I archived it as old_README.md.  If it's OK I think I'm going to keep doing that so old_README.md is an archive of all previous challenges, but the top-level README only contains the information pertinent to the current one.

-   I'm still honestly not sure what the instructions mean by implementing stacks, or what it means by 'you have 2 Stack instances available'.  Stacks operate in a LIFO fashion so I'm not sure how I could use one for this.  I understand how to use a linked list as a queue so I'm proceeding with that.

-   I opted not to test for an increased length because I couldn't figure out a good way to implement a counter that would still work if the method was called on an existing linked list, or without iterating through the list twice within the test.  

-   I couldn't remember how to throw/return an error, so for validation purposes I returned -1 and checked for that.

###     Feature Tasks

[]  enqueue(value) - should insert (value) into Queue using FIFO
[]  dequeue - should extract a value from the Queue using FIFO

####    Structure and Testing

Write at least 3 assertations for each method
