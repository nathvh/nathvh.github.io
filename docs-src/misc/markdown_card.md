---
title: Markdown (2022.06.08)
navMenu: false
---


# Les bases

| Nom & Rendu                                 | Markdown                    | HTML                                                          | 
|:--------------------------------------------|:----------------------------|:--------------------------------------------------------------|
| <h1>Titre 1</h1>                            | # Titre 1                   | \<h1>Titre 1\</h1>                                            | 
| <h2>Titre 2</h2>                            | ## Titre 2                  | \<h2>Titre 2\</h2>                                            |
| <h3>Titre 3</h3>                            | ### Titre 3                 | \<h3>Titre 3\</h3>                                            |
| <h4>Titre 4</h4>                            | #### Titre 4                | \<h4>Titre 4\</h4>                                            |
| <h5>Titre 5</h5>                            | ##### Titre 5               | \<h5>Titre 5\</h5>                                            |
| <h6>Titre 6</h6>                            | ###### Titre 6              | \<h6>Titre 6\</h6>                                            |
| <strong>Gras</strong>                       | \*\*Gras\*\*                | \<strong>Gras\</strong>                                       |
| <em>Italique</em>                           | \*Italique\*                | \<em>Italique\</em>                                           |
| <blockquote>Citation</blockquote>           | \> Citation                 | \<blockquote>Citation\</blockquote>                           |
| <ol><li>Liste</li><li>ordonnée</li><ol>     | 1. Liste <br> 2.ordonnée    | \<ol><br>\<li>Liste\</li><br>\<li>ordonnée\</li><br>\<ol>     |
| <ul><li>Liste</li><li>non ordonnée</li><ul> | - Liste <br> - non ordonnée | \<ul><br>\<li>Liste\</li><br>\<li>non ordonnée\</li><br>\<ul> |
| <code>Code</code>                           | \`Code\`                    | \<code>Code\</code>                                           |
| <hr>                                        | \-\-\-                      | \<hr>                                                         |
| <a href="www.site.fr">lien</a>              | \[lien]\(www.site.fr)       | \<a href="www.site.fr">lien\</a>                              |
| ![image](unknown.png)                       | \!\[image](unknown.png)     | \<img src="unknown.png" alt="image">                          |

# Les compléments

| Nom & Rendu                                                        | Markdown                                                               | HTML                                                                               | 
|:-------------------------------------------------------------------|:-----------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| <table><tr><td>Tableau C1</td><td>Tableau C2</td><tr></table>      | &vert; Tableau&nbsp;C1 &vert; Tableau&nbsp;C2 &vert;                   | \<table>\<tr><br>\<td>Tableau C1\</td><br>\<td>Tableau C2\</td><br>\<tr>\</table>  |
| <table><thead><tr><th>Entête&nbsp;tableau</th><tr></thead></table> | &vert; Entête&nbsp;tableau &vert;<br>&vert;---------------------&vert; | \<table>\<thead><br>\<tr>\<th>Entête&nbsp;tableau\</th>\<tr><br>\</thead>\</table> |
| <code>Code<br>multiligne</code>                                    | \```<br>Code<br>multiligne<br>```                                      | \<code>Code\<br>multiligne\</code>                                                 |
| Note de fin de page                                                | [^1] & [^1]: descriptif                                                | *pas d'équivalent*                                                                 |
| <h3 id="perso">Un super titre<h3>                                  | ### Un super titre {#perso}                                            | \<h3 id="perso">Un super titre\<h3>                                                |
| <dl><dt>Mot</dt><dd>Définition.</dd></dl>                          | Mot<br>: Définition                                                    | \<dl><br>\<dt>Mot\</dt><br>\<dd>Définition\</dd><br>\</dl>                         | 
| <del>Barré<del>                                                    | \~\~Barré~~                                                            | \<del>Barré\<del>                                                                  |
| <input type="checkbox" checked> Case cochée</input>                | - [X] Case cochée                                                      | \<input type="checkbox" checked> Case cochée\</input>                              |
| <input type="checkbox"> Case décochée</input>                      | - [ ] Case décochée                                                    | \<input type="checkbox"> Case décochée\</input>                                    |
| &#128514;                                                          | :joy:                                                                  | &#128514;                                                                          |
| <mark>Surligné</mark>                                              | \=\=Surligné\=\=                                                       | \<mark>Surligné\</mark>                                                            |
| H<sub>2</sub>O                                                     | H\~2\~O                                                                | H\<sub>2\</sub>O                                                                   |
| X<sup>2</sup>                                                      | X^2^                                                                   | X\<sup>2\</sup>                                                                    |

---
*Cette fiche a été publiée en premier sur https://nathvh.github.io/ par [Nathaniel](../about#nathaniel) sous licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)* 
