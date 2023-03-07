const planet = "Earth";
// .startsWith
console.log(planet.startsWith("Ear")); // true

// .includes
console.log(planet.includes("h")); // true
console.log(planet.includes("art")); // true
console.log(planet.includes("earth")); // false

// .endsWith
console.log(planet.endsWith("th")); // true

// returns the index of the FIRST INSTANCE this sub string occurs at
// returns -1 if not found
console.log(planet.search("ar")); // 1
console.log(planet.search("u")); // -1
