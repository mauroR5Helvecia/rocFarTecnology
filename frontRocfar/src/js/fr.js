// fr.js
const messages = {
    title: "Accueillir",
    aboutme: "À propos de nous",
    p1: "Nées en 2022, nos bases sont basées sur l'apport de solutions numériques aux problèmes quotidiens qui se posent dans la société.",
    p2:"Avec l'utilisation des technologies, il est destiné à responsabiliser l'individu, soit en élargissant sa clientèle, soit en améliorant ses services s'il a une entreprise, ainsi qu'en démarrant de nouveaux projets avec un cadre numérique solide.",
    p3: "Sans aucun doute, la technologie a progressé rapidement ces derniers temps et est là pour rester. Dans ce contexte, il est évident que les entreprises qui décident de mettre en œuvre les technologies numériques sont plus susceptibles de connaître une croissance importante. L'adoption de solutions technologiques est devenue un avantage concurrentiel clé sur le marché actuel, permettant d'optimiser les processus, d'améliorer l'efficacité et d'offrir des expériences plus personnalisées aux clients.",
    p4a: "Enfin depuis",
    p4b: "Nous travaillons sur nos propres projets, qui naissent de la vision de promouvoir la vie des gens, d'atteindre des objectifs, de fixer des objectifs et d'accomplir des objectifs.",
        //-----------------------------------------------

    //Comienzo Variables Footer

    tecnologies: "Les technologies",
    redes: "réseaux sociaux",
    derechos: "Droit d'auteur ©",
    tel: "téléphone", 


        //---------------------------
    //Comienzo variables NavBAr

    inicio: "Accueil",
    about: "À propos de nous",
    contact: "Contact",

       //---------------------------
    //Carrusel textos

    img1a:"Nous sommes également intéressés",
    img1b:"que plus de gens savent ce que vous faites",
    img2a:"Les services nécessaires pour que vous ayez votre meilleur site web",
    img3a:"Des solutions complètes et adaptables à vos besoins",
    img3b:"Accompagnons votre croissance",

        //contacto and text

        texto1andwsap:"Si vous pensez que nous pouvons vous aider, n'hésitez pas à nous contacter sans engagement",

        //------------------------------------------------------------------------

     //text Home de Home

     servicios:"Prestations de service",
     textLi1:"Web adaptable à tous les appareils",
     textLi2:"Mise à jour du contenu",
     textLi3:"Gestion de domaine complète",
     textLi4:"E-mail professionnel (@votreDomaine)",
     textLi5:"des applications Web",
     prestador:"En tant que fournisseur de services numériques, notre objectif est d'aider les entrepreneurs à améliorer leur présence numérique et à atteindre leurs objectifs en ligne. Cela peut inclure la conception de sites Web, le marketing numérique, la publicité sur les réseaux sociaux, l'optimisation des moteurs de recherche (SEO), la gestion de la réputation en ligne, et bien plus encore.",
 
     //---------------------------

     ingresName:"Entrez votre nom",
     ingresEmail:"Entrez votre adresse e-mail",
     ingresConsul:"Entrez votre demande",
    //--------------------------
    enviar:"Envoyer",
    sendExit:"Le formulaire a été soumis avec succès, nous répondrons à votre demande dans les plus brefs délais.",
    camposVacios: "Aucun champ ne peut rester vide",
    validEmail:"Le format de l’e-mail n’est pas valide, veuillez vérifier et réessayer",


    //Componente de cliente servicio

    titleServiceClient: "Transformer les idées en applications : découvrez notre approche",
    parrafo1ServCli: "Chez rocFar, nous apprécions profondément les idées uniques de nos clients et comprenons que chaque projet est une expression unique de leur vision. Nous sommes fiers d’être les facilitateurs de cette vision, en la transformant en une réalité numérique. Notre philosophie est axée sur une collaboration étroite, où vos idées sont au cœur de l’ensemble du processus de développement. Nous avons à cœur d’aller au-delà des attentes, toujours guidés par les technologies du moment que nous allons détailler ci-dessous. ",
    reactServCli: "Le Frontend, c’est-à-dire la partie visuelle d’une application, est comme la façade numérique de votre entreprise. Chez rocFar, nous utilisons React pour donner vie à cette partie essentielle. Créé par Facebook, React est comme un architecte numérique qui simplifie la construction d’interfaces utilisateur interactives et efficaces. Donc, en bref, React est notre allié pour créer des sites Web visuellement attrayants et hautement fonctionnels.",
    springServCli: "Plongeons maintenant dans le moteur technologique qui alimente les fonctionnalités du back-end : Java, soutenu par la puissance de Spring Boot. Nous nous appuyons sur Java pour gérer cette partie vitale de votre application. Java, un langage de programmation polyvalent et robuste, fournit la base solide sur laquelle nous construisons le cœur de votre système. Combiné à Spring Boot, une idée originale de l’équipe de Pivotal Software, nous obtenons un développement rapide et efficace. Java se distingue par sa portabilité, sa sécurité et sa capacité à gérer efficacement de grandes quantités de données. Ainsi, votre application est soutenue par la fiabilité et la robustesse de Java, offrant des performances stables et durables à tout moment.",
    sqlServCli: "Au cœur de notre infrastructure, nous assurons une gestion efficace et sécurisée des données à l’aide de Spring Data JPA en conjonction avec une base de données SQL. Spring Data JPA est une extension de Spring qui simplifie l’accès aux bases de données relationnelles et nous permet d’interagir efficacement avec la base de données à l’aide d’objets Java. De plus, en optant pour une base de données SQL, nous avons fait le choix d’un système robuste et hautement fiable qui suit des normes largement reconnues dans l’industrie. Cette combinaison de technologies nous permet d’assurer une persistance efficace et évolutive des données.",
    nginxServCli: "Nous avons choisi Nginx comme serveur web pour faciliter une communication efficace entre le Front End, le Back End (Spring Boot) et la base de données SQL gérée par Spring Data JPA. Nginx assure une distribution fluide du trafic, améliorant la vitesse et la fiabilité des applications grâce à une gestion optimale des demandes. Avec ce choix, nous garantissons une infrastructure robuste qui prend en charge l’expérience utilisateur et les performances globales de votre application.",
    hostingerServCli: "Votre application trouvera sa place dans un environnement d’hébergement à la pointe de la technologie fourni par Hostinger, un service cloud fiable. Nous utiliserons votre service VPS pour assurer la disponibilité 24h/24 et 7j/7 de l’application, soutenue par un domaine enregistré via Hostinger.  Ce choix stratégique nous permet d’offrir un hébergement robuste et évolutif, adossé à l’infrastructure fiable de Hostinger, garantissant une expérience utilisateur fluide et des performances constantes.",
    teamServCli: "En favorisant une collaboration étroite avec vous, nous mettrons en œuvre l’intégration/déploiement continu (CI/CD) en utilisant GitLab comme plate-forme centrale pour l’hébergement de code. Cette pratique assure une évolution constante de l’application, avec des changements qui sont mis en œuvre de manière efficace et transparente. Nous adopterons la méthodologie Agile pour gérer le développement, permettant des livrables itératifs, une flexibilité dans les ajustements et un alignement constant avec vos objectifs. En travaillant ensemble, nous veillons à ce que votre vision évolue de manière agile et se traduise efficacement dans le produit final.",
    cierreServCli: "En conclusion, nous sommes ici pour transformer n’importe quelle idée en réalité. Avec des outils technologiques avancés, des méthodologies agiles et une disponibilité totale pour répondre à vos questions, nous sommes prêts à faire passer votre projet au niveau supérieur. Contactez-nous et donnons vie à votre vision!",
    atrasServCli: "Précédent",

};
  
  export default messages;
  