let cats = ["Sparky", "Wendy"];
let dogs = ["Stella", "Cody"];

// Now I want an animal array that also has the contents of cats and dogs.
// But this makes nested array...
let animals = ["Sparky", "Nemo", "Swimmy", cats, dogs];

// We can use spread operator to Spread out the contents of the cats and dogs into this.
animals = ["Sparky", "Nemo", "Swimmy", ...cats, ...dogs];
console.log(animals);
