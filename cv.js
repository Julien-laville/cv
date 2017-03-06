function getData() {
    return {
        technologies: [{
            category : "languages",
            list : ["JAVA", "JavaScript + NodeJS", "XML", "JSON", "C", "C++", "HTML5", "CSS3", "Ruby", "PHP"]
        },{
            category : "Framework &amp; CMS",
            list : ["Ruby on rails", "Wordpress", "Spring", "Hibernate", "jQuery", "Prototype", "ExtJs", "ExpressJS"]
        },{
            category : "Systèmes",
            list : ["Windows", "Linux"]
        }, {
            category: "Bases de Données",
            list: ["MySQL", "SQLite"]
        }, {
            category : "Méthodes",
            list : ["AJAX", "AJAJ", "WebService (SOAP + WSDL)"]
        },{
            category : "Standards et Normes",
            list : ["Pattern GOF", "MVC", "J2EE", "Java RMI", "Proactive", "Cross-domain AJAX via JSONP", "CORS"]
        }, {
            category : "Outils",
            list : ["Eclipse", "NetBeans", "Redmine", "JUnit", "Rubymine", "Tomcat", "Apache HTTP serveur", "SVN", "Mercurial", "GIT", "Grunt", "Capistrano", "Travis CI", "Active-record"]
        }],
        "experiences": [{
            "société": "Qwant",
            "dates": {from: "octobre 2014", to: "présent"},
            "poste": "Ingénieur Recherche et développement",
            "réalisations": ["Construction du core de l'application Front-End de l'application <a href=\"http://qwant.com\">qwant.com</a>, stack Internationalisation, automatisation des builds et du contrôle qualité en collaboration avec la CI", "Mise en place de Qwant Lite, la version allégé de qwant pour robots, et anciens navigateurs en ExpressJS."],
            "contexte": ["One page app", "vanilla JS", "lightweight", "architecture 3 tiers", "CI"],
            "environement": ["JavaScript", "NodeJs", "ExpressJS", "Grunt", "GIT", "PHPStorm", "Vagrant", "Docker", "Poedit"]
        }, {
            "société": "CrossKnowledge Epistema",
            "dates": {from: "avril 2014", to: "septembre 2014"},
            "poste": "Ingénieur Recherche et développement",
            "réalisations": ["Dans le cadre d’une refonte de l’application web, Intégration complete du framework ExtJs pour les éléments de navigation, graphiques, calendriers"],
            "environement": ["JavaScript", "PHP", "Mercurial", "ExtJS"]

        }, {
            "société": "Air France, Sophia Antipolis",
            "dates": {from: "juillet 2013", to: "mars 2014"},
            "poste": "Développeur informatique",
            "réalisations": ["étude, développement et tests autour des sites Business to Client de la société"],
            "environement": ["JavaScript", "jQuery", "struts", "J2EE", "Perl"]
        }, {
            "société": "Koedia - Sophia Antipolis - (06)",
            "dates": {from: "février 2012", to: "juin 2013."},
            "poste": "Développeur informatique",
            "réalisations": ["Backend : Ajout de fonctionnalités aux WebService d’aviation : Rédaction des spécifications, développement des tests et des services.", "Frontend : Monitoring, Ajout de fonctionnalités et optimisation des sites B2B &amp; B2C.<br> Extension des fonctionnalités ticket-tracker Redmine"],
            "environement": ["WebService (SOAP &amp; WSDL)", "Java J2EE", "Hibernate", "Tomcat", "Spring", "HTML", "Json", "AJAX", "Ruby &amp; Ruby on Rails"]
        }, {
            "société": "Auto-entreprise de développement WEB",
            "dates": {from: "2009", to: "2012"},
            "poste": "Développeur logiciel",
            "réalisations": ["Réalisation d’un site portail et boutique en ligne"],
            "environement": ["Ruby on rails", "Eclipse", "JavaScript", "jQuery UI", "jQuery", "Prototype", "HTML", "Json", "AJAX", "API Dropbox"]
        }, {
            "société": "I3S, Sophia-Antipolis - (06)",
            "dates": {from: "juin 2011", to: "aout 2011"},
            "poste": "Développeur (Stagiaire)",
            "réalisations": ["Réalisation d’une application de résolution de la dynamique de réseaux génétiques basée sur la logique de Hoare."],
            "environement": ["Windows", "Eclipse", "Java"]

        }, {
            "société": "Université de Nice-Sophia Antipolis, Laboratoire des Langues Appliqués - (06)",
            "dates": {from: "2010-06-00", to: "2010-08-00"},
            "poste": "Développeur (Stagiaire)",
            "réalisations": ["Conception et réalisation d’un outil collaboratif entre les élèves et les enseignants de LEA. Gestion d’un portefeuille de traduction, traduction et correction collaborative. Conception et Création d’un serious game s’articulant en trois parties: jeu, éditeur, serveur de scénario."],
            "environement": ["CMS WordPress", "PHP", "HTML5", "Python", "XML", "JavaScript", "AJAX"]
        }, {
            "société": "Arkadia Consulting, Nice - (06)",
            "dates": {from: "2009-06-00", to: "2009-08-00"},
            "poste": "Développeur (Stagiaire)",
            "réalisations": ["Réalisation de deux sites « vitrines » en Ruby on Rails, ces sites on été construits sous formes de CMS, afin de permettre leur maintenance sans développeur."],
            "environement": ["Windows", "Netbeans", "Ruby on Rails", "jQuery", "Photoshop"]

        }],
        "diplomes": [
            {
                year: 2011,
                title: "Master 2 Informatique, fondements et ingénierie - Université de Nice-Sophia Antipolis"
            },
            {year: 2009, title: "Licence Mathématiques & Informatique - Université de Nice-Sophia Antipolis"},
            {year: 2005, title: "Baccalauréat Scientifique, Lycée Carnot - Cannes"}
        ],

        "ouvrages": [
            {title: "Tout sur le code", author: "Steve McConnell", ISBN: "2100487531"},
            {title: "JUnit in Action", author: "Peter Tahchiev", ISBN: "1935182021"},
            {title: "Learning JavaScript Design Patterns", author: "Addy Osmani", ISBN: "1449334864"},
            {title: "97 Things Every Programmer Should Know", ISBN: "0596809485"}
        ],
        "hobbies": [
            "Multirotor R/C",
            "Impression 3D (repRap)",
            "Électronique (microcontrôleur)"
        ],

        "projets": [
            {
                title: "KV-Mini host",
                desc: "serveur simple de stockage KEY VALUE.",
                href: "https://github.com/Julien-laville/kv-mini-host",
                url: "Github/kv-mini-host"
            }, {
                title: "Divide",
                desc: "Mini jeu JavaScript inspiré de Super Hot (W.I.P).",
                href: "https://github.com/Julien-laville/divide/tree/gh-pages",
                url: "Github/divide"
            }, {
                title: "jsToolBox",
                desc: "Micro lib JavaScript orienté haute performance.",
                href: "https://github.com/Julien-laville/jsToolBox",
                url: "Github/jsToolBox"
            }
        ]
    }
}

var technologies = d3.select('#technologiesContainer')
    .selectAll('p')
    .data(getData().technologies)
    .enter()
    .append('p')

technologies.append('strong')
    .text(function(technology) {
        return technology.category + ' : ';
    })

technologies.append('span')
    .text(function(technology){
        return technology.list.join(', ');
    })

var experiences = d3.select('#experiencesContainer')
    .selectAll('p')
    .data(getData().experiences)
    .enter()
    .append('p')

experiences.append('h2')
    .text(function(experience){
        return experience.société
    })


experiences.append('em')
    .text(function(experience){
        return experience.dates.from + ' - ' + experience.dates.to
    })

experiences.append('span')
    .html(function(experience){
        return '<p><strong>Poste occupé : </strong>' + experience.poste + '</p>'
            + '<p><strong>réalisations : </strong>' + experience.réalisations.join(', ') + '</p>'
            + (experience.contexte ? '<p><strong>contexte : </strong>' + experience.contexte + '</p>' : '')
            + '<p><strong>Environement technique : </strong>' + experience.environement.join(', ') + '</p>'
    })

var diplomes = d3.select('#certificatesContainer')
    .selectAll('p')
    .data(getData().diplomes)
    .enter()
    .append('p')

diplomes.append('em')
    .text(function(diplome){
        return diplome.year
    })

diplomes.append('span')
    .text(function(diplome){
        return ' - ' + diplome.title
    })



var ouvrages = d3.select('#booksContainer')
    .selectAll('p')
    .data(getData().ouvrages)
    .enter()
    .append('p')

ouvrages.append('strong')
    .text(function(ouvrage){
        return ouvrage.title
    })

ouvrages.append('span')
    .text(function(ouvrage){
        return ' - ' + ouvrage.author
    })

ouvrages.append('span')
    .text(function(ouvrage){
        return ' - (ISBN : ' + ouvrage.ISBN + ')'
    })

var hobbies = d3.select("#hobbiesContainer")
    .selectAll('p')
    .data(getData().hobbies)
    .enter()
    .append('p')

hobbies.append('p')
    .text(function(hobby) {
        return hobby
    })

var projects = d3.select("#projectsContainer")
    .selectAll('li')
    .data(getData().projets)
    .enter()
    .append('li')
    .attr('class', 'project')


projects.append('span')
    .text(function(projet) {
        return projet.title
    })

projects.append('span')
    .text(function(projet) {
        return projet.desc
    })

projects.append('a')
    .text(function(projet) {
        return 'Github ' + projet.title
    })
    .attr('href',function(projet){
        return projet.href
    })
/*
 Poste occupé : Ingénieur Recherche et développement.
 Réalisation : Refonte du front-end du site web qwant.com, refonte stack Internationalisation, automatisation des builds et automatisation du contrôle qualité en collaboration avec la CI.
 Mise en place de Qwant Lite, la version allégé de qwant pour robots, et anciens navigateurs en ExpressJS.
 Contexte : One page app, vanilla JS, lightweight, architecture 3 tiers, CI.
 Environement technique
 */