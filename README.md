<div align="center">

```
██╗    ██╗ █████╗ ██████╗  █████╗  ██████╗ ██████╗  ██████╗  ██████╗ ██╗  ██╗
██║    ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗██╔═══██╗██║ ██╔╝
██║ █╗ ██║███████║██████╔╝███████║██║   ██║██████╔╝██║   ██║██║   ██║█████╔╝ 
██║███╗██║██╔══██║██╔══██╗██╔══██║██║▄▄ ██║██╔══██╗██║   ██║██║   ██║██╔═██╗ 
╚███╔███╔╝██║  ██║██║  ██║██║  ██║╚██████╔╝██████╔╝╚██████╔╝╚██████╔╝██║  ██╗
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══▀▀╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
```

### 📚 Votre librairie en ligne algérienne

*Des livres qui nourrissent l'esprit*

[![Live Site](https://img.shields.io/badge/🌐_Site_en_ligne-WaraqBook-b5651d?style=for-the-badge)](https://meanye.github.io/REBIHI_CHEMANI/index.html)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://validator.w3.org)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://meanye.github.io/REBIHI_CHEMANI)

</div>

---

## À propos

**WaraqBook** est un mini site e-commerce dédié à la vente de livres et fournitures de papeterie en Algérie. Conçu entièrement en HTML, CSS et JavaScript vanilla — sans framework, sans backend — il offre une expérience d'achat complète côté client : catalogue filtrable, panier persistant, authentification simulée et processus de commande en 3 étapes.

> ⚠️ **Connexion internet requise** — les couvertures des livres sont chargées depuis des sources externes (OpenLibrary, Unsplash). Sans connexion, les images n'apparaîtront pas.

---

## Aperçu des pages

| Page | URL | Description |
|------|-----|-------------|
| 🏠 Accueil | `/index.html` | Hero, catégories, coups de cœur |
| 📦 Produits | `/content/produits.html` | Catalogue complet avec filtres |
| 🔐 Connexion | `/content/connexion.html` | Login avec validation RegEx |
| ✍️ Inscription | `/content/inscription.html` | Création de compte + force du mot de passe |
| 🛒 Commande | `/content/commande.html` | Commande en 3 étapes |

---

## Fonctionnalités

**Catalogue & Produits**
- 12 produits répartis en 6 catégories (Romans, Classiques, Informatique, Sciences, Philosophie, Papeterie)
- Filtrage par catégorie, prix maximum et recherche textuelle en temps réel
- Tri par prix croissant/décroissant, note et ordre alphabétique
- Données stockées directement en JavaScript (pas de fetch, pas de serveur requis)

**Panier**
- Ajout, suppression et modification des quantités
- Total calculé dynamiquement
- Persistance via `localStorage` — le panier survit au rafraîchissement

**Authentification**
- Compte démo préchargé
- Inscription avec sauvegarde dans `localStorage`
- Connexion vérifiant les comptes hardcodés ET les comptes créés
- Session utilisateur persistante avec affichage du prénom dans la nav

**Formulaires**
- Validation complète côté client avec expressions régulières (RegEx)
- Indicateur de force du mot de passe (Faible / Moyen / Fort)
- Messages d'erreur champ par champ en temps réel

**Design**
- Responsive — mobile, tablette, desktop
- Balises sémantiques HTML5 (`nav`, `main`, `section`, `aside`, `article`, `footer`)
- Google Fonts — Lora + Nunito
- Sidebar panier animée

---

## Structure du projet

```
REBIHI_CHEMANI/
│
├── index.html                  ← Page d'accueil
│
├── content/
│   ├── produits.html           ← Catalogue
│   ├── connexion.html          ← Login
│   ├── inscription.html        ← Register
│   └── commande.html           ← Commande
│
├── style/
│   ├── main.css                ← Styles globaux (nav, footer, boutons)
│   ├── index.css               ← Styles page d'accueil
│   ├── produits.css            ← Styles catalogue + panier
│   ├── auth.css                ← Styles connexion/inscription
│   └── commande.css            ← Styles commande
│
├── javascript/
│   ├── app.js                  ← Auth, Cart, Regex, utilitaires (global)
│   ├── index.js                ← Logique page d'accueil
│   ├── produits.js             ← PRODUCTS_DATA + filtres + rendu
│   ├── connexion.js            ← Logique login
│   ├── inscription.js          ← Logique register
│   ├── commande.js             ← Logique commande
│   └── products.json           ← Données produits (référence)
│
├── images/                     ← Images locales
├── readme.txt                  ← Description (format exigé)
└── README.md                   ← Ce fichier
```

---

## Compte démo

```
Email       : rebihi.chemani@email.com
Mot de passe: aymenelamine123!
```

Ou créez votre propre compte via la page **Inscription** — il sera sauvegardé dans votre navigateur.

---

## Instructions d'utilisation

1. Ouvrir **[le site en ligne](https://meanye.github.io/REBIHI_CHEMANI/index.html)** (connexion internet requise pour les images)
2. Naviguer via le menu en haut de page
3. Se connecter avec le compte démo ou créer un nouveau compte
4. Explorer le catalogue, filtrer par catégorie ou rechercher un titre
5. Ajouter des produits au panier via le bouton **🛒 Ajouter**
6. Cliquer sur l'icône panier en haut à droite pour voir le récapitulatif
7. Aller dans **Commandes** pour finaliser l'achat en 3 étapes

---

## Validation W3C

Toutes les pages ont été validées via [validator.w3.org](https://validator.w3.org) :

| Page | Résultat |
|------|----------|
| `index.html` | ✅ Aucune erreur |
| `content/produits.html` | ✅ Aucune erreur |
| `content/connexion.html` | ✅ Aucune erreur |
| `content/inscription.html` | ✅ Aucune erreur |
| `content/commande.html` | ✅ Aucune erreur |

---

## Technologies

| Technologie | Usage |
|------------|-------|
| HTML5 sémantique | Structure et contenu |
| CSS3 (Flexbox + Grid) | Mise en page et responsive |
| JavaScript ES6+ | Interactivité et logique |
| localStorage API | Panier et sessions |
| RegEx | Validation des formulaires |
| Google Fonts | Typographie (Lora + Nunito) |
| GitHub Pages | Hébergement gratuit |
| OpenLibrary API | Couvertures de livres |

---

## Membres du groupe

| Nom | Prénom | Groupe |
|-----|--------|--------|
| REBIHI | Aymene |   5    |
| CHEMANI | Lamine |   5    |

---

<div align="center">

*Projet Web — Module Développement d'Applications Web*  
*Université Mouloud MAMMERI de Tizi-Ouzou — Faculté de Génie Électrique et Informatique*  
*Année universitaire 2025/2026*

---

Fait avec ❤️ en Algérie

</div>
