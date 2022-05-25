---
title: Changement entre Java 11 et Java 17 (v1.2022.05.25)
navMenu: true
toc: true
---

# Switch Case

- case multiple avec un
  séparateur `,` [@since Java 14](https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)
- `->` remplace `:` et évite
  le `break` [@since Java 12](https://www.oracle.com/java/technologies/javase/12all-relnotes.html#NewFeature)
- `->` peut être utilisé pour renvoyer une
  valeur [@since Java 14](https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)
  ```
- `->` switch sur le type pour _caster_ à la
  volée [@since Java 17](https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature)

# Class modifier

- `record` : nouveau type de class : immutable et
  génère `getter/hashCode/equals` [@since Java 14](https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)
- `sealed` : afin de verrouiller les possibilités
  d'héritage [@since Java 16](https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature)

# Formatage

- `NumberFormat` : ajout d'un formatage `SHORT` : 10k, 1M,
  etc. [@since Java 12](https://www.oracle.com/java/technologies/javase/12all-relnotes.html#NewFeature)
- `NumberFormat` : ajout d'un formatage `LONG`; avec `Locale` : A million, 2 mille,
  etc. [@since Java 14](https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)
- `NumberFormat` : ajout d’un formatage monnaie, avec `Locale` : $3.24, 5,61€,
  etc. [@since Java 14](https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)
- `DateTimeFormatter` : ajout du cycle, avec `Locale` : Matin, Après-midi,
  etc. [@since Java 16](https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature)

# Divers

- `String` : bloc String multiligne
  avec `"""` [@since Java 13](https://www.oracle.com/java/technologies/javase/13all-relnotes.html#NewFeature)
- `Exception` : meilleur message de debug sur les `Exception`, en particulier
  les `NullpointerException` [@since Java 17](https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature)
- `instanceof` : peut être suivi d'un nom de variable afin de caster
  immédiatement [@since Java 16](https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature)
- `Stream.toList` : afin d’éviter de passer
  par un `.collect()` [@since Java 16](https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature)

la source