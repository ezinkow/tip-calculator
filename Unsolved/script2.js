var mealCost = document.querySelector(".meal-cost")
var tipPercentage = document.querySelector(".tip-percentage")
var submit = document.querySelector("#submit")
var tipAmount = document.querySelector("#tip-amount")
var total = document.querySelector("#new-total")


function tipTotal(cost,tip) {
    return Number(cost) * Number(tip/100)
}

function newTotal(cost,tipValue) {
    return Number(cost) + tipValue
}


submit.addEventListener("click",function(event) {
    event.preventDefault();

    var tip = tipTotal(mealCost.value,tipPercentage.value)
    tipAmount.textContent = "$" + tip

    var newMealCost = newTotal(mealCost.value,tip)
    total.textContent = "$" + newMealCost

})







/*
get meal cost value
get tip percentage
click submit button
calculate/display tip
display new total meal cost
*/

