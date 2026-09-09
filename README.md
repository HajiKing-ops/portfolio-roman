# Portfolio de Roman Salamzada

Portfolio statique français BTS SIO SLAM, amélioré à partir du site existant. Aucun framework ni dépendance nécessaire au fonctionnement : HTML, CSS, JavaScript et fichiers locaux.

## Ouvrir et vérifier

Ouvrir `index.html` directement, ou servir le dossier avec un serveur local. `npm run check` vérifie la syntaxe JavaScript. `npm run build` copie uniquement les fichiers publics vers `dist/` pour l’hébergement statique.

La configuration Sites se trouve dans `.openai/hosting.json`. Le dossier `dist/` est généré et ne doit pas être modifié à la main. Les sources de référence sont à la racine.

## Modifier le contenu

- `index.html` : neuf sections et fenêtres de détail. Chaque carte possède un bouton `data-open-layer` qui cible l’identifiant d’une fenêtre.
- `style.css` : styles existants préservés et adaptations finales identifiées par le commentaire « Final portfolio refinements ».
- `script.js` : pile de fenêtres, navigation mobile, focus, fermeture Échap, galerie et prévisualisation. Le script est chargé avec `defer` pour inclure toutes les fenêtres.
- `images/` : visuels publics, sources dans `images/SOURCES.md` et `images/technologies/SOURCES.md`.
- `cv/` et `certificates/` : uniquement les versions publiques contrôlées.

## Ajouter une galerie

Reprendre la structure de `coordi-gallery` : une fenêtre `.photo-gallery-modal`, une barre avec un bouton de fermeture puis des boutons `.gallery-thumbnail` contenant une image avec un texte alternatif. Utiliser un identifiant unique et un bouton `data-open-layer` dans le détail du projet. Le système JavaScript retrouve automatiquement ces éléments au chargement ; aucune logique supplémentaire n’est nécessaire.

Avant d’ajouter un document ou une photo, retirer les identifiants personnels, numéros de téléphone, adresses privées et références de matériel. Ne pas déposer l’original sensible dans un dossier publié, même si aucun lien ne le pointe.

## Mise à jour des statuts

Actualiser ensemble la carte, la fenêtre, le CV public et les repères BTS. ApplicationFrais reste en amélioration, le stage 2 en recherche et Holmes CTF en préparation tant que de nouvelles preuves ne permettent pas de modifier ces statuts. Le rôle de Lenny Paul dans le frontend PFMP doit rester explicite.

L’attestation 42 doit être décrite selon son contenu réel (inscription/participation au processus d’admission), jamais comme un diplôme ou une validation du cursus 42. Les formations InfoTech Kamgar ne sont pas des certifications officielles Microsoft. La lettre de recommandation Co’ordi est publiée dans la fenêtre de cette expérience. L’attestation d’emploi reste privée car elle contient des informations personnelles. Ces documents confirment le rôle et la période officielle du 6 janvier 2025 au 13 août 2025.

## Veille

La fiche MLflow est une entrée initiale fondée sur une source vérifiée le 7 septembre 2026, sans prétendre à une lecture ou un essai personnel déjà réalisé par Roman. Ajouter les nouvelles fiches dans la section `veille`, avec date de lecture, source, évolution observée, intérêt, synthèse personnelle et éventuellement lien vers une expérience réelle.

## Hébergement

Publier uniquement `dist/` après construction. Les sauvegardes anciennes du dossier d’origine, le rapport d’audit privé et les fichiers de travail ne font pas partie du site. L’aperçu Sites créé pour cette livraison reste privé ; son accès ne doit pas être confondu avec une publication accessible à un jury ou un recruteur.
