============================================================
  WARAQBOOK — Librairie en ligne algérienne
  Projet Web | Développement d'Applications Web
  Université Mouloud MAMMERI de Tizi-Ouzou | 2025/2026
============================================================

DESCRIPTION DU SITE :
----------------------
WaraqBook est un mini site e-commerce dédié à la vente de
livres et de fournitures de papeterie en ligne. Le site
propose une interface moderne et responsive permettant aux
utilisateurs de parcourir un catalogue de produits, de
filtrer par catégorie, d'ajouter des articles au panier
et de passer des commandes.

STRUCTURE DU PROJET :
----------------------
WaraqBook/
│
├── index.html              (Page d'accueil)
├── content/
│   ├── produits.html       (Catalogue des produits)
│   ├── connexion.html      (Page de connexion)
│   ├── inscription.html    (Page d'inscription)
│   └── commande.html       (Page de commande)
├── style/
│   ├── main.css            (Styles globaux)
│   ├── index.css           (Styles page d'accueil)
│   ├── produits.css        (Styles catalogue)
│   ├── auth.css            (Styles connexion/inscription)
│   └── commande.css        (Styles commande)
├── javascript/
│   ├── app.js              (Auth, Cart, Regex — global)
│   ├── products.json       (Base de données produits)
│   ├── index.js            (Script page d'accueil)
│   ├── produits.js         (Filtrage et tri produits)
│   ├── connexion.js        (Validation et login)
│   ├── inscription.js      (Validation et inscription)
│   └── commande.js         (Logique commande multi-étapes)
├── images/                 (Images du site)
└── readme.txt              (Ce fichier)

INSTRUCTIONS D'UTILISATION :
------------------------------
1. Ouvrir index.html dans un navigateur moderne (Chrome, Firefox).
2. Navigation : Menu en haut de chaque page.
3. Consulter les produits via "Produits" → filtrer par catégorie,
   prix, ou recherche textuelle.
4. Compte démo : yasmine@email.com / Yasmine123!
5. Inscription : remplir le formulaire avec validation RegEx.
6. Panier : cliquer sur 🛒 pour ouvrir le panneau panier.
7. Commande : remplir le formulaire de livraison et choisir
   un mode de paiement (étapes guidées).

FONCTIONNALITÉS TECHNIQUES :
------------------------------
- Affichage dynamique des produits depuis un fichier JSON
- Filtrage client-side par catégorie, prix et recherche
- Tri par prix croissant/décroissant, note, ordre alphabétique
- Authentification simulée avec localStorage (session)
- Panier persistant en localStorage
- Validation des formulaires avec expressions régulières (RegEx)
- Indicateur de force du mot de passe
- Design responsive (mobile, tablette, desktop)
- Balises sémantiques HTML5
- Animations CSS et micro-interactions

## Compte démo

```
Email    : rebihi.chemani@email.com
Password : aymenelamine123!
```

---

MEMBRES DU GROUPE :
--------------------
  REBIHI Aymene
  CHEMANI Lamine

HÉBERGEMENT :
--------------
https://meanye.github.io/REBIHI_CHEMANI/index.html
============================================================
