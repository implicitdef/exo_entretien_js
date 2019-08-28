const LRUCache = require("./LRUCache");

test("LRUCache", async () => {
  // Crée un LRU cache, avec une capacité max de 2
  // C'est un cache qui permet
  const cache = new LRUCache(2);

  cache.put(1, "valeurPour1");
  cache.put(2, "valeurPour2");
  expect(cache.get(1)).toBe("valeurPour1");

  // On met une troisième valeur, au-delà de la capacité
  // La clé 2 doit être nettoyée
  // car la clé 1 a été lue plus récement
  cache.put(3, "valeurPour3");
  // On vérifie qu'elle n'est plus dans le cache
  expect(cache.get(2)).toBe(null);

  // Cette fois c'est 1 qui va être nettoyée
  cache.put(4, "valeurPour4");
  // On ne doit plus avoir que 3 et 4 dans le cache
  expect(cache.get(1)).toBe(null);
  expect(cache.get(3)).toBe("valeurPour3");
  expect(cache.get(4)).toBe("valeurPour4");
});

test("LRUCache avec capacité 4 ", async () => {
  // On vérifie qu'une capacité plus grande fonctionne aussi
  const cache = new LRUCache(4);

  cache.put(1, "valeurPour1");
  cache.put(2, "valeurPour2");
  cache.put(3, "valeurPour3");
  cache.put(4, "valeurPour4");

  expect(cache.get(3)).toBe("valeurPour3");
  expect(cache.get(1)).toBe("valeurPour1");
  // 2 va être nettoyée
  cache.put(5, "valeurPour5");
  cache.put(4, "nouvelleValeurPour4");

  expect(cache.get(1)).toBe("valeurPour1");
  expect(cache.get(2)).toBe(null);
  expect(cache.get(3)).toBe("valeurPour3");
  expect(cache.get(4)).toBe("nouvelleValeurPour4");
  expect(cache.get(5)).toBe("valeurPour5");
});
