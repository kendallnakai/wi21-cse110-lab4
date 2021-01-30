# Part 1. Intro to Javascript

## Variables & Scoping

1. Line 11 ***i*** is printed as ***3*** by the console since it is declared as var which can be seen through blocks due to function-scoping
2. Line 12 ***discountedPrice*** is printed as ***150*** by the console since it is declared as var which can be seen through blocks due to function-scoping
3. Line 13 ***finalPrice*** is printed as ***150*** by the console since it is declared as var which can be seen through blocks due to function-scoping
4. Line 14 The function will return ***[ 50, 100, 150 ]*** since in the for loop ***discounted*** is pushing each of the final prices from the discountedPrice and rounding them divided by 100

5. Line 11 ***i*** will have a ***ReferenceError*** since i is declared as *let* in the scope of the for loop but not outside
6. Line 12 (if we ignore that line 11 had a ReferenceError for i,) ***discountedPrice*** will have a ***ReferenceError*** since discountedPrice is declared as *let* in the scope of the for loop but not outside
7. Line 13 (if we ignore that line 11 had a ReferenceError for i and line 12 had a ReferenceError for discountedPrice,) ***finalPrice*** will have a ***finalPrice*** since discountedPrice is declared as *let* in the scope of the for loop but not outside
8. Line 14 (if we ignore that line 11 had a ReferenceError for i, line 12 had a ReferenceError for discountedPrice, and line 13 had a ReferneceError for finalPrice,) the function will return ***[ 50, 100, 150 ]*** since in the for loop ***discounted*** is pushing each of the final prices from the discountedPrice and rounding them divided by 100

9. Line 11 ***i*** will not be reached due to a ***TypeError*** on ***Line 7*** since the variable ***finalPrice*** assignment is ***constant***
10. Line 12 (assuming the TypeError is fixed on line 7 and const is changed to let or var so that the program can continue to run,) Line 12 would not be reached due to a ***ReferneceError*** on ***Line 11*** since the variable ***i*** is declared as *let* in the scope of the for loop but not outside
11. Line 13 (assuming fixes from #10 as well as the ReferenceError is fixed on line 11 where let is changed to var so the varaible can be seen through blocks,) Line 13 would not be reached due to a ***ReferneceError*** on ***Line 12*** since the variable ***discountedPrice*** is declared as *let* in the scope of the for loop but not outside
12. Line 14 (assuming fixes from #10 and #11 were made as well as the ReferenceError is fixed on line 12 where let is changed to var so the varaible can be seen through blocks,) the function will return ***[ 50, 100, 150 ]***  since in the for loop ***discounted*** is pushing each of the final prices from the discountedPrice and rounding them divided by 100 and the const of ***finalPrice*** has been changed to allow it to change from 0

## Data Types 

13a. alert(student.name);
13b. alert(student["Grad Year"]); 
13c. alert(student["Favorite Teacher"].name);
13d. alert(student.courseLoad[0]);

## Basic Operators & Type Conversion 

14. Arithmetic
14a. My output was ***32*** since it the console concatonating the numbers (perhaps using an overridden ***+***?)
14b. My output was ***1*** since the console interpreted the ***-*** as an arithemtic / mathematical operation
14c. My output was ***3*** since the console detected the 3 as a number so the null as a number 0 and when added = 3
14d. My output was ***3null*** since the console detected the '3' as a string so the null was a string that concatonated
14e. My output was ***4*** since the console detected the 3 as a number and true as 1 a number so the numbers were added
14f. My output was ***0*** since the console detected the false as a number 0 and null as a number 0 so the numbers were added to be 0
14g. My output was ***3undefined*** since the console detected the "3" as a string so the undefined was a string that concatonated
14h. My output was ***NaN*** since the console detected the minus as a arithmetic operation

15. Comparsion
15a. My output was ***true*** since the console is comparing 2 as a number which is > 1 
15b. My output was ***false*** since strings are compared lexigraphically and the first character of 2 is greater than the first character of 12, 1
15c. My output was ***true*** since both operands are the same value 
15d. My output was ***false*** since === doesn't do type conversion and these are two different types
15e. My output was ***false*** since 2 and true as a operand with value 1 is not equal
15f. My output was ***true*** since true and true are equal and Boolean is not type converted

16.  The ***==*** operator has an equality check where it ignores datatype so can't differentiate from 0 and false and the ***===*** is a strict equality operator and checks for equality without type conversion 

## Conditionals 

17. ***How are you?*** gets printed since 2 is not equivalent to true (option 1) but 2 as a number is valid so is true (option 2) and breaks out there 

## Functions