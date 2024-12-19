// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("e-commerce");


// db.createCollection("products");
// db.products.insertMany([
//     {
//         "_id": ObjectId("64b7c3b2e4e73324d845fc1a"),
//         "name": "Smartphone X",
//         "price": 799,
//         "category": "Electronics",
//         "stock": 15,
//         "ratings": [4, 5, 3, 4],
//         "discount": 0.1
//     },
//     {
//         "_id": ObjectId("64b7c3b2e4e73324d845fc1b"),
//         "name": "Running Shoes",
//         "price": 120,
//         "category": "Sportswear",
//         "stock": 50,
//         "ratings": [5, 5, 4, 5],
//         "discount": 0.2
//     },
//     {
//         "_id": ObjectId("64b7c3b2e4e73324d845fc1c"),
//         "name": "Electric Kettle",
//         "price": 35,
//         "category": "Home Appliances",
//         "stock": 0,
//         "ratings": [3, 4, 4, 3],
//         "discount": 0.15
//     },
//     {
//         "_id": ObjectId("64b7c3b2e4e73324d845fc1d"),
//         "name": "Bluetooth Speaker",
//         "price": 45,
//         "category": "Electronics",
//         "stock": 30,
//         "ratings": [4, 4, 5, 5],
//         "discount": 0.1
//     }
// ]);



// 1. **Filtrage simple :**

db.products.find({
    category: "Electronics",
    price: { $gte: 50 }
}, {
    name: 1,
    price: 1,
    _id: 0
});

db.products.find({
    stock: 0,
}, {
    name: 1,
    _id: 0
});


// 2. **Opérateurs logiques :**

db.products.find(
    {
        $or: [
            { price: { $lt: 100 } },
            { discount: 0.15 }
        ]
    },
    {
        name: 1,
        _id: 0
    }
);

db.products.find(
    {
        $and: [
            { category: "Sportswear", },
            { stock: { $gte: 40 } }
        ]
    },
    {
        name: 1,
        _id: 0
    }
);

// 3. **Opérateurs sur les tableaux :**

db.products.find(
    {
        ratings: { $elemMatch: { $gt: 4 } }
    },
    {
        name: 1,
        _id: 0
    }
);

db.products.find(
    {
        ratings: { $size: 4 }
    },
    {
        name: 1,
        _id: 0
    }
);



// 4. **Opérateurs d’éléments :**

db.products.find(
    {
        ratings: { $elemMatch: { $lte: 3 } }
    },
    {
        name: 1,
        _id: 0
    }
);

db.products.find(
    {
        stock: { $exists: false }
    },
    {
        name: 1,
        _id: 0
    }
);

// 5. **Mise à jour des données :**

db.products.updateMany(
    {
        price: { $gt: 500 }
    },
    {
        $set: { featured: true }
    }
);

db.products.updateMany(
    {
    },
    {
        $set: { price: 130 }
    }
);

db.products.updateMany(
    {
        category: "Sportswear"
    },
    {
        $inc: { stock: -5 }
    }
);

// 6. ** Suppression :**

// db.products.deleteMany(
//     {
//         discount: { $lt: 0.15 }
//     }
// );


db.products.updateMany(
    {
        category: "Sportswear"
    },
    {
        $inc: { stock: -5 }
    }
);


db.products.updateMany(
    {
    },
    {
        $set: { stock: 130 }
    }
);

db.products.find()
