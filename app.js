// Creting a variable to store the kelvin temperature value. 
let kelvin = 0;

// creating a variable that stores the coverted kelvin value in cesius.
let celsius = kelvin - 273;

// variable that store equivalent farenhiet value.
// converting the result to an integer value.
let farenhiet = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${farenhiet} degrees Farenheit`);

// variable that contains the newton scale convertion.
let newton = Math.floor(celsius * (33/100));