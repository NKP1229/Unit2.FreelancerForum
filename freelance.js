class freelancer {
  constructor(name, price, occupation) {
    (name = this.name), (price = this.price), (occupation = this.occupation);
  }
}
const namesArr = [
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose",
];
const occupArr = [
  "teacher",
  "teacher",
  "programmer",
  "teacher",
  "driver",
];
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
];
function getAvgPrice(){
  let Average = 0;
  for(let i=0; i<freelancers.length; i++){
    Average += freelancers[i].price;
  }
  Average = Math.round(Average / freelancers.length);
  return Average;
}
let counter = 2;
let names = [];
let occupations = [];
let prices = [];
let Price;
function newFreelancer(num1, num2) {
  // { name: "Prof. Prism", price: 81, occupation: "teacher" },
  // { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  // { name: "Prof. Spark", price: 76, occupation: "programmer" },
  // { name: "Dr. Wire", price: 47, occupation: "teacher" },
  // { name: "Prof. Goose", price: 72, occupation: "driver" },
  setTimeout(function() {
    console.log(num1, num2);
    const randPrice = Math.round(Math.random()*80);
    const newLancer = {name: namesArr[num1-1], price: randPrice, occupation: occupArr[num2-1]};
    console.log(newLancer);
    freelancers.push(newLancer);
    console.log(freelancers);
    updateTable(counter);
    setTimeout(function() {
      newFreelancer(Math.round(Math.random()*5),Math.round(Math.random()*5));
    }, 4000);
  }, 3000);
}
function updateTable(i){
  if(names[i]){
    names[i].textContent = `${freelancers[i].name}`;
    occupations[i].textContent = `${freelancers[i].occupation}`;
    prices[i].textContent = `${freelancers[i].price}`;
    counter++;
    Price.textContent = getAvgPrice();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  names = document.querySelectorAll("#name");
  occupations = document.querySelectorAll("#occupation");
  prices = document.querySelectorAll("#price");
  for(let i = 0; i < 3; i++){
    if(freelancers[i]){
      names[i].textContent = `${freelancers[i].name}`;
      occupations[i].textContent = `${freelancers[i].occupation}`;
      prices[i].textContent = `${freelancers[i].price}`;
    }
  }
  Price = document.getElementById("Price");
  Price.textContent = getAvgPrice();
});
newFreelancer(Math.round(Math.random()*5),Math.round(Math.random()*5));
