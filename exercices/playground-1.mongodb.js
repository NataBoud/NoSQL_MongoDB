// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("hopital");

db.createCollection("employees", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age", "department"],
            properties: {
                name: {
                    bsonType: "string",

                },
                age: {
                    bsonType: "int",
                    minimum: 18
                },
                department: {
                    bsonType: "string",
                }
            }
        }
    },
    validationLevel: "strict"
})

db.employees.insertMany([
    { name: "Alice2", age: 25, department: "HR" },
    { name: "Bob1", age: 30, department: "IT" }
]);

db.employees.insertOne(
    { name: "Charlie", age: 17 }
);