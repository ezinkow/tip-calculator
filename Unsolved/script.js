var mealCost = document.querySelector(".meal-cost")
var tipPercentage = document.querySelector(".tip-percentage")
var submitButton = document.querySelector("#submit");
var tipAmount = document.querySelector("#tip-amount");
var newTotal = document.querySelector("#new-total");

/*
get meal cost value
get tip percentage
click submit button
calculate/display tip
display new total meal cost
*/


function calculateTip(cost, tip) {
    return Number(cost) * Number(tip / 100)
}

function calculateTotal(cost, tipInDollars) {
    return Number(cost) + tipInDollars
}


submitButton.addEventListener("click", function(event) {
    event.preventDefault()

    var tipValue = calculateTip(mealCost.value, tipPercentage.value)
        tipAmount.textContent = "$" + tipValue.toFixed(2)

    var totalValue = calculateTotal(mealCost.value,tipValue)
        newTotal.textContent = "$" + totalValue.toFixed(2)
})

// /*
// function calculateTip(cost, tip){
//   return Number(cost) * Number(tip / 100)
// }

// function calculateTotal(cost, tipInDollars) {
//   return Number(cost) + tipInDollars
// }

// submitButton.addEventListener('click', function(event) {
//   event.preventDefault()

//   var tipValue = calculateTip(mealCost.value, tipPercentage.value)
//   tipAmount.textContent = "$" + tipValue.toFixed(2)

//   var totalValue = calculateTotal(mealCost.value,tipValue)
//   newTotal.textContent = "$" + totalValue.toFixed(2)
// })
// /*