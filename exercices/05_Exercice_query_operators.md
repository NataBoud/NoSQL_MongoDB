### Découverte des Query Operators avec MongoDB

#### Contexte
Vous travaillez en tant que développeur dans une petite entreprise de e-commerce. La base de données MongoDB de l’entreprise contient une collection `products` qui stocke des informations sur les produits disponibles. Voici un aperçu des documents de la collection : 

```json
{
    "_id": ObjectId("64b7c3b2e4e73324d845fc1a"),
    "name": "Smartphone X",
    "price": 799,
    "category": "Electronics",
    "stock": 15,
    "ratings": [4, 5, 3, 4],
    "discount": 0.1
},
{
    "_id": ObjectId("64b7c3b2e4e73324d845fc1b"),
    "name": "Running Shoes",
    "price": 120,
    "category": "Sportswear",
    "stock": 50,
    "ratings": [5, 5, 4, 5],
    "discount": 0.2
},
{
    "_id": ObjectId("64b7c3b2e4e73324d845fc1c"),
    "name": "Electric Kettle",
    "price": 35,
    "category": "Home Appliances",
    "stock": 0,
    "ratings": [3, 4, 4, 3],
    "discount": 0.15
},
{
    "_id": ObjectId("64b7c3b2e4e73324d845fc1d"),
    "name": "Bluetooth Speaker",
    "price": 45,
    "category": "Electronics",
    "stock": 30,
    "ratings": [4, 4, 5, 5],
    "discount": 0.1
}
```

---

#### Objectifs
Vous devez réaliser plusieurs requêtes pour extraire ou manipuler les données de cette collection en utilisant les query operators présentés dans l'annexe.

---

#### Questions

1. **Filtrage simple :**
   - Récupérez tous les produits de la catégorie `Electronics` avec un prix supérieur ou égal à 50.
   - Trouvez tous les produits qui ne sont pas en stock.

2. **Opérateurs logiques :**
   - Trouvez tous les produits dont le prix est inférieur à 100 **ou** qui ont une remise (champ `discount`) égale à 0.15.
   - Sélectionnez les produits qui appartiennent à la catégorie `Sportswear` **et** qui ont au moins 40 unités en stock.

3. **Opérateurs sur les tableaux :**
   - Récupérez les produits ayant au moins une note (champ `ratings`) strictement supérieure à 4.
   - Trouvez les produits ayant exactement 4 notes.

4. **Opérateurs d’éléments :**
   - Trouvez les produits ayant un champ `ratings` où au moins une des valeurs est inférieure ou égale à 3.
   - Sélectionnez les produits dont le champ `stock` **n'existe pas** ou n'a pas été défini.

5. **Mise à jour des données :**
   - Ajoutez un champ `featured` avec la valeur `true` pour tous les produits ayant un prix supérieur à 500.
   - Réduisez le stock de tous les produits de la catégorie `Electronics` de 5 unités.

6. **Suppression :**
   - Supprimez tous les produits ayant une remise strictement inférieure à 0.15.
