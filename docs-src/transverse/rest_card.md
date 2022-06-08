---
title: REST (2022.06.08)
navMenu: false
---

# En résumé

- **Re**presentational **S**tate **T**ransfer
- style d'architecture par services web
- utilisation du protocole [HTTP](https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
  /[HTTPS](https://fr.wikipedia.org/wiki/HyperText_Transfer_Protocol_Secure)
    - [codes retours](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP?tableofcontents=1)
    - informations dans body/header
    - surtout GET, POST, PUT et DELETE
    - mais aussi HEAD, PATCH, CONNECT, OPTIONS et TRACE
- interopérabilité des systèmes
- pas d'[état](https://fr.wikipedia.org/wiki/%C3%89tat_(informatique))&nbsp;: stateless
- mise en cache

# HTTP

## Méthodes

| Méthode | Utilisation                                                            |
|:--------|:-----------------------------------------------------------------------|
| GET     | Récupération de ressource, n'a aucun impact sur cette dernière         |
| POST    | Envoi de données afin de gérer, modifier ou ajouter des données        |
| PUT     | Remplacement ou ajout d'une ressource                                  |
| DELETE  | Suppression d'une ressource du serveur                                 |
| PATCH   | Modification partielle d'une ressource                                 |
| HEAD    | Récupération d'information sur la ressource sans demander la ressource |
| OPTIONS | Récupération des options de communication                              |
| CONNECT | Permet l'usage d'un proxy                                              |
| TRACE   | Le serveur doit retourner les données reçues, pour test ou diagnostic  |

## URI & exemples

| Méthodes | URI                            | Description                                                                                                    |
|:---------|:-------------------------------|:---------------------------------------------------------------------------------------------------------------|
| POST     | <nobr>api/fiches</nobr>        | crée une fiche grâce aux données dans le corps de la requête. Le retour doit fournir l'id de la nouvelle fiche |
| GET      | <nobr>api/fiches       </nobr> | récupère toutes les fiches Devrait être paginée                                                                |
| GET      | <nobr>api/fiches/{uid} </nobr> | récupère une seule fiche dont l'identifiant unique est {uid}                                                   |
| PUT      | <nobr>api/fiches/{uid} </nobr> | modifie la fiche avec l'identifiant unique {uid} dont les informations sont dans le corps de la requête        |
| DELETE   | <nobr>api/fiches/{uid} </nobr> | supprime la fiche avec l'identifiant unique {uid}                                                              |

## Hiérarchisation

| URI                                                     | Description                        |
|:--------------------------------------------------------|:-----------------------------------|
| <nobr>http://mywebsite.com/fiches </nobr>               | toutes les fiches                  |
| <nobr>http://mywebsite.com/fiches/42 </nobr>            | la fiche 42                        |
| <nobr>http://mywebsite.com/fiches/42/versions </nobr>   | toutes les versions de la fiche 42 |
| <nobr>http://mywebsite.com/fiches/42/versions/8 </nobr> | la version 8 de la fiche 42        |

## Code retour

### Code d'état

| Code d'état | État           |
|:-----------:|:---------------|
|     1xx     | Informations   |
|     2xx     | Succès         |
|     3xx     | Redirection    |
|     4xx     | Erreur client  |
|     5xx     | Erreur serveur |

### Les basiques

| Code | Message                            | Description                                        |
|:-----|:-----------------------------------|:---------------------------------------------------|
| 200  | <nobr>OK</nobr>                    | Le code par défaut en cas de succès                |
| 201  | <nobr>Created</nobr>               | La ressource a été créée avec succès               |
| 204  | <nobr>No-content</nobr>            | L'action est réussie mais le corps retour est vide |
| 401  | <nobr>Unauthorized</nobr>          | Authentification nécessaire                        |
| 403  | <nobr>Forbidden</nobr>             | Authentification et droits nécessaires             |
| 404  | <nobr>Not Found</nobr>             | La ressource ou l’URI n'existe pas                 |
| 500  | <nobr>Internal Server Error</nobr> | Erreur générique côté serveur                      |
| 504  | <nobr>Gateway Time-out</nobr>      | Le serveur n'a pas répondu dans le temps imparti   |


---
*Cette fiche a été publiée en premier sur https://nathvh.github.io/ par [Nathaniel](../about#nathaniel) sous
licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)*
