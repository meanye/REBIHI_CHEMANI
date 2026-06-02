# 📚 WaraqBook — Librairie en ligne algérienne

> Projet Web — Module Développement d'Applications Web  
> Université Mouloud MAMMERI de Tizi-Ouzou | 2025/2026

🔗 **Site en ligne :** [meanye.github.io/WaraqBook](https://meanye.github.io/REBIHI_CHEMANI/index.html)

---

## Description

WaraqBook est un mini site e-commerce dédié à la vente de livres et fournitures de papeterie en Algérie. Il permet de parcourir un catalogue de produits, filtrer par catégorie, ajouter des articles au panier et passer commande — le tout sans backend.

---

## Pages

| Page        | Fichier                    | Description                                 |
| ----------- | -------------------------- | ------------------------------------------- |
| Accueil     | `index.html`               | Présentation, catégories, produits vedettes |
| Produits    | `content/produits.html`    | Catalogue avec filtres et tri               |
| Connexion   | `content/connexion.html`   | Login avec validation RegEx                 |
| Inscription | `content/inscription.html` | Création de compte + force mot de passe     |
| Commande    | `content/commande.html`    | Commande en 3 étapes                        |

---

## Structure du projet

```
WaraqBook/
│
├── index.html
├── content/
│   ├── produits.html
│   ├── connexion.html
│   ├── inscription.html
│   └── commande.html
├── style/
│   ├── main.css
│   ├── index.css
│   ├── produits.css
│   ├── auth.css
│   └── commande.css
├── javascript/
│   ├── app.js          ← Auth, Cart, RegEx (global)
│   ├── products.json   ← Base de données produits
│   ├── index.js
│   ├── produits.js
│   ├── connexion.js
│   ├── inscription.js
│   └── commande.js
├── images/
├── readme.txt
└── README.md
```

---

## Fonctionnalités

- 🛒 **Panier** persistant via `localStorage`
- 🔍 **Filtrage** par catégorie, prix max, recherche textuelle
- 🔃 **Tri** par prix, note, ordre alphabétique
- 🔐 **Authentification simulée** avec session `localStorage`
- ✅ **Validation des formulaires** avec expressions régulières (RegEx)
- 💪 **Indicateur de force** du mot de passe
- 📱 **Responsive** — mobile, tablette, desktop
- 🏷️ **Balises sémantiques** HTML5 (`nav`, `main`, `section`, `aside`, `article`, `footer`)

---

## Compte démo

```
Email    : rebihi.chemani@email.com
Password : aymenelamine123!
```

---

## Instructions d'utilisation

1. Cloner le repo ou télécharger le ZIP
2. Ouvrir `index.html` dans un navigateur (Chrome ou Firefox)
3. Naviguer via le menu en haut de page
4. Utiliser le compte démo ou créer un nouveau compte
5. Ajouter des produits au panier et passer commande

> ⚠️ Besoin de serveur local .

---

## Technologies utilisées

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- HTML5 / CSS3 / JavaScript vanilla
- Google Fonts (Lora + Nunito)
- localStorage API

---

## Membres du groupe

| Nom     | Prénom |
| ------- | ------ |
| REBIHI  | Aymene |
| CHEMANI | Lamine |

---

_© 2026 WaraqBook — Université Mouloud MAMMERI de Tizi-Ouzou_
