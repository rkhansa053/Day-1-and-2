// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var personName = "Khansa";
console.log("Hello ".concat(personName, ", would you learn some Typescript today?"));
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var girlName = "Khansa";
console.log(girlName.toLowerCase());
console.log(girlName.toUpperCase());
console.log(girlName.charAt(0).toUpperCase() + girlName.slice(1).toLowerCase());
// Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Nelson Mandela once said,“Education is the most powerful weapon which you can use to change the world.”');
// Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
//  Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Nelson Mandela";
var message = "".concat(famous_person, " once said, \"Education is the most powerful weapon which you can use to change the world.\"");
console.log(message);
// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var name = " \t\nKhansa\t\n ";
// console.log(name);
console.log(name.trim());
