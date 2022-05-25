---
title: Changement entre Java 11 et Java 17 (v1.2022.05.25)
navMenu: false
---

# Switch Case 
- case multiple avec un séparateur `,` [^java 14]
- `->` remplace `;` et évite le `break` (java 12)
- `->` peut être utilisé pour renvoyer une valeur (java 14)
- `->` switch sur un `Object` avec cast à la volée (java17)

# Class modifier
- `record` : nouveau type de class : immutable et génère `getter/hashCode/equals` (java 14)
- `sealed` : afin de verrouiller les possibilité d'héritage (java 16)

# Formatage
- `NumberFormat` : ajout d'un formatage `SHORT` : 10k, 1M, etc. (java 12)
- `NumberFormat` : ajout d'un formatage `LONG`; avec `Locale` : A million, 2 mille, etc. (java 14)
- `NumberFormat` : ajout d’un formatage monnaie, avec `Locale` : $3.24, 5,61€, etc. (java 14)
- `DateTimeFormatter` : ajout du cycle, avec `Locale` : Matin, Après-midi, etc. (java 16)

# Divers
- `String` : bloc String multiligne avec `"""` (java 13)
- `Exception` : meilleur message de debug sur les `Exception`, en particulier les `NullpointerException` (java17)
- `instanceof` : peut être suivi d'un nom de variable afin de caster immédiatement (java 16)
- `Stream.toList` : afin d’éviter de passer par un `.collect()` (java 16)


[^java 14]: [Java 14](#https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)

[Java 12](#https://www.oracle.com/java/technologies/javase/12all-relnotes.html#NewFeature)
[Java 13](#https://www.oracle.com/java/technologies/javase/13all-relnotes.html#NewFeature)
[Java 14](#https://www.oracle.com/java/technologies/javase/14all-relnotes.html#NewFeature)
[Java 15](#https://www.oracle.com/java/technologies/javase/15all-relnotes.html#NewFeature)
[Java 16](#https://www.oracle.com/java/technologies/javase/16all-relnotes.html#NewFeature)
[Java 17](#https://www.oracle.com/java/technologies/javase/17all-relnotes.html#NewFeature)
