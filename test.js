const LRUCache = require("./LRUCache");

test("LRUCache peut stocker et retourner des valeurs", () => {
  // Crée un LRU cache, avec une capacité max de 10
  const cache = new LRUCache(10);
  // On met des valeurs
  cache.put("A", "valeurPourA");
  cache.put("B", "valeurPourB");
  // On doit pouvoir les lire
  expect(cache.get("A")).toBe("valeurPourA");
  expect(cache.get("B")).toBe("valeurPourB");
});

test("LRUCache peut remplacer des valeurs", () => {
  const cache = new LRUCache(10);
  // On met un valeur puis on la remplace
  cache.put("A", "valeurPourA");
  cache.put("A", "nouvelleValeurPourA");
  expect(cache.get("A")).toBe("nouvelleValeurPourA");
});

test("LRUCache a une capacité max", () => {
  // Crée un LRU cache, avec une capacité max de 3
  const cache = new LRUCache(3);

  cache.put("A", "valeurPourA");
  cache.put("B", "valeurPourB");
  cache.put("C", "valeurPourC");

  // On lit la clé A
  cache.get("A");

  // On met une 4ème valeur, au-delà de la capacité
  // La clé B doit être nettoyée
  // car la clé A a été lue plus récement
  cache.put("D", "valeurPourD");
  // On vérifie que B n'est plus dans le cache
  expect(cache.get("B")).toBe(null);
});

test("LRUCache avec capacité 4 ", async () => {
  // On vérifie avec une capacité différente
  const cache = new LRUCache(4);

  cache.put("A", "valeurPourA");
  cache.put("B", "valeurPourB");
  cache.put("C", "valeurPourC");
  cache.put("D", "valeurPourD");

  expect(cache.get("C")).toBe("valeurPourC");
  expect(cache.get("A")).toBe("valeurPourA");
  // B va être nettoyée
  cache.put("E", "valeurPourE");
  cache.put("D", "nouvelleValeurPourD");

  expect(cache.get("A")).toBe("valeurPourA");
  expect(cache.get("B")).toBe(null);
  expect(cache.get("C")).toBe("valeurPourC");
  expect(cache.get("D")).toBe("nouvelleValeurPourD");
  expect(cache.get("E")).toBe("valeurPourE");
});
