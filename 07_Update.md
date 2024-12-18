## Méthodes d'Update

On a la possibilité en MongoDB de modifier un ou plusieurs documents.

1. `updateOne()`
Modifie le **premier document** correspondant au filtre mis en place

```js
db.users.updateOne({name: "John"}, {$set: {age : 30}});
```
Met à jour le champ "age" du premier utilisateur nommé "John".

2. `updateMany()`
Modifie **tous les documents** correspondant au filtre.

```js
db.users.updateMany({status: "inactive"}, {$set: {status: "active"}});
```

3. `replaceOne()`
Remplacer un document entier par un nouveau.

```js
db.users.replaceOne({name: "John"}, {firstName: "Jonathan", age: 40});
```
