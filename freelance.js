class freelancer {
  constructor(name, price, occupation) {
    (name = this.name), (price = this.price), (occupation = this.occupation);
  }
}

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 5; i++) {
    const Name = document.getElementById(`n${i}`);
    const Occupation = document.getElementById(`o${i}`);
    const Price = document.getElementById(`p${i}`);
    Name.textContent = `${freelancers[i].name}`;
    Occupation.textContent = `${freelancers[i].occupation}`;
    Price.textContent = `${freelancers[i].price}`;
  }
});
