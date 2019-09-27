const LRUCache = require("./LRUCache");

test("LRUCache", () => {
  // Crée un LRU cache, avec une capacité max de 2
  const cache = new LRUCache(2);

  cache.put("A", "valeurPourA");
  cache.put("B", "valeurPourB");
  expect(cache.get("A")).toBe("valeurPourA");

  // On met une troisième valeur, au-delà de la capacité
  // La clé B doit être nettoyée
  // car la clé A a été lue plus récement
  cache.put("C", "valeurPourC");
  // On vérifie qu'elle n'est plus dans le cache
  expect(cache.get("B")).toBe(null);

  // Cette fois c'est A qui va être nettoyée
  cache.put("D", "valeurPourD");
  // On ne doit plus avoir que C et D dans le cache
  expect(cache.get("A")).toBe(null);
  expect(cache.get("B")).toBe(null);
  expect(cache.get("C")).toBe("valeurPourC");
  expect(cache.get("D")).toBe("valeurPourD");
});

test("LRUCache avec capacité 4 ", async () => {
  // On vérifie qu'une capacité plus grande fonctionne aussi
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
