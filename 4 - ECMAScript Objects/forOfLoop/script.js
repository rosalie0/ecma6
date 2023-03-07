// symbols are a new primitive type, like strings or bools
// This can be used as a unique identifier that can co-exist with
// say a field like 'id'. avoids naming conflicts.
// created using a factory function

const id = Symbol();

const courseInfo = {
  title: "JS",
  topics: ["strings", "arrays", "objects"],
  id: "js-course",
};

courseInfo[id] = 41284;
console.log(courseInfo);
/*
  id: "js-course"
  title: "JS"
  topics: (3) ['strings', 'arrays', 'objects']
  Symbol():  41284
*/
