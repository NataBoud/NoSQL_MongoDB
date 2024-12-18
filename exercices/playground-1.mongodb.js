// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("hopital");

db.runCommand({
    collMod: "employees",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age", "department"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Chaîne de caractères, obligatoire",
                },
                age: {
                    bsonType: "int",
                    minimum: 18,
                    description: "Nombre entier, minimum : 18"
                },
                department: {
                    bsonType: "string",
                    pattern: "^[A-Z]{2}$",
                    description: "type string. Validation pour deux lettres majuscules."
                }
            }
        }
    },
    validationLevel: "strict"
});


db.employees.find();