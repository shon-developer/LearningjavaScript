# Javascript

## History

JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard.
The First name of javascript is Mocha, then it became liveScript and later changed to JavaScript.

That time the two main browsers were netscape and internet explorer

## What is ECMA Script?

ECMAScript is a Javascript standard intended to ensure the interoperability of web pages across different browsers.In short it is a language specification.

## What is ES6

ECMAScript 2015 was the second major revision to JavaScript. It is the finest standard set as of now.

## Fundamentals of JavaScript

- Values
- Operators
- Variables
- Decisions
- Loops
- Functions

## Runtime Environment

The runtime environemt is the environment in which a program or application is executed. It's the hardware and software infrastracture that supports the running of a particular codebase in real time.

# Data Types

JavaScript provides a different data types which are:

- Undifined
- Null
- Boolean
- String
- Symbol
- Bigint
- Number
- Object

Values are divided into the

- Primitive
- Non-primitive

## Undefined

Conceptually `undefined` indicates the abscence of value when JavaScript are declared, they have an initial value of `undefined`. If you do a mathematics operation to a `undefined` variable your results will be a `Nan` which means "Not a number". If you concathenate a string with an `undefined` variable, you will geta string of `undefined`.

## Null

`null` indicates the abscence of an object

## Boolean

The `boolean` value is introduced by george boole.
It is inhabitated by two values `true` and `false`.
`Boolean` values usually used for conditional operators, including `ternary operator`, `if..else`, `while`

## String

The `string` type represents textual data enclosed in single or double quotes.

```JavaScript
let FirstName - "Shon"
```

## Number

The `Number` type can be integer or floating point.

# Variables

`var, let, constants` are keywords used to declare variables.

```JavaScript
var x = 25
let x = 25
const z = `Shon`
```

never use var = why?
One of the biggest problems with delaring variables with the `var` keywords is that you can easily overwrite the variables declaration.

```Javascript
var name = "Shon"
var name = "Zareel"
console.log(name);
```

In the code above, the name variable is original declared as `Shon` and is then overidden to be `Zareel`. The console the display the string. `Zareel`. Because this behaviour does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword `let` was introduced in ES6, a major update to JavaScript to solve this potential issue with the `var` with the keyword.
if you replace `var` with `let` in the code above, it results in an error.
With `let` a variable withthe same name can be declared only once.

# Operators

This chapter
