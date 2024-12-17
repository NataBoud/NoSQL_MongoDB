## Création de collections en MongoDB

Une collection est un regroupement de documents similaires stockés dans une base de données.
Elle est similaire à une table dans une base de données relationnelle, mais elle stocke des documents JSON au lieu de lignes et colonnes.

**Caractéristiques:**
- Pas de schéma rigide (par défaut.)
- Les collections sont créées automatiquement lorsqu'un document y est inséré, sauf si des validations ou des options spécifiques sont définies.

### Méthodes de création de collections

1. **Création automatique**  
Mongo créé automatiquement une collection à l'insert de document

```js
db.articles.insertOne({title: "Bienvenue sur mon blog", author: "Benoit Lecoeuvre"});
```

2. **Création explicite**  
Utilise `createCollection()` pour créer une collection avec des options spécifiques comme des règles de validation ou des index.

```js
db.createCollection("articles");
```
Créé une collection vide appelée `articles` sans options supplémentaires.

3. **Paramètres disponibles**

```js
db.createCollection("<nom_de_la_collection>", {
    capped: <boolean>,
    size: <number>,
    max: <number>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>
})
```

**capped:** Indique si la collection est de type "circulaire" avec une taille maximale. Les documents les plus anciens sont supprimés lorsque la taille limite est atteinte.
**size:** Taille maximale de la collection en octets (obligatoire pour une collection "capped")
**max:** Nombre maximum de documents dans une collection "capped".
**validator:** Règles de validation JSON Schema.
**validationLevel:**
- "strict" (par défaut): Applique la validation à toutes les opérations.
- "moderate": Valide uniquement à l'insertion de nouvelles données.
**validationAction:**
- "error" (par défaut): Rejette les documents non conformes
- "warn" : Ajoute un avertissement sans rejeter le document.

```js
db.createCollection("logs", {
    capped: true,
    size: 1048576, // 1 MB
    max: 1000 // Limite de 1000 documents
});
```

