// unlike objects,
// any value can be used as a key OR a value

let course = new Map();

// Map.set(key, value)
course.set("react", { description: "iu" });
course.set("jest", { description: "testing" });

console.log(course);
console.log(course.react); // undefined - cannot use dot notation
console.log(course.get("react")); // { description: "iu" })

// the key and value can be ANY types.
// You can start it w values directly into the constructor.
let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]],
]);

console.log(details.size); //3

// Other useful methods
details.forEach(function (item) {
  console.log(item);
});

/* Why use a map?
  - keys don't have to be strings
  - has insertion order, unlike objects
*/
