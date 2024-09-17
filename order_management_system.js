const inventory = [{name: "icecream", price: 3.49, quantity:0},
    {name: "cheesecake", price: 6.99, quantity:5},
    {name: "rootbeer", price: 1.49, quantity:7},
    {name: "oreos", price: 3.99, quantity:15}];

let orders = [];
let orderedItems = ["icecream", "rootbeer", "oreos", "oreos"];
function placeOrder(x,y){
    let stock = []
for (i = 0; i<y.length; i++){
    let index = inventory.findIndex(item => item.name === y[i]); //Finds index of our ordered items in the inventory VERY IMPORTANT
    if (inventory[index].quantity<1){//takes the index.quantity and checks if its in stock
        console.log(`${y[i]} in your order is out of stock`)
        continue;//will skip whats below if it is out of stock
    }
    else {
        inventory[index].quantity-=1;
        console.log(`There are ${inventory[index].quantity} ${y[i]} left`);//subtracts 1 for every quantity
        stock.push({itemName: y[i], amount: 1});  
    }
}
let statuss = {Customer: x, status: "pending", items: stock};
let pendingStatus = orders.push(statuss);//push into order array
return pendingStatus;
}
placeOrder("Sam",orderedItems);
console.log(orders);

function calculateTotal(y){
let sum =0;
for (let i = 0; i < y.length; i++) {
    let index = inventory.findIndex(item=>item.name ===y[i]);
    if(inventory[index].quantity<1)
        continue;//skips if the item is out of stock
else
    sum+=(inventory[index].price);   //accumulates the sum 
}
sum = console.log(`The sum is $${sum}`);
return sum;
}
calculateTotal(orderedItems);