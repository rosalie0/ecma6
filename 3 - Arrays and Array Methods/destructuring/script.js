let cities = ["spokane", "boston", "portland", "seattle", "nyc"];

let [firstCity, secondCity, , , fifthCity] = [
  "spokane",
  "boston",
  "portland",
  "seattle",
  "nyc",
];
console.log(firstCity, fifthCity); // 'spokane' 'nyc'

// .includes

console.log(cities.includes("nyc")); // true
console.log(cities.includes("NYC")); // false
