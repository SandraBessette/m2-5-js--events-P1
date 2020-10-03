const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...

  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43, company: "Google" },
      ],
      "company"
    )
  ).toStrictEqual([null, null, "Google"]);

  expect(
  getValues(
    [
      { name: "chris", age: 23 },
      { name: "liv", age: 36 },
      { name: "dave", age: 43 },
    ],
    "age"
  )
).toStrictEqual([23, 36, 43]);

expect(
  getValues(
    [
      { name: "chris", age: 23 },    
    ],
    14
  )
).toStrictEqual([null]);

expect(
  getValues(    
      { name: "chris", age: 23 },   
    
    "age"
  )
).toStrictEqual(undefined);

  
});
