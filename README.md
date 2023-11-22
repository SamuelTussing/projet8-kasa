# Projet 8 du parcours Développeur web d'OpenClassrooms : Créez une application web de location immobilière avec React

### Lien vers le site :
[https://kasasitewebtussingsamuel.vercel.app/logement/7cbb378e](https://projet8-kasa-omega.vercel.app/)

### Compétences évaluées :
* Réaliser une application web en utilisant Create React App
* Utilisation du Router avec React Router
* Mise en place du style et des animation à l'aide de SASS
* Utilisation des props, du state et gestion des évênements dans React

## Objectifs
1. Développer un site responsive à l'aide de React.
2. Découper le projet en composants modulaires et réutilisables

## Livrables
***
### Pages à intégrer : 
* Page d'accueil
* Page hébergement
* Page A propos

#### Animations

##### Accordion
* Au clic, l'acordéon se déploie et révêle son contenu (texte ou liste d'équipements). L'icône de flèche subit une rotation de 180° au clic et l'animation se joue en reverse si un nouveau clic est réalisé, fermant l'accordéon.

##### Page d'accueil
* Créatio de la page d'accueil avec React et gestion des routes avec le Router React. La page d'accueil contient 20 cartes renvoyant aux pages logements correspondants. Les informations à afficher sur les cartes sont récupérées à l'aide d'un fetch et envoyées via les props aux composants.





##### Pages de menu
* À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe “Entrées”, “Plats” et “Desserts”. 
* Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser de la droite vers la gauche. Pour cette première version, l’effet peut apparaître au survol au lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension.


## Technologies
***
* Autorisées : HTML, CSS, préprocesseur CSS (ex: Sass)
* Interdites : JavaScript, inline CSS

### Identité graphique

Polices :
* Logo et titres : Shrikhand
* Texte : Roboto

Couleurs :
* Primaire: #9356DC
* Secondaire: #FF79DA
* Tertiaire: #99E2D0

### Compatibilité
Sur tablette et desktop, le site devra s’adapter, mais ces supports n’étant pas prioritaires, leur mise en page est libre.
* L’ensemble du site devra être responsive sur mobile, tablette et desktop.
* Les pages devront passer la validation W3C en HTML et CSS sans erreurs.
* Le site doit être parfaitement compatible avec les dernières versions desktop de
Chrome et Firefox.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
