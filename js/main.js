/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//
// Customer order info
let breadOrder = prompt("What kind of bread would you like (white, wheat, or flat)?", "wheat");


let meatOrder = prompt("What kind of meat would you like? Please separate with commas if you would like more than one.");


let toppingOrder = prompt("Which toppings would you like? Please separate with commas if multiple");


let condimentOrder = prompt("Which condiments would you like? Please separate with commas.");



// Process all the input to calculate values for the user's order.
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};


let meatArray = meatOrder.split(',');
let toppingArray = toppingOrder.split(',');
let condimentArray = condimentOrder.split(',');

// Calculate cost for meat, toppings, and condiments.
// This requires you to determine the length of each Array you just made
// and multiply out the costs. You will need to refer to the attributes of the
// `prices` object in order to calculate these costs.

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

// Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;

// Section for calculating tip.
let tip10 = totalPrice * .10; // 10% tip
let tip15 = totalPrice * .15; // 15% tip
let tip20 = totalPrice * .20; // 20% tip

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingOrder}</p>
    <p>Condiments: ${condimentOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class ="text-right">Suggested Tip: 10% = $${tip10.toFixed(2)} 15% = $${tip15.toFixed(2)} 20% = $${tip20.toFixed(2)}</p>
    <p class ="text-center">Have a great day, you rock!</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
