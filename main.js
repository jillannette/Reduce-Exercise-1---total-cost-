var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

var costOfAllShoes = shoes.reduce(function(sum, shoe) {
  return sum + shoe.price;   //answer shows return shoe.price + total;
}, 0);
console.log(costOfAllShoes);
//both examples arrive at same total cost of $935
