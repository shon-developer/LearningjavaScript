# Topics

- Conditions
- If Else
- Switchcase
- Ternary Operators Conditions
- Array
- Object
- Date
- Math

## If...else

The `if...else` statement executes a statement if a specified condition is truthy, if the condition is falsy, another statement in the optional `else` clause will be executed.

## Switchcase

The switch statement evaluates an expression, matching the expression's value against a series of `case` clauses, and executes statements after the first `case` clause with a matching value, until a `break` statement is encountered. The `default` clause of a switch statement will be jumped to if no `case` matches the expressions's value.

## Ternary operator

### Syntax

```Javascript
    Condition? expressionIfTrue : expressionIfFalse
```

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark, then an expression to execute if the condition is falsy. This operator is frequently used as an alternative to an `if..else` statement.

## Array

In JavaScript, arrays aren't primitives but are instead `Array` objects with the following core characteristics:

1. JavaScript arrays are resizable and can contain a mix of different data types.
2.
3. JavaScript arrays are `zero-indexed`: The first element of an array is at index 0, the second is at index 1, and so on - and the last element is at the value of the array's `length` property minus 1.

```JavaScript
    let array = ["shon", "shine", "shon", 188, true, false];
```

## Object

The `Object` type represents one of JavaScript's data types. it is used to store keyed collectors and more complex entities.

example: 
```JavaScript
let name = {
    firstName: "Shon",
    lastName: "Latheef",
}
```    
## Date and Math

Date Objects are created with the `new Date()` constructor. There are 9 ways to create a `new Date()` object

# Math

The JavaScript Math object allows you to perform mathematical tasks on numbers.