# Théorie des Graphes — Support de Révision Complet
**Université :** UMMTO — Université Mouloud Mammeri de Tizi-Ouzou  
**Niveau :** Licence L2 Informatique  
**Module :** Théorie des Graphes  
**Enseignant :** M. Aouane

---

> **Comment utiliser ce document ?**  
> Ce support est conçu pour préparer un examen sans avoir besoin des notes originales. Chaque chapitre suit la même structure : définitions → propriétés → théorèmes → exemples détaillés → exercices corrigés. Lisez d'abord le résumé en fin de chapitre, puis revenez aux détails si nécessaire.

---

# Table des matières

1. [Notions fondamentales](#chapitre-1--notions-fondamentales)
2. [Types de graphes particuliers](#chapitre-2--types-de-graphes-particuliers)
3. [Connexité](#chapitre-3--connexité)
4. [Représentations matricielles](#chapitre-4--représentations-matricielles)
5. [Parcours eulériens et hamiltoniens](#chapitre-5--parcours-eulériens-et-hamiltoniens)
6. [Arbres et forêts](#chapitre-6--arbres-et-forêts)
7. [Graphes planaires](#chapitre-7--graphes-planaires)
8. [Couplage](#chapitre-8--couplage)

---

# Chapitre 1 : Notions fondamentales

## Introduction

Un **graphe** est un objet mathématique qui modélise des relations entre des entités. On l'utilise partout en informatique : réseaux de communication, cartographie, ordonnancement de tâches, réseaux sociaux, compilation (graphes de dépendances), etc.

Comprendre les graphes, c'est disposer d'un langage universel pour modéliser et résoudre des problèmes concrets.

---

## Définitions

### Graphe non orienté

> **Définition.** Un graphe (non orienté) est un couple $G = (V, E)$ où :
> - $V$ est un ensemble fini non vide appelé **ensemble des sommets** (*vertices*),
> - $E$ est un ensemble de paires non ordonnées de sommets appelées **arêtes** (*edges*).

**Explication intuitive.** Les sommets sont des points, les arêtes sont des liens entre ces points. Si on pense à un réseau routier, les villes sont les sommets et les routes sont les arêtes.

**Notations :**
- $n = |V|$ : **ordre** du graphe (nombre de sommets).
- $m = |E|$ : **taille** du graphe (nombre d'arêtes).
- Une arête entre les sommets $u$ et $v$ est notée $\{u, v\}$ ou simplement $uv$.

**Exemple.** Soit $G = (V, E)$ avec $V = \{1, 2, 3, 4\}$ et $E = \{\{1,2\}, \{1,3\}, \{2,4\}, \{3,4\}\}$.

```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((2)) --- ((4))
  ((3)) --- ((4))
```

Ce graphe a $n = 4$ sommets et $m = 4$ arêtes.

---

### Degré d'un sommet

> **Définition.** Le **degré** d'un sommet $v$, noté $\deg(v)$ (ou $d(v)$), est le nombre d'arêtes incidentes à $v$.

**Explication intuitive.** C'est le nombre de voisins directs d'un sommet — le nombre de routes qui partent d'une ville.

- Un sommet de degré $0$ est **isolé**.
- Un sommet de degré $1$ est une **feuille**.

**Exemple.** Dans le graphe ci-dessus : $\deg(1) = 2$, $\deg(2) = 2$, $\deg(3) = 2$, $\deg(4) = 2$.

---

### Voisinage

> **Définition.** Le **voisinage** de $v$, noté $N(v)$, est l'ensemble des sommets adjacents à $v$ :
> $$N(v) = \{u \in V \mid \{u, v\} \in E\}$$

---

## Propriétés

### Lemme des poignées de mains (Handshaking Lemma)

> **Propriété fondamentale.** Pour tout graphe $G = (V, E)$ :
> $$\sum_{v \in V} \deg(v) = 2|E| = 2m$$

**Intuition.** Chaque arête contribue exactement 2 au total des degrés (une fois pour chacun de ses deux sommets). C'est comme serrer la main : chaque poignée de main implique deux personnes.

**Corollaire important.** Le nombre de sommets de degré impair est toujours **pair**.

**Exemple.** Dans un graphe avec 5 arêtes, $\sum \deg(v) = 10$.

---

## Théorèmes

### Théorème de la somme des degrés

> **Théorème.** Dans tout graphe $G = (V, E)$ d'ordre $n$ et de taille $m$ :
> $$\sum_{v \in V} \deg(v) = 2m$$

**Démonstration.** Chaque arête $\{u, v\}$ est comptée exactement une fois dans $\deg(u)$ et une fois dans $\deg(v)$, donc deux fois dans la somme totale. $\square$

**Application.** Si un graphe a 6 sommets et la somme des degrés vaut 14, alors il a $m = 7$ arêtes.

---

## Exemples détaillés

**Exemple 1.** Construire un graphe avec $V = \{a, b, c, d, e\}$ et $E = \{\{a,b\}, \{a,c\}, \{b,c\}, \{c,d\}, \{d,e\}\}$.

- Ordre : $n = 5$
- Taille : $m = 5$
- Degrés : $\deg(a)=2$, $\deg(b)=2$, $\deg(c)=3$, $\deg(d)=2$, $\deg(e)=1$
- Vérification : $2 + 2 + 3 + 2 + 1 = 10 = 2 \times 5$ ✓

```mermaid
graph LR
  ((a)) --- ((b))
  ((a)) --- ((c))
  ((b)) --- ((c))
  ((c)) --- ((d))
  ((d)) --- ((e))
```

**Exemple 2.** Un graphe avec 4 sommets tous de degré 3 est-il possible ?

- Somme des degrés = $4 \times 3 = 12 = 2m$ → $m = 6$.
- C'est possible : c'est $K_4$ (le graphe complet à 4 sommets, vu au chapitre suivant).

---

## Graphes et illustrations

**Contre-exemple — Graphe impossible :** Un graphe avec 3 sommets tous de degré impair 3.

- Somme = $3 \times 3 = 9$, qui est impair. Or $2m$ est toujours pair. **Impossible.**

---

## Remarques importantes

> ⚠️ **Erreur fréquente :** Confondre *ordre* ($n$ = nombre de sommets) et *taille* ($m$ = nombre d'arêtes).

> 💡 **Astuce examen :** Le lemme des poignées de mains permet de vérifier rapidement si un graphe est cohérent (si $\sum \deg(v)$ est impair, il y a une erreur).

> 📌 **Point clé :** Le nombre de sommets de degré impair est toujours pair (sinon la somme serait impaire, contrairement à $2m$).

---

## Résumé

| Notion | Notation | Définition |
|--------|----------|------------|
| Graphe | $G = (V,E)$ | Sommets + arêtes |
| Ordre | $n = \|V\|$ | Nombre de sommets |
| Taille | $m = \|E\|$ | Nombre d'arêtes |
| Degré | $\deg(v)$ | Nombre de voisins de $v$ |
| Voisinage | $N(v)$ | Ensemble des voisins de $v$ |

**Formule à retenir :**
$$\sum_{v \in V} \deg(v) = 2m$$

---

## Exercices

**Exercice 1** *(facile)*  
Un graphe $G$ a 5 sommets et 7 arêtes. Quelle est la somme des degrés ?

**Exercice 2** *(facile)*  
Peut-il exister un graphe avec les degrés suivants : $(1, 2, 3, 2, 4)$ et 6 arêtes ?

**Exercice 3** *(moyen)*  
Montrez qu'un graphe de 5 sommets où chaque sommet est de degré 2 a exactement 5 arêtes. Dessinez un tel graphe.

**Exercice 4** *(difficile)*  
Montrez qu'il n'existe pas de graphe simple ayant exactement 5 sommets dont les degrés sont $(4, 4, 3, 2, 1)$.

---

## Corrigés

**Exercice 1.** $\sum \deg(v) = 2m = 2 \times 7 = 14$.

**Exercice 2.** Somme des degrés = $1+2+3+2+4 = 12$. On a $2m = 12$ donc $m = 6$ ✓. Oui, c'est possible a priori (il faut vérifier que le graphe simple correspondant existe, ce qui est garanti par le théorème d'Erdős–Gallai, hors programme).

**Exercice 3.** Somme = $5 \times 2 = 10 = 2m$, donc $m = 5$. Un exemple : le cycle $C_5$.

```mermaid
graph LR
  ((1)) --- ((2)) --- ((3)) --- ((4)) --- ((5)) --- ((1))
```

**Exercice 4.** Le degré maximum dans un graphe simple à $n=5$ sommets est $n-1 = 4$. Le sommet de degré 4 est adjacent à tous les autres. Donc le sommet de degré 1 est adjacent au sommet de degré 4 uniquement. Mais alors le sommet de degré 1 devrait aussi être adjacent au sommet de degré 4 dans la séquence… Le sommet de degré 1 est voisin du sommet de degré 4. Mais le sommet de degré 4 l'est aussi avec les sommets de degrés 4, 3, 2, 1. Le sommet de degré 1 ne peut pas avoir degré 1 tout en étant adjacent au sommet de degré 4 qui n'est adjacent qu'à 4 autres — contradiction car le dernier sommet (deg 1) ne peut pas aussi avoir degré 0. Somme = $4+4+3+2+1=14 = 2 \times 7$, donc $m = 7$. Avec $n=5$ sommets, le maximum d'arêtes est $\binom{5}{2} = 10$, donc $m=7$ est possible en théorie. Cependant, deux sommets de degré 4 dans $K_5$ signifient qu'ils sont tous deux adjacents aux 4 autres sommets — y compris l'un à l'autre. Mais alors chaque autre sommet est adjacent à ces deux sommets de degré 4, ce qui impose $\deg \geq 2$ pour tous. Or $\deg(\text{dernier}) = 1$, contradiction. **Impossible.**

---

# Chapitre 2 : Types de graphes particuliers

## Introduction

Certains graphes ont des structures régulières qui apparaissent souvent dans les applications. Les reconnaître immédiatement est essentiel pour l'examen.

---

## Définitions

### Graphe simple

> **Définition.** Un graphe est **simple** si :
> - il ne contient pas de **boucle** (arête d'un sommet vers lui-même),
> - il ne contient pas d'**arêtes multiples** (deux arêtes entre les mêmes sommets).

Dans ce cours, tous les graphes considérés sont simples sauf mention contraire.

---

### Graphe complet $K_n$

> **Définition.** Le **graphe complet** $K_n$ est le graphe simple à $n$ sommets où **chaque paire de sommets** est reliée par une arête.

**Propriétés de $K_n$ :**
- Chaque sommet est de degré $n-1$.
- Nombre d'arêtes : $m = \dfrac{n(n-1)}{2}$

**Intuition.** $K_n$ est le graphe « le plus dense possible » — on ne peut pas ajouter d'arête supplémentaire.

**Exemples :**

$K_3$ (triangle) :
```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((1)) --- ((3))
```

$K_4$ :
```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((1)) --- ((4))
  ((2)) --- ((3))
  ((2)) --- ((4))
  ((3)) --- ((4))
```

$K_4$ a $\dfrac{4 \times 3}{2} = 6$ arêtes et chaque sommet est de degré 3.

---

### Graphe biparti

> **Définition.** Un graphe $G = (V, E)$ est **biparti** s'il existe une partition $V = V_1 \cup V_2$ (avec $V_1 \cap V_2 = \emptyset$, $V_1 \neq \emptyset$, $V_2 \neq \emptyset$) telle que toute arête a une extrémité dans $V_1$ et l'autre dans $V_2$.

**Autrement dit :** aucune arête ne relie deux sommets du même côté.

**Notation :** $G = (V_1, V_2, E)$

**Intuition.** Imaginez un graphe de tâches-machines : les tâches sont dans $V_1$, les machines dans $V_2$, et une arête signifie « cette machine peut faire cette tâche ».

**Exemple :**

```mermaid
graph LR
  subgraph V1
    ((a))
    ((b))
    ((c))
  end
  subgraph V2
    ((x))
    ((y))
    ((z))
  end
  ((a)) --- ((x))
  ((a)) --- ((y))
  ((b)) --- ((y))
  ((b)) --- ((z))
  ((c)) --- ((z))
```

> ⚠️ **Remarque.** Un graphe biparti ne contient **aucun cycle de longueur impaire**. C'est même une caractérisation (théorème de König).

---

### Graphe biparti complet $K_{p,q}$

> **Définition.** $K_{p,q}$ est le graphe biparti où $|V_1| = p$, $|V_2| = q$, et **toutes** les arêtes possibles entre $V_1$ et $V_2$ sont présentes.

**Nombre d'arêtes de $K_{p,q}$ :** $m = p \times q$

**Exemple.** $K_{2,3}$ a $2 \times 3 = 6$ arêtes.

```mermaid
graph LR
  subgraph V1
    ((u1))
    ((u2))
  end
  subgraph V2
    ((v1))
    ((v2))
    ((v3))
  end
  ((u1)) --- ((v1))
  ((u1)) --- ((v2))
  ((u1)) --- ((v3))
  ((u2)) --- ((v1))
  ((u2)) --- ((v2))
  ((u2)) --- ((v3))
```

---

### Chemin (Chaîne)

> **Définition.** Une **chaîne** (ou chemin) de longueur $k$ dans $G$ est une suite de sommets $v_0, v_1, \ldots, v_k$ tels que $\{v_i, v_{i+1}\} \in E$ pour tout $i$.

- La **longueur** est le nombre d'arêtes ($= k$).
- Une chaîne est **simple** si elle ne répète aucune arête.
- Une chaîne est **élémentaire** si elle ne répète aucun sommet.

**Exemple.** Dans le graphe ci-dessous, $1, 2, 4, 3$ est une chaîne de longueur 3.

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((2)) --- ((4))
  ((3)) --- ((4))
  ((4)) --- ((5))
  ((3)) --- ((6))
```

La suite $1, 2, 4, 3$ utilise les arêtes $\{1,2\}, \{2,4\}, \{4,3\}$ — c'est une chaîne élémentaire.

---

### Cycle

> **Définition.** Un **cycle** de longueur $k$ (noté $C_k$) est une chaîne fermée $v_0, v_1, \ldots, v_{k-1}, v_0$ où tous les sommets $v_0, \ldots, v_{k-1}$ sont distincts et $k \geq 3$.

**Exemple.** $C_4$ :

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
  ((4)) --- ((1))
```

> ⚠️ **Distinction importante :**
> - **Chaîne** : suite de sommets (pas forcément fermée).
> - **Cycle** : chaîne fermée sans répétition de sommet.

---

### Distance

> **Définition.** La **distance** entre deux sommets $u$ et $v$, notée $d(u, v)$, est la longueur du plus court chemin entre $u$ et $v$. Si $u$ et $v$ ne sont pas connectés, on pose $d(u,v) = +\infty$.

---

## Propriétés

| Type | Ordre | Taille | Degré de chaque sommet |
|------|-------|--------|----------------------|
| $K_n$ | $n$ | $\frac{n(n-1)}{2}$ | $n-1$ |
| $K_{p,q}$ | $p+q$ | $p \cdot q$ | $q$ (dans $V_1$), $p$ (dans $V_2$) |
| $C_n$ | $n$ | $n$ | $2$ |
| Chemin $P_n$ | $n$ | $n-1$ | $1$ (extrémités), $2$ (intérieur) |

---

## Exemples détaillés

**Exemple.** Identifier le graphe : $V = \{1, 2, 3, 4, 5, 6\}$, $E = \{\{1,4\}, \{1,5\}, \{1,6\}, \{2,4\}, \{2,5\}, \{2,6\}, \{3,4\}, \{3,5\}, \{3,6\}\}$.

- $V_1 = \{1,2,3\}$, $V_2 = \{4,5,6\}$
- Toutes les arêtes vont de $V_1$ à $V_2$.
- $|V_1| = 3$, $|V_2| = 3$ → c'est $K_{3,3}$ !
- Nombre d'arêtes : $3 \times 3 = 9$ ✓

---

## Remarques importantes

> 💡 **Astuce.** Pour vérifier qu'un graphe est biparti, essayez de le 2-colorier (colorier chaque sommet avec l'une de deux couleurs, de sorte que les voisins aient toujours des couleurs différentes). Si c'est possible, il est biparti.

> ⚠️ **Piège.** $K_{1,n}$ est appelé **étoile** — tous les sommets de $V_2$ sont reliés à un unique sommet central. Ce n'est pas la même chose que $K_n$.

---

## Résumé

- $K_n$ : graphe complet, tous les sommets reliés entre eux.
- Graphe biparti : sommets divisés en deux groupes, arêtes uniquement entre groupes.
- $K_{p,q}$ : biparti complet.
- Cycle $C_k$ : circuit fermé à $k$ sommets.
- Chaîne : suite de sommets reliés par des arêtes.

---

## Exercices

**Exercice 1** *(facile)*  
Combien d'arêtes a $K_7$ ? Quel est le degré de chaque sommet ?

**Exercice 2** *(facile)*  
$K_{4,5}$ a combien d'arêtes ? Quels sont les degrés des sommets ?

**Exercice 3** *(moyen)*  
Le graphe $G$ avec $V = \{a, b, c, d\}$ et $E = \{\{a,c\}, \{a,d\}, \{b,c\}, \{b,d\}\}$ est-il biparti ? Justifiez.

**Exercice 4** *(moyen)*  
Donnez un exemple de chaîne de longueur 3, un exemple de cycle de longueur 4 dans $K_4$.

---

## Corrigés

**Exercice 1.** $m = \frac{7 \times 6}{2} = 21$ arêtes. Chaque sommet est de degré $6$.

**Exercice 2.** $m = 4 \times 5 = 20$ arêtes. Les 4 sommets de $V_1$ sont de degré 5 ; les 5 sommets de $V_2$ sont de degré 4.

**Exercice 3.** Oui : posons $V_1 = \{a, b\}$ et $V_2 = \{c, d\}$. Toutes les arêtes ont une extrémité dans $V_1$ et l'autre dans $V_2$. C'est $K_{2,2}$.

**Exercice 4.** Dans $K_4 = (\{1,2,3,4\}, E)$ :  
- Chaîne de longueur 3 : $1, 2, 3, 4$.  
- Cycle de longueur 4 : $1, 2, 3, 4, 1$.

---

# Chapitre 3 : Connexité

## Introduction

La connexité répond à une question fondamentale : peut-on aller de n'importe quel sommet à n'importe quel autre ? En réseau informatique : le réseau est-il opérationnel entre tous les nœuds ?

---

## Définitions

### Graphe connexe

> **Définition.** Un graphe $G = (V, E)$ est **connexe** si pour toute paire de sommets $u, v \in V$, il existe une chaîne reliant $u$ à $v$.

**Intuition.** Un graphe connexe est « d'un seul morceau ».

**Contre-exemple (non connexe) :**

```mermaid
graph LR
  ((1)) --- ((2))
  ((3)) --- ((4))
```

Ce graphe n'est pas connexe : on ne peut pas aller de 1 à 3.

---

### Composante connexe

> **Définition.** Une **composante connexe** de $G$ est un sous-graphe connexe maximal de $G$.

**Intuition.** Les composantes connexes sont les « morceaux » du graphe.

**Notation.** On note $CC(G)$ le nombre de composantes connexes de $G$.

**Exemple.** Le graphe suivant a 3 composantes connexes :

```mermaid
graph LR
  subgraph CC1
    ((1)) --- ((2))
    ((2)) --- ((3))
  end
  subgraph CC2
    ((4)) --- ((5))
  end
  subgraph CC3
    ((6))
  end
```

$CC(G) = 3$.

---

### Sommet / Arête coupant(e)

> **Définition.** Un **sommet coupant** (*cut vertex*) est un sommet dont la suppression augmente le nombre de composantes connexes.

> **Définition.** Une **arête coupante** (*bridge* ou *isthme*) est une arête dont la suppression augmente le nombre de composantes connexes.

**Exemple.** Dans la chaîne $1 - 2 - 3$, le sommet 2 est coupant (supprimer 2 sépare 1 et 3). L'arête $\{1,2\}$ est un pont.

---

## Propriétés

### Propriété fondamentale

> Pour un graphe connexe à $n$ sommets, on a toujours $m \geq n - 1$.

**Intuition.** Il faut au moins $n-1$ arêtes pour « relier » $n$ sommets (comme dans un arbre).

### Relation entre composantes connexes et arêtes

> Si $G$ a $n$ sommets, $m$ arêtes et $p$ composantes connexes, alors :
> $$m \geq n - p$$

**Cas particulier.** Si $G$ est connexe ($p = 1$) : $m \geq n - 1$.

---

## Théorèmes

### Théorème de caractérisation de la connexité

> **Théorème.** Un graphe $G = (V,E)$ est connexe si et seulement si pour toute partition $(S, V \setminus S)$ de $V$ avec $S \neq \emptyset$ et $S \neq V$, il existe au moins une arête entre $S$ et $V \setminus S$.

**Intuition.** On ne peut pas couper le graphe en deux parties sans couper au moins une arête.

---

### Algorithme de détermination de connexité

Pour tester si $G$ est connexe, on peut utiliser un **parcours en largeur (BFS)** ou **profondeur (DFS)** à partir d'un sommet quelconque :

1. Partir d'un sommet $s$.
2. Marquer tous les sommets atteignables depuis $s$.
3. Si tous les sommets sont marqués → $G$ est connexe.
4. Sinon → $G$ n'est pas connexe ; les sommets non marqués forment d'autres composantes.

---

## Exemples détaillés

**Exemple 1.** $G$ avec $V = \{1, 2, 3, 4, 5\}$ et $E = \{\{1,2\}, \{2,3\}, \{3,4\}, \{4,5\}, \{5,1\}, \{1,3\}\}$.

Depuis le sommet 1 : on atteint 2 → 3 → 4 → 5 → 1. Tous les sommets sont atteints. **$G$ est connexe.**

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
  ((4)) --- ((5))
  ((5)) --- ((1))
  ((1)) --- ((3))
```

**Exemple 2.** Trouver les composantes connexes de $G$ avec $V = \{1,...,7\}$, $E = \{\{1,2\}, \{2,3\}, \{4,5\}, \{6,7\}\}$.

- $CC_1 = \{1, 2, 3\}$
- $CC_2 = \{4, 5\}$
- $CC_3 = \{6, 7\}$

$CC(G) = 3$, $n = 7$, $m = 4 \geq 7 - 3 = 4$ ✓

---

## Remarques importantes

> 💡 **Rappel.** Un graphe avec $n$ sommets et $m < n-1$ arêtes est **forcément non connexe**.

> ⚠️ **Piège.** Un graphe avec $m \geq n-1$ arêtes n'est **pas forcément** connexe. Exemple : $K_3$ auquel on ajoute un sommet isolé a $n=4$, $m=3=n-1$, mais il n'est pas connexe.

> 📌 **À retenir.** La notion de composante connexe généralise la connexité : tout graphe est une réunion (disjointe) de composantes connexes.

---

## Résumé

| Notion | Définition |
|--------|-----------|
| Connexe | Tout sommet est relié à tout autre |
| Composante connexe | Sous-graphe connexe maximal |
| Sommet coupant | Sa suppression augmente $CC(G)$ |
| Arête coupante (pont) | Sa suppression augmente $CC(G)$ |

**Formule clé :** $m \geq n - p$ (où $p$ = nombre de composantes connexes).

---

## Exercices

**Exercice 1** *(facile)*  
Un graphe a $n = 8$ sommets et $m = 5$ arêtes. Peut-il être connexe ? Justifiez.

**Exercice 2** *(moyen)*  
Trouvez toutes les composantes connexes du graphe avec $V = \{1,...,8\}$ et $E = \{\{1,2\}, \{1,3\}, \{2,3\}, \{4,5\}, \{6,7\}, \{6,8\}, \{7,8\}\}$.

**Exercice 3** *(moyen)*  
Montrez que si $G$ est connexe et a exactement $n-1$ arêtes, alors $G$ est un arbre (vu au chapitre 6).

**Exercice 4** *(difficile)*  
Montrez que dans un graphe connexe à $n$ sommets, il existe toujours deux sommets de même degré.

---

## Corrigés

**Exercice 1.** Non. Pour être connexe avec $n=8$ sommets, il faut $m \geq n-1 = 7$ arêtes. Or $m = 5 < 7$. **Impossible.**

**Exercice 2.**
- $CC_1 = \{1, 2, 3\}$ (triangle)
- $CC_2 = \{4, 5\}$
- $CC_3 = \{6, 7, 8\}$ (triangle)

$CC(G) = 3$.

**Exercice 3.** Admis ici (démontré au chapitre 6 sur les arbres).

**Exercice 4.** Les degrés possibles vont de $0$ à $n-1$. Or si un sommet est de degré $n-1$ (relié à tous), aucun sommet ne peut être de degré $0$ (isolé). Donc les degrés sont dans $\{0,...,n-2\}$ ou dans $\{1,...,n-1\}$ : dans les deux cas, $n$ valeurs de degré dans un intervalle de $n-1$ valeurs → par le **principe des tiroirs**, deux sommets ont le même degré. $\square$

---

# Chapitre 4 : Représentations matricielles

## Introduction

Pour traiter les graphes algorithmiquement (en programmation), il faut les représenter en mémoire. Les deux structures principales sont la **matrice d'adjacence** et la **liste d'adjacence**.

---

## Définitions

### Matrice d'adjacence

> **Définition.** Soit $G = (V, E)$ avec $V = \{v_1, v_2, \ldots, v_n\}$. La **matrice d'adjacence** de $G$ est la matrice $A = (a_{ij})_{1 \leq i,j \leq n}$ de taille $n \times n$ définie par :
> $$a_{ij} = \begin{cases} 1 & \text{si } \{v_i, v_j\} \in E \\ 0 & \text{sinon} \end{cases}$$

**Propriétés de la matrice d'adjacence (graphe non orienté) :**
- Elle est **symétrique** : $a_{ij} = a_{ji}$.
- La diagonale est nulle : $a_{ii} = 0$ (pas de boucle).
- La somme de la ligne $i$ vaut $\deg(v_i)$ : $\sum_j a_{ij} = \deg(v_i)$.
- La somme de tous les éléments vaut $2m$.

**Exemple.** Pour le graphe :

```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((2)) --- ((4))
  ((3)) --- ((4))
```

$$A = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \\ 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{pmatrix}$$

Vérification : ligne 1 = $0+1+1+0 = 2 = \deg(1)$ ✓

---

### Liste d'adjacence

> **Définition.** La **liste d'adjacence** de $G$ est un tableau où la case $i$ contient la liste des voisins du sommet $v_i$.

**Exemple.** Pour le même graphe :

| Sommet | Voisins |
|--------|---------|
| 1 | {2, 3} |
| 2 | {1, 4} |
| 3 | {1, 4} |
| 4 | {2, 3} |

---

### Comparaison

| Critère | Matrice d'adjacence | Liste d'adjacence |
|---------|--------------------|--------------------|
| Espace mémoire | $O(n^2)$ | $O(n + m)$ |
| Tester $\{u,v\} \in E$ | $O(1)$ | $O(\deg(u))$ |
| Lister les voisins de $v$ | $O(n)$ | $O(\deg(v))$ |
| Recommandé pour | Graphes denses | Graphes creux |

---

## Théorèmes

### Puissances de la matrice d'adjacence

> **Théorème.** L'élément $(i,j)$ de $A^k$ (la matrice $A$ à la puissance $k$) est égal au **nombre de chemins de longueur $k$** entre $v_i$ et $v_j$.

**Application pratique.** $(A^2)_{ii} = \deg(v_i)$ (nombre de chemins de longueur 2 de $v_i$ à lui-même = nombre de voisins). $A^2_{ij}$ compte les chemins de longueur 2 entre $v_i$ et $v_j$.

**Exemple.** Pour le graphe ci-dessus :

$$A^2 = \begin{pmatrix} 2 & 0 & 0 & 2 \\ 0 & 2 & 2 & 0 \\ 0 & 2 & 2 & 0 \\ 2 & 0 & 0 & 2 \end{pmatrix}$$

$(A^2)_{11} = 2$ signifie qu'il y a 2 chemins de longueur 2 de 1 vers 1 : $1-2-1$ et $1-3-1$. ✓

---

## Exemples détaillés

**Exemple complet.** Soit $G$ avec $V = \{1, 2, 3, 4, 5\}$ et :

```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((4))
  ((2)) --- ((3))
  ((2)) --- ((5))
  ((3)) --- ((4))
  ((4)) --- ((5))
```

Écrire la matrice d'adjacence.

**Solution :**

Les sommets dans l'ordre $1, 2, 3, 4, 5$ :

$$A = \begin{pmatrix}
0 & 1 & 0 & 1 & 0 \\
1 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & 1 & 0 \\
1 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & 1 & 0
\end{pmatrix}$$

Degrés : $\deg(1)=2$, $\deg(2)=3$, $\deg(3)=2$, $\deg(4)=3$, $\deg(5)=2$.  
Somme des degrés $= 12 = 2 \times 6 = 2m$ ✓

---

## Remarques importantes

> ⚠️ **Erreur fréquente.** Oublier que la matrice d'adjacence d'un graphe **non orienté** est toujours symétrique. Si votre matrice n'est pas symétrique, vous avez fait une erreur.

> 💡 **Astuce.** Pour construire la matrice rapidement : mettre 1 partout où il y a une arête, puis symétriser (la copier en transposé).

> 📌 **Pour l'examen.** Savoir lire une matrice d'adjacence et en déduire le graphe, et inversement dessiner un graphe à partir de sa matrice.

---

## Résumé

- Matrice d'adjacence : matrice $n \times n$, symétrique, $a_{ij} = 1$ si arête, $0$ sinon.
- Somme ligne $i$ = $\deg(v_i)$.
- $A^k$ : nombre de chemins de longueur $k$.
- Liste d'adjacence : plus économique en mémoire pour les graphes creux.

---

## Exercices

**Exercice 1** *(facile)*  
Dessinez le graphe correspondant à la matrice :
$$A = \begin{pmatrix} 0 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 \end{pmatrix}$$

**Exercice 2** *(moyen)*  
Écrivez la matrice d'adjacence de $K_4$.

**Exercice 3** *(moyen)*  
À partir de la matrice d'adjacence de l'exercice 1, calculez $(A^2)_{13}$ et interprétez.

**Exercice 4** *(difficile)*  
Montrez que la matrice d'adjacence d'un graphe biparti $K_{p,q}$ peut toujours s'écrire sous la forme par blocs $\begin{pmatrix} 0 & B \\ B^T & 0 \end{pmatrix}$ après renumérotation des sommets.

---

## Corrigés

**Exercice 1.** Le graphe est $C_4$ (cycle à 4 sommets) :

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
  ((4)) --- ((1))
```

**Exercice 2.** $K_4$ : tous les $a_{ij} = 1$ sauf la diagonale.
$$A_{K_4} = \begin{pmatrix} 0 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \\ 1 & 1 & 1 & 0 \end{pmatrix}$$

**Exercice 3.** $(A^2)_{13}$ = nombre de chemins de longueur 2 entre 1 et 3. Les chemins possibles : $1-2-3$ et $1-4-3$. Donc $(A^2)_{13} = 2$.

Vérification : $(A^2)_{13} = \sum_k a_{1k} a_{k3} = a_{12}a_{23} + a_{14}a_{43} = 1 \times 1 + 1 \times 1 = 2$ ✓

**Exercice 4.** Si $V = V_1 \cup V_2$ avec $|V_1|=p$, $|V_2|=q$, en numérotant d'abord les sommets de $V_1$ puis ceux de $V_2$, les arêtes ne peuvent être qu'entre $V_1$ et $V_2$. Donc les blocs $p \times p$ (entre $V_1$) et $q \times q$ (entre $V_2$) sont nuls, et le bloc $p \times q$ (entre $V_1$ et $V_2$) est la matrice $B$. La symétrie donne le bloc $B^T$. $\square$

---

# Chapitre 5 : Parcours eulériens et hamiltoniens

## Introduction

Deux types classiques de parcours dans les graphes : les **parcours eulériens** (passer par toutes les *arêtes* exactement une fois) et les **parcours hamiltoniens** (passer par tous les *sommets* exactement une fois). Ces deux notions, proches en apparence, sont très différentes en pratique.

**Origine historique.** Le problème des 7 ponts de Königsberg (Euler, 1736) : peut-on traverser les 7 ponts de la ville en passant une seule fois par chacun ? C'est le premier problème de la théorie des graphes.

---

## Définitions

### Chaîne eulérienne / Circuit eulérien

> **Définition.** Une **chaîne eulérienne** est une chaîne qui passe par **toutes les arêtes exactement une fois**.

> **Définition.** Un **circuit eulérien** est un circuit (chaîne fermée) qui passe par **toutes les arêtes exactement une fois**.

> **Définition.** Un graphe est dit **eulérien** s'il possède un circuit eulérien.

> **Définition.** Un graphe est dit **semi-eulérien** s'il possède une chaîne eulérienne (mais pas de circuit eulérien).

---

### Chemin hamiltonien / Cycle hamiltonien

> **Définition.** Un **chemin hamiltonien** est un chemin qui passe par **tous les sommets exactement une fois**.

> **Définition.** Un **cycle hamiltonien** est un cycle qui passe par **tous les sommets exactement une fois**.

> **Définition.** Un graphe est dit **hamiltonien** s'il possède un cycle hamiltonien.

---

## Théorèmes

### Théorème d'Euler (fondamental)

> **Théorème.** Un graphe connexe $G$ est **eulérien** si et seulement si **tous ses sommets sont de degré pair**.

> **Corollaire.** Un graphe connexe $G$ possède une **chaîne eulérienne** (mais pas de circuit) si et seulement si il a **exactement deux sommets de degré impair** (qui sont alors les extrémités de la chaîne).

**Intuition.** À chaque fois qu'on entre dans un sommet, on doit en ressortir. Si un sommet a un degré impair, on y restera « bloqué » à un moment. Pour un circuit, on doit aussi revenir au départ → tous les degrés doivent être pairs.

**Démonstration (idée).** 
- ($\Rightarrow$) Si $G$ est eulérien, partant du circuit eulérien, chaque sommet est « entré » et « sorti » le même nombre de fois → degré pair.
- ($\Leftarrow$) Par construction : si tous les degrés sont pairs, l'algorithme de Fleury construit un circuit eulérien. $\square$

**Exemple d'application — Problème de Königsberg :**

Le graphe des ponts de Königsberg a 4 sommets (les rives) avec des degrés impairs. Comme il a plus de 2 sommets de degré impair, **il n'existe ni circuit ni chaîne eulérienne.**

---

### Conditions suffisantes pour l'hamiltonicité

> **Théorème de Dirac (1952).** Si $G$ est un graphe simple connexe à $n \geq 3$ sommets tel que $\deg(v) \geq \dfrac{n}{2}$ pour tout sommet $v$, alors $G$ est hamiltonien.

> **Théorème d'Ore (1960).** Si $G$ est un graphe simple à $n \geq 3$ sommets tel que pour toute paire de sommets non adjacents $u, v$ : $\deg(u) + \deg(v) \geq n$, alors $G$ est hamiltonien.

**Attention.** Ces conditions sont **suffisantes mais pas nécessaires** : un graphe peut être hamiltonien sans les satisfaire.

**Exemple.** $K_n$ ($n \geq 3$) est hamiltonien : $\deg(v) = n-1 \geq \frac{n}{2}$ pour $n \geq 2$. ✓

---

## Algorithme de Fleury (circuit eulérien)

Si le graphe est eulérien (tous degrés pairs, connexe) :

1. Partir d'un sommet quelconque.
2. À chaque étape, choisir une arête **non encore parcourue** qui n'est pas un pont (arête coupante), sauf si c'est la seule option.
3. Répéter jusqu'à revenir au départ.

---

## Exemples détaillés

**Exemple 1.** Le graphe suivant est-il eulérien ?

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
  ((4)) --- ((1))
  ((1)) --- ((3))
  ((2)) --- ((4))
```

Degrés : $\deg(1)=2$, $\deg(2)=2$... attendez : $1$ est adjacent à $2$, $4$, $3$ → $\deg(1)=3$. Oups.

Recomptons : arêtes $= \{\{1,2\}, \{2,3\}, \{3,4\}, \{4,1\}, \{1,3\}, \{2,4\}\}$.

- $\deg(1) = |\{\{1,2\}, \{4,1\}, \{1,3\}\}| = 3$ (impair)
- $\deg(2) = |\{\{1,2\}, \{2,3\}, \{2,4\}\}| = 3$ (impair)
- $\deg(3) = |\{\{2,3\}, \{3,4\}, \{1,3\}\}| = 3$ (impair)
- $\deg(4) = |\{\{3,4\}, \{4,1\}, \{2,4\}\}| = 3$ (impair)

Quatre sommets de degré impair → **pas eulérien, pas semi-eulérien.** (Il faudrait exactement 0 ou 2 sommets de degré impair.)

**Exemple 2.** $C_4$ est-il eulérien ?

Tous les sommets sont de degré 2 (pair) et le graphe est connexe → **oui, eulérien.** Circuit eulérien : $1 \to 2 \to 3 \to 4 \to 1$.

**Exemple 3.** Le graphe suivant a-t-il une chaîne eulérienne ?

```mermaid
graph LR
  ((A)) --- ((B))
  ((A)) --- ((C))
  ((B)) --- ((C))
  ((B)) --- ((D))
  ((C)) --- ((D))
  ((D)) --- ((E))
```

Degrés : $A:2$, $B:3$, $C:3$, $D:3$, $E:1$.

Sommets de degré impair : $B$, $C$, $D$, $E$ → 4 sommets impairs → **ni chaîne ni circuit eulérien.**

---

## Comparaison Euler vs Hamilton

| | Eulérien | Hamiltonien |
|--|---------|------------|
| Objectif | Passer par toutes les **arêtes** | Passer par tous les **sommets** |
| Critère | Condition simple (degrés pairs) | Pas de critère simple général |
| Complexité algorithmique | Polynomial (facile) | NP-complet (difficile) |

> 📌 **Point examen crucial.** La vérification de l'hamiltonicité est un problème difficile en général. En examen, on utilise les théorèmes de Dirac ou d'Ore, ou on cherche manuellement.

---

## Remarques importantes

> ⚠️ **Erreur fréquente.** Confondre circuit eulérien (toutes les *arêtes*) et cycle hamiltonien (tous les *sommets*).

> 💡 **Astuce Euler.** Pour vérifier rapidement : compter les sommets de degré impair.  
> - 0 impair → circuit eulérien.  
> - 2 impairs → chaîne eulérienne entre ces deux sommets.  
> - Autre → ni l'un ni l'autre.

> ⚠️ **Piège.** $K_3$ est hamiltonien (cycle $1-2-3-1$) ET eulérien ($\deg = 2$ pair). Mais $K_4$ est hamiltonien (cycle $1-2-3-4-1$) mais **pas** eulérien ($\deg = 3$ impair).

---

## Résumé

**Eulérien :** connexe + tous les degrés pairs.  
**Semi-eulérien :** connexe + exactement 2 sommets de degré impair.  
**Hamiltonien :** critères suffisants (Dirac, Ore), pas de critère nécessaire et suffisant simple.

---

## Exercices

**Exercice 1** *(facile)*  
Le graphe $K_5$ est-il eulérien ? hamiltonien ?

**Exercice 2** *(moyen)*  
Donnez un circuit eulérien dans le graphe suivant :
```
Sommets : {1,2,3,4,5}
Arêtes : {1-2, 2-3, 3-1, 1-4, 4-5, 5-1}
```

**Exercice 3** *(moyen)*  
Appliquez le théorème de Dirac à $K_{3,3}$. Est-il hamiltonien ?

**Exercice 4** *(difficile)*  
Montrez que $K_{2,3}$ n'est pas hamiltonien.

---

## Corrigés

**Exercice 1.** $K_5$ : $n=5$, $\deg(v) = 4$ (pair) pour tout $v$. **Eulérien** ✓.  
Hamiltonien : $\deg(v) = 4 = n-1 \geq n/2 = 2.5$ → Dirac satisfait → **hamiltonien** ✓.

**Exercice 2.** Tous les degrés : $\deg(1)=4$, $\deg(2)=2$, $\deg(3)=2$, $\deg(4)=2$, $\deg(5)=2$ — tous pairs, graphe connexe → **eulérien**.  
Circuit : $1 \to 2 \to 3 \to 1 \to 4 \to 5 \to 1$.

**Exercice 3.** $K_{3,3}$ : $n = 6$, $\deg(v) = 3$ pour tout $v$. Condition de Dirac : $\deg(v) \geq n/2 = 3$. Satisfaite ! → **hamiltonien** ✓. Cycle : $u_1 \to v_1 \to u_2 \to v_2 \to u_3 \to v_3 \to u_1$.

**Exercice 4.** $K_{2,3}$ : $|V_1| = 2$, $|V_2| = 3$. Un cycle hamiltonien doit alterner entre $V_1$ et $V_2$ (car aucune arête n'est dans $V_1$ ou $V_2$). Mais un cycle alterne $V_1, V_2, V_1, V_2, \ldots$, donc il doit utiliser exactement autant de sommets de $V_1$ que de $V_2$. Or $|V_1| = 2 \neq 3 = |V_2|$. **Impossible** d'avoir un cycle hamiltonien. $\square$

---

# Chapitre 6 : Arbres et forêts

## Introduction

Les arbres sont parmi les structures les plus importantes en informatique : ils modélisent les hiérarchies (systèmes de fichiers, arbres de décision, arbres de syntaxe), les réseaux minimaux (arbres couvrants), et bien plus.

---

## Définitions

### Arbre

> **Définition.** Un **arbre** est un graphe connexe **sans cycle**.

**Intuition.** Un arbre, c'est la façon la plus économique de relier $n$ points sans créer de redondance (cycle).

**Exemples d'arbres :**

```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((2)) --- ((4))
  ((2)) --- ((5))
  ((3)) --- ((6))
```

Ce graphe est un arbre ($n=6$, $m=5$, connexe, sans cycle).

---

### Forêt

> **Définition.** Une **forêt** est un graphe **sans cycle** (mais pas nécessairement connexe). Ses composantes connexes sont des arbres.

---

### Arbre couvrant

> **Définition.** Un **arbre couvrant** (ou arbre spanning) d'un graphe connexe $G$ est un sous-graphe qui est un arbre et qui contient **tous les sommets** de $G$.

**Intuition.** L'arbre couvrant, c'est un réseau minimal qui relie tous les points du graphe.

---

### Sommet pendant (feuille)

> **Définition.** Un **sommet pendant** est un sommet de degré 1 dans un arbre.

---

## Propriétés et Théorèmes

### Caractérisations équivalentes d'un arbre

> **Théorème.** Soit $G$ un graphe à $n$ sommets. Les propositions suivantes sont équivalentes :
> 1. $G$ est un arbre (connexe et sans cycle).
> 2. $G$ est connexe et a $m = n - 1$ arêtes.
> 3. $G$ est sans cycle et a $m = n - 1$ arêtes.
> 4. Il existe **un unique chemin** entre toute paire de sommets.
> 5. $G$ est connexe, et la suppression de toute arête le rend non connexe (toute arête est un pont).

**Ces 5 propriétés se démontrent mutuellement et toutes caractérisent les arbres.**

**Démonstration de $1 \Leftrightarrow 2$ (idée) :**
- Par récurrence sur $n$. Pour $n=1$ : arbre avec 0 arêtes ✓.
- Un arbre à $n \geq 2$ sommets a au moins une feuille (sommet de degré 1). En supprimant la feuille et son arête, on obtient un arbre à $n-1$ sommets avec $m-1$ arêtes. Par hypothèse de récurrence, $m-1 = (n-1) - 1$, donc $m = n-1$. $\square$

---

### Nombre de feuilles

> **Propriété.** Tout arbre à $n \geq 2$ sommets possède **au moins 2 feuilles** (sommets de degré 1).

**Démonstration.** La somme des degrés = $2(n-1)$. Si au plus 1 sommet était de degré 1, tous les autres seraient de degré $\geq 2$, donnant une somme $\geq 1 + 2(n-1) = 2n-1 > 2(n-1)$. Contradiction. $\square$

---

### Relation arbres et composantes connexes

> **Théorème.** Si $G$ a $n$ sommets, $m$ arêtes et $p$ composantes connexes, et si $G$ est une forêt, alors :
> $$m = n - p$$

**Cas particulier :** si $p = 1$ (arbre) → $m = n - 1$.

---

### Arbre couvrant minimal

> **Définition.** Dans un graphe pondéré (arêtes avec des poids), un **arbre couvrant minimal** (ACM) est un arbre couvrant dont la somme des poids est minimale.

**Algorithmes classiques :** Kruskal, Prim (hors programme détaillé ici, mais à connaître de nom).

---

## Exemples détaillés

**Exemple 1.** Vérifier qu'un graphe est un arbre.

$G$ : $V = \{1, 2, 3, 4, 5\}$, $E = \{\{1,2\}, \{1,3\}, \{3,4\}, \{3,5\}\}$.

- $n = 5$, $m = 4 = n - 1$ ✓
- Connexe ? Depuis 1 : $1 \to 2$, $1 \to 3 \to 4$, $3 \to 5$. Tous atteints ✓
- Sans cycle ? Oui (c'est une étoile centrée en 3 et avec une branche en 1). ✓

**C'est un arbre.**

```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((3)) --- ((4))
  ((3)) --- ((5))
```

**Exemple 2.** Trouver un arbre couvrant de $K_4$.

$K_4$ a 4 sommets et 6 arêtes. Un arbre couvrant a $n-1 = 3$ arêtes. Par exemple : $\{\{1,2\}, \{2,3\}, \{3,4\}\}$ (une chaîne = chemin $P_4$).

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
```

**Exemple 3 — Arbres non isomorphes à 4 sommets.**

Il existe exactement **2** arbres non isomorphes à 4 sommets :

*Arbre 1 (chemin $P_4$) :*
```mermaid
graph LR
  ((1)) --- ((2)) --- ((3)) --- ((4))
```
Degrés : $(1, 2, 2, 1)$.

*Arbre 2 (étoile $K_{1,3}$) :*
```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((1)) --- ((4))
```
Degrés : $(3, 1, 1, 1)$.

---

## Remarques importantes

> 💡 **Mémo.** Pour mémoriser la caractérisation des arbres : **connexe + $n-1$ arêtes = arbre**.

> ⚠️ **Piège.** Un graphe à $n$ sommets et $n-1$ arêtes n'est **pas forcément** un arbre s'il n'est pas connexe (une forêt peut avoir $n-1$ arêtes si elle a 2 composantes connexes d'une certaine façon).

> 📌 **Important.** Dans un arbre, **tout** chemin entre deux sommets est unique. S'il existe deux chemins différents, il y a un cycle.

---

## Résumé

| Notion | Définition |
|--------|-----------|
| Arbre | Graphe connexe sans cycle |
| Forêt | Graphe sans cycle |
| Arbre couvrant | Arbre contenant tous les sommets |
| Feuille | Sommet de degré 1 |

**Formules clés :**
$$\text{Arbre} : m = n - 1 \qquad \text{Forêt} : m = n - p$$

---

## Exercices

**Exercice 1** *(facile)*  
Un graphe a 10 sommets et est un arbre. Combien d'arêtes a-t-il ?

**Exercice 2** *(facile)*  
Un graphe a 12 sommets, 9 arêtes, et est une forêt. Combien de composantes connexes a-t-il ?

**Exercice 3** *(moyen)*  
Dessinez tous les arbres non isomorphes à 5 sommets.

**Exercice 4** *(difficile)*  
Montrez que tout arbre à $n \geq 2$ sommets possède au moins deux feuilles.

---

## Corrigés

**Exercice 1.** $m = n - 1 = 10 - 1 = 9$ arêtes.

**Exercice 2.** $m = n - p$ → $9 = 12 - p$ → $p = 3$ composantes connexes.

**Exercice 3.** Il y a exactement **3** arbres non isomorphes à 5 sommets :

*Chemin $P_5$ :* $1-2-3-4-5$, degrés $(1,2,2,2,1)$.

*Étoile $K_{1,4}$ :* un centre de degré 4, degrés $(4,1,1,1,1)$.

*"Peigne" :* un sommet central de degré 3 relié à 3 branches dont une de longueur 2 :
```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((2)) --- ((4))
  ((2)) --- ((5))
```
... non, ça c'est $K_{1,4}$ avec 2 au centre.

En fait les 3 arbres à 5 sommets :
- $P_5$ : suite $1-2-3-4-5$
- Étoile $K_{1,4}$
- Arbre "patte" : $1-2-3-4$ avec $3-5$ (un chemin avec une branche)

```
P5 :   1-2-3-4-5
K14:   (centre)-1, (centre)-2, (centre)-3, (centre)-4
Patte: 1-2-3-4 et 3-5
```

**Exercice 4.** Voir démonstration dans les propriétés. $\square$

---

# Chapitre 7 : Graphes planaires

## Introduction

Un graphe planaire peut être dessiné dans le plan sans que ses arêtes se croisent. Cette notion est cruciale en conception de circuits imprimés : peut-on tracer les connexions sans superposition ?

---

## Définitions

### Graphe planaire

> **Définition.** Un graphe $G$ est **planaire** s'il peut être représenté (dessiné) dans le plan de sorte qu'aucune paire d'arêtes ne se coupe (sauf éventuellement à leurs extrémités communes).

**Intuition.** Peut-on « aplatir » le graphe dans le plan sans que les fils se croisent ?

**Exemple planaire.** $K_4$ est planaire :

```mermaid
graph LR
  ((1)) --- ((2))
  ((1)) --- ((3))
  ((1)) --- ((4))
  ((2)) --- ((3))
  ((3)) --- ((4))
```

(Dans le dessin usuel, on peut dessiner $K_4$ en triangle avec un sommet au centre — aucun croisement.)

**Exemples non planaires.** $K_5$ et $K_{3,3}$ sont les deux graphes « minimalement non planaires » (théorème de Kuratowski).

---

### Face (région)

> **Définition.** Un dessin planaire d'un graphe divise le plan en régions appelées **faces**. La face non bornée est la **face extérieure**.

**Notation.** $f$ = nombre de faces.

---

## Théorèmes

### Formule d'Euler pour les graphes planaires

> **Théorème (Euler, 1752).** Pour tout graphe planaire connexe à $n$ sommets, $m$ arêtes et $f$ faces :
> $$n - m + f = 2$$

**Intuition.** Ce résultat remarquable est indépendant de la forme du graphe ou du dessin choisi.

**Démonstration (par récurrence sur $m$) :**
- Base ($m = n-1$, arbre) : $f = 1$ (une seule face extérieure). $n - (n-1) + 1 = 2$ ✓.
- Hérédité : ajouter une arête entre deux sommets déjà dans le dessin crée exactement une nouvelle face ($m \to m+1$, $f \to f+1$, $n$ inchangé). La quantité $n-m+f$ reste $2$. $\square$

**Exemple.** $C_4$ planaire : $n=4$, $m=4$, $f=2$ (l'intérieur + l'extérieur). $4-4+2=2$ ✓.

---

### Inégalité fondamentale pour les graphes planaires simples

> **Théorème.** Si $G$ est un graphe planaire simple connexe avec $n \geq 3$ sommets, alors :
> $$m \leq 3n - 6$$

**Démonstration.** Chaque face est bordée par au moins 3 arêtes (car $G$ est simple). Chaque arête borde au plus 2 faces. Donc $3f \leq 2m$, soit $f \leq \frac{2m}{3}$. En substituant dans $n - m + f = 2$ :
$$n - m + \frac{2m}{3} \geq 2 \implies n - \frac{m}{3} \geq 2 \implies m \leq 3n - 6 \quad \square$$

**Corollaire.** $K_5$ n'est pas planaire :
- $n=5$, $m=10$. Or $3n-6 = 9 < 10$. Contradiction. **Non planaire.** ✓

---

### Inégalité pour les graphes bipartis planaires

> **Théorème.** Si $G$ est biparti, planaire, connexe avec $n \geq 3$, alors :
> $$m \leq 2n - 4$$

(Car dans un graphe biparti, les cycles ont longueur $\geq 4$, donc chaque face est bordée par $\geq 4$ arêtes.)

**Corollaire.** $K_{3,3}$ n'est pas planaire :
- $n=6$, $m=9$. Or $2n-4 = 8 < 9$. **Non planaire.** ✓

---

### Théorème de Kuratowski

> **Théorème (Kuratowski, 1930).** Un graphe est planaire si et seulement s'il ne contient pas de **sous-graphe homéomorphe** à $K_5$ ou à $K_{3,3}$.

*Un graphe $H$ est homéomorphe à $G$ si $H$ peut être obtenu en subdivisant des arêtes de $G$ (en insérant des sommets de degré 2 sur les arêtes).*

**Intuition.** Les seuls « obstacles » à la planarité sont $K_5$ et $K_{3,3}$, à subdivision près.

---

## Exemples détaillés

**Exemple 1.** Vérifier la formule d'Euler pour $K_4$ planaire.

$n=4$, $m=6$. Dans le dessin planaire de $K_4$ : $f=4$ (3 triangles intérieurs + 1 face extérieure).
$n - m + f = 4 - 6 + 4 = 2$ ✓

**Exemple 2.** $K_5$ est-il planaire ?

$n=5$, $m=10$. $3n-6 = 9$. Or $m = 10 > 9$. **Non planaire.**

**Exemple 3.** Un graphe avec $n=6$, $m=11$ peut-il être planaire ?

$3n-6 = 12$. $11 \leq 12$ → l'inégalité n'exclut pas la planarité. (**La condition est nécessaire mais non suffisante** — il faut vérifier Kuratowski pour conclure.)

**Exemple 4.** Vérifier que $K_{3,3}$ n'est pas planaire.

$K_{3,3}$ : $n=6$, $m=9$, biparti. $2n-4=8 < 9$. **Non planaire.** ✓

---

## Remarques importantes

> 💡 **Mémo Euler :** $n - m + f = 2$ (« sommets moins arêtes plus faces égale 2 »).

> ⚠️ **Erreur fréquente.** La formule d'Euler suppose que le graphe est **connexe**. Pour un graphe non connexe à $p$ composantes : $n - m + f = 1 + p$.

> 📌 **Pour l'examen.**
> - Pour montrer qu'un graphe est **non planaire** : utiliser $m > 3n-6$ (ou $m > 2n-4$ si biparti).
> - Pour montrer qu'un graphe est **planaire** : dessiner un plongement sans croisement.

> ⚠️ **Piège.** $m \leq 3n-6$ est nécessaire mais pas suffisante pour la planarité (il faut Kuratowski pour la condition suffisante).

---

## Résumé

| Résultat | Formule |
|----------|---------|
| Formule d'Euler (connexe) | $n - m + f = 2$ |
| Graphe planaire simple ($n \geq 3$) | $m \leq 3n - 6$ |
| Graphe planaire biparti ($n \geq 3$) | $m \leq 2n - 4$ |

**Non planaires par excellence :** $K_5$ et $K_{3,3}$.

---

## Exercices

**Exercice 1** *(facile)*  
Un graphe planaire connexe a $n=7$ sommets et $m=12$ arêtes. Combien de faces a-t-il ?

**Exercice 2** *(moyen)*  
Montrez que $K_6$ n'est pas planaire.

**Exercice 3** *(moyen)*  
Un graphe planaire connexe à $n=10$ et $m=24$ est-il possible ?

**Exercice 4** *(difficile)*  
Un graphe planaire connexe a toutes ses faces de degré 5 (chaque face est bordée par 5 arêtes). Exprimez $m$ en fonction de $n$.

---

## Corrigés

**Exercice 1.** $f = 2 - n + m = 2 - 7 + 12 = 7$ faces.

**Exercice 2.** $K_6$ : $n=6$, $m=15$. $3n-6=12 < 15$. **Non planaire.** $\square$

**Exercice 3.** $3n-6 = 3(10)-6 = 24$. Or $m=24 = 3n-6$. L'inégalité est satisfaite à l'égalité → **éventuellement planaire** (il faudrait vérifier Kuratowski). La réponse est : on ne peut pas l'exclure avec cette seule inégalité.

**Exercice 4.** Chaque face est bordée par 5 arêtes. Chaque arête borde 2 faces. Donc $5f = 2m$, soit $f = \frac{2m}{5}$. Euler : $n - m + \frac{2m}{5} = 2$, soit $n - \frac{3m}{5} = 2$, donc $m = \frac{5(n-2)}{3}$.

---

# Chapitre 8 : Couplage

## Introduction

Le **couplage** modélise des problèmes d'affectation : affecter des tâches à des machines, des étudiants à des stages, des médecins à des hôpitaux. L'objectif est de maximiser le nombre de paires formées.

---

## Définitions

### Couplage

> **Définition.** Un **couplage** (ou appariement, *matching*) dans un graphe $G = (V, E)$ est un ensemble $M \subseteq E$ d'arêtes deux à deux **non adjacentes** (elles ne partagent aucun sommet).

**Intuition.** Dans un couplage, chaque sommet est incident à **au plus une** arête du couplage.

**Vocabulaire :**
- Un sommet est **saturé** (ou *matched*) s'il est incident à une arête de $M$.
- Un sommet est **libre** (ou *exposé*) s'il n'est incident à aucune arête de $M$.

---

### Couplage maximal et maximum

> **Définition.** Un couplage $M$ est :
> - **maximal** : on ne peut ajouter aucune arête à $M$ sans violer la propriété de couplage (on ne peut plus l'augmenter « localement »).
> - **maximum** : $|M|$ est le plus grand possible parmi tous les couplages (couplage de taille maximale).

> ⚠️ **Attention.** Tout couplage maximum est maximal, mais l'inverse est faux !

**Exemple :**

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
```

- $M_1 = \{\{2,3\}\}$ : maximal (on ne peut pas ajouter $\{1,2\}$ car 2 est déjà saturé, ni $\{3,4\}$ car 3 est saturé), mais **pas maximum**.
- $M_2 = \{\{1,2\}, \{3,4\}\}$ : **maximum** (taille 2).

---

### Couplage parfait

> **Définition.** Un couplage est **parfait** si tous les sommets sont saturés.

*Un couplage parfait n'existe que si $|V|$ est pair.*

---

### Chaîne alternée

> **Définition.** Une **chaîne alternée** par rapport à un couplage $M$ est une chaîne dont les arêtes alternent entre « appartenant à $M$ » et « n'appartenant pas à $M$ ».

---

### Chaîne augmentante

> **Définition.** Une **chaîne augmentante** par rapport à $M$ est une chaîne alternée dont les **deux extrémités sont des sommets libres** (non saturés par $M$).

**Intuition fondamentale.** Si on trouve une chaîne augmentante, on peut **améliorer** le couplage en inversant les rôles des arêtes sur cette chaîne (ce qui était dans $M$ sort, ce qui n'était pas dans $M$ entre). Le nouveau couplage est plus grand d'une arête.

---

## Théorèmes

### Théorème de Berge

> **Théorème (Berge, 1957).** Un couplage $M$ est **maximum** si et seulement s'il n'existe **aucune chaîne augmentante** par rapport à $M$.

**Intuition.** Si on ne peut plus augmenter, c'est qu'on a atteint l'optimum global.

**Conséquence algorithmique.** Pour trouver un couplage maximum, il suffit de chercher des chaînes augmentantes et d'améliorer le couplage jusqu'à ce qu'il n'en existe plus.

---

### Théorème de König (graphes bipartis)

> **Théorème (König, 1931).** Dans un graphe biparti, la taille du couplage maximum est égale à la taille de la couverture par sommets minimum.

*(Une couverture par sommets est un ensemble $C \subseteq V$ tel que toute arête a au moins une extrémité dans $C$.)*

---

## Algorithme de recherche de couplage maximum

**Algorithme (basé sur les chaînes augmentantes) :**

```
M ← couplage vide (ou quelconque)
Répéter :
    Chercher une chaîne augmentante P par rapport à M
    Si P trouvée :
        M ← M Δ P  (différence symétrique : inverser les arêtes de P)
    Sinon :
        Stop  ← M est maximum
```

**Explication de $M \Delta P$ :** on enlève de $M$ les arêtes de $P$ qui étaient dans $M$, et on ajoute à $M$ les arêtes de $P$ qui n'étaient pas dans $M$. Le couplage augmente de 1.

---

## Exemples détaillés

**Exemple 1.** Trouver un couplage maximum dans le graphe biparti $K_{3,3}$.

$V_1 = \{u_1, u_2, u_3\}$, $V_2 = \{v_1, v_2, v_3\}$, toutes les arêtes présentes.

Couplage initial : $M = \{\{u_1, v_1\}\}$.

Chaîne augmentante : $u_2 - v_1 - u_1 - v_2$ ?  
Non, $u_1$ est saturé, et $v_2$ est libre. Voyons : $u_2$ libre, $v_2$ libre.  
Chaîne : $u_2 - v_2$ (pas encore dans $M$, les deux extrémités libres) → chaîne augmentante de longueur 1.

$M \leftarrow M \cup \{\{u_2, v_2\}\} = \{\{u_1, v_1\}, \{u_2, v_2\}\}$.

$u_3$ et $v_3$ libres → chaîne augmentante $u_3 - v_3$.

$M = \{\{u_1, v_1\}, \{u_2, v_2\}, \{u_3, v_3\}\}$ : couplage parfait de taille 3.

Plus de chaîne augmentante → **M est maximum.**

```mermaid
graph LR
  subgraph V1
    ((u1))
    ((u2))
    ((u3))
  end
  subgraph V2
    ((v1))
    ((v2))
    ((v3))
  end
  ((u1)) --- ((v1))
  ((u2)) --- ((v2))
  ((u3)) --- ((v3))
```

*(Arêtes du couplage en gras dans un dessin réel.)*

---

**Exemple 2.** Couplage maximal ≠ maximum.

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
  ((4)) --- ((5))
  ((5)) --- ((6))
```

Couplage maximal (mais pas maximum) : $M = \{\{2,3\}, \{5,6\}\}$ (taille 2).  
Vérification : 1 est libre, 2 saturé, 3 saturé, 4 libre, 5 saturé, 6 saturé. On ne peut pas ajouter d'arête.

Mais couplage maximum : $M^* = \{\{1,2\}, \{3,4\}, \{5,6\}\}$ (taille 3).

Chaîne augmentante pour améliorer $M$ : $1 - 2 - 3 - 4$. Extrémités : 1 (libre) et 4 (libre). C'est bien une chaîne augmentante !

$M \Delta \{1-2, 2-3, 3-4\}$ : on retire $\{2,3\}$ (était dans $M$), on ajoute $\{1,2\}$ et $\{3,4\}$.  
$M' = \{\{1,2\}, \{3,4\}, \{5,6\}\}$ (taille 3). $\square$

---

**Exemple 3.** Problème d'affectation.

4 étudiants $\{E_1, E_2, E_3, E_4\}$ postulent à 4 stages $\{S_1, S_2, S_3, S_4\}$ :
- $E_1$ peut faire $S_1, S_2$
- $E_2$ peut faire $S_1, S_3$
- $E_3$ peut faire $S_2, S_4$
- $E_4$ peut faire $S_3, S_4$

Le graphe biparti correspondant :

```mermaid
graph LR
  subgraph Étudiants
    ((E1))
    ((E2))
    ((E3))
    ((E4))
  end
  subgraph Stages
    ((S1))
    ((S2))
    ((S3))
    ((S4))
  end
  ((E1)) --- ((S1))
  ((E1)) --- ((S2))
  ((E2)) --- ((S1))
  ((E2)) --- ((S3))
  ((E3)) --- ((S2))
  ((E3)) --- ((S4))
  ((E4)) --- ((S3))
  ((E4)) --- ((S4))
```

Couplage maximum : $M = \{\{E_1, S_1\}, \{E_2, S_3\}, \{E_3, S_2\}, \{E_4, S_4\}\}$ (taille 4, parfait).

Tous les étudiants sont affectés. ✓

---

## Remarques importantes

> ⚠️ **Erreur fréquente.** Confondre couplage **maximal** (on ne peut rien ajouter) et **maximum** (taille maximale). Un couplage glouton (ajouter des arêtes une par une) donne souvent un couplage maximal mais pas maximum.

> 💡 **Astuce examen.** Pour trouver un couplage maximum manuellement : partir du couplage vide, chercher des chaînes augmentantes, les appliquer jusqu'à ne plus en trouver.

> 📌 **Théorème de Berge à retenir.** $M$ est maximum $\Leftrightarrow$ pas de chaîne augmentante.

---

## Résumé

| Notion | Définition |
|--------|-----------|
| Couplage $M$ | Ensemble d'arêtes 2 à 2 non adjacentes |
| Sommet saturé | Incident à une arête de $M$ |
| Couplage maximal | Ne peut être agrandi |
| Couplage maximum | Plus grande taille possible |
| Couplage parfait | Tous les sommets saturés |
| Chaîne alternée | Arêtes alternant dans/hors $M$ |
| Chaîne augmentante | Chaîne alternée entre 2 sommets libres |

**Théorème clé :** $M$ maximum $\Leftrightarrow$ aucune chaîne augmentante (Berge).

---

## Exercices

**Exercice 1** *(facile)*  
Dans $P_5$ (chemin de 5 sommets $1-2-3-4-5$), donnez un couplage maximum.

**Exercice 2** *(moyen)*  
Dans le graphe ci-dessous, le couplage $M = \{\{1,2\}, \{4,5\}\}$ est-il maximum ?

```mermaid
graph LR
  ((1)) --- ((2))
  ((2)) --- ((3))
  ((3)) --- ((4))
  ((4)) --- ((5))
  ((5)) --- ((6))
  ((6)) --- ((1))
```

**Exercice 3** *(moyen)*  
3 candidats $\{A, B, C\}$ et 3 postes $\{P_1, P_2, P_3\}$. $A$ convient pour $P_1, P_2$ ; $B$ convient pour $P_2, P_3$ ; $C$ convient pour $P_1, P_3$. Trouvez un couplage maximum.

**Exercice 4** *(difficile)*  
Démontrez que le couplage $M = \{\{1,2\}, \{3,4\}, \{5,6\}\}$ dans $C_6$ (cycle à 6 sommets) est maximum.

---

## Corrigés

**Exercice 1.** $M = \{\{1,2\}, \{3,4\}\}$ ou $\{\{2,3\}, \{4,5\}\}$, de taille 2. (Le sommet 5 ou le sommet 1 reste libre — couplage maximum car aucune chaîne augmentante.)

**Exercice 2.** $C_6$ : $M = \{\{1,2\}, \{4,5\}\}$, taille 2. Sommets libres : $3, 6$. Cherchons une chaîne augmentante : $3 - 2 - 1 - 6$ → $3$ libre, $2$ saturé (in $M$ : $\{1,2\}$), $1$ saturé, $6$ libre. Alternance : $\{3,2\}$ hors $M$, $\{2,1\}$ dans $M$, $\{1,6\}$ hors $M$. C'est une chaîne augmentante !  
$M' = M \Delta \{\{3,2\}, \{1,2\}, \{1,6\}\} = \{\{3,2\}, \{1,6\}, \{4,5\}\}$ (taille 3).  
**Non, $M$ n'était pas maximum.** $M^* = \{\{1,2\}, \{3,4\}, \{5,6\}\}$ (taille 3, parfait).

**Exercice 3.** $M = \{\{A, P_1\}, \{B, P_2\}, \{C, P_3\}\}$ — couplage parfait de taille 3.

**Exercice 4.** $C_6$ a 6 sommets. Le couplage parfait a taille 3. $M = \{\{1,2\}, \{3,4\}, \{5,6\}\}$ sature tous les sommets. Plus de sommet libre → aucune chaîne augmentante possible. Par le théorème de Berge, **$M$ est maximum.** $\square$

---

# Annexe : Formulaire de révision

## Formules essentielles à connaître

$$\sum_{v \in V} \deg(v) = 2m \quad \text{(Lemme des poignées de mains)}$$

$$K_n : m = \frac{n(n-1)}{2}, \quad \deg(v) = n-1$$

$$K_{p,q} : m = p \cdot q$$

$$\text{Arbre} : m = n-1 \quad \text{(connexe, sans cycle)}$$

$$\text{Forêt} : m = n - p \quad (p = \text{nb composantes connexes})$$

$$\text{Euler planaire connexe} : n - m + f = 2$$

$$\text{Planaire simple} : m \leq 3n - 6 \quad (n \geq 3)$$

$$\text{Planaire biparti} : m \leq 2n - 4 \quad (n \geq 3)$$

---

## Tableau récapitulatif des graphes

| Graphe | Eulérien ? | Hamiltonien ? | Planaire ? |
|--------|-----------|---------------|-----------|
| $K_n$ | Si $n$ est impair (tous degrés $n-1$ pair ssi $n$ impair) | Oui ($n \geq 3$) | Oui ($n \leq 4$), Non ($n \geq 5$) |
| $K_{3,3}$ | Non ($\deg=3$, impair) | Oui | Non |
| $C_n$ | Oui (tous degrés = 2) | Oui | Oui |
| $K_{2,n}$ | Si $n$ est pair | Oui si $n \geq 2$ | Oui |

> **Rappel $K_n$ eulérien :** $\deg(v) = n-1$ pair ssi $n-1$ pair ssi $n$ est **impair**. Donc $K_3, K_5, K_7, \ldots$ sont eulériens, mais $K_4, K_6, \ldots$ ne le sont pas.

---

## Checklist pour l'examen

- [ ] Calculer les degrés et vérifier le lemme des poignées de mains.
- [ ] Identifier le type de graphe (complet, biparti, cycle, arbre…).
- [ ] Vérifier la connexité (parcours BFS/DFS mental, ou compter les composantes).
- [ ] Écrire la matrice d'adjacence si demandée.
- [ ] Tester l'euléricité (compter les degrés impairs).
- [ ] Tester la planarité ($m \leq 3n-6$, $K_5$/$K_{3,3}$).
- [ ] Trouver un couplage maximum (chaînes augmentantes, théorème de Berge).

---

*Document généré à partir des notes de cours de M. Aouane, UMMTO, L2 Informatique — Théorie des Graphes.*  
*Reconstruction et amélioration pédagogique effectuées à partir des trois fichiers de notes manuscrites scannées.*
