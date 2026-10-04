# Guide de Contribution

Merci pour votre intérêt envers **L'Atelier d'Aurélie** ! Ce document définit les normes et bonnes pratiques pour contribuer au projet.

---

## 🌿 Workflow Git & Branches

1. **Branche principale** : `main` est protégée. Les pushes directs sont réservés à `@Boblebol`.
2. **Branches fonctionnelles** : créez une branche descriptive depuis `main` :
   - `feat/nom-de-la-fonctionnalite`
   - `fix/nom-du-bug`
   - `docs/mise-a-jour-documentation`

---

## 💬 Convention de Commits

Nous suivons rigoureusement la spécification **Conventional Commits** :

```text
<type>(<scope>): <description courte à l'impératif>

[corps explicatif optionnel]

[footer optionnel]
```

### Types autorisés :
- `feat` : Nouvelle fonctionnalité visible pour l'utilisateur
- `fix` : Correction d'un bug
- `docs` : Documentation uniquement
- `style` : Formatage, points-virgules manquants, sans impact logique
- `refactor` : Modification du code qui ne corrige ni n'ajoute rien
- `perf` : Amélioration de performance
- `test` : Ajout ou correction de tests
- `chore` : Tâches de maintenance, dépendances, configuration

---

## 🛠️ Développement Local

```bash
# Installation des dépendances
pnpm install

# Lancement du serveur de développement local
pnpm dev

# Vérification du typage TypeScript et build de production
pnpm build

# Prévisualisation du build de production
pnpm preview
```

---

## 🔍 Critères de Qualité avant PR

Avant de soumettre une Pull Request :
- Le build `pnpm build` doit réussir sans aucune erreur TypeScript.
- Le design doit rester responsive sur smartphone (360px–414px) et desktop.
- Respecter la palette de marque (crème, or, chocolat, baies).
- Ne jamais ajouter de tracking intrusif non anonymisé.
