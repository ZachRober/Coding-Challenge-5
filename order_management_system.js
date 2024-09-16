const inventory = [{name: "icecream", price: 3.49, quantity:0},
    {name: "cheesecake", price: 6.99, quantity:5},
    {name: "rootbeer", price: 1.49, quantity:7},
    {name: "oreos", price: 3.99, quantity:15}];

let orders = [];
let orderedItems = ["icecream", "rootbeer", "oreos", "oreos"];
function placeOrder(x,y){
let counter = [];
for (i = 0; i<y.length; i++){
  let indexItems = inventory.indexOf(y[i]);
    counter.push(indexItems); 
    if (inventory[counter[i].quantity]<1){
        console.log(`${y[i]} in your order is out of stock`)
    }
    else {
        inventory[counter[i].quantity-1]
    }
}
let status = {Customer: x, status: "pending", items: y}
let pendingStatus = orders.push(status)
return pendingStatus;
}
placeOrder("Sam",orderedItems);
console.log(orders);
