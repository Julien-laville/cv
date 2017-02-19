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
            "Société": "Qwant",
            "dates": {from: "October 1, 2014", to: Date.now()},
            "poste": "Ingénieur Recherche et développement",
            "Réalisation": ["Refonte du front-end du site web <a href=\"http://qwant.com\">qwant.com</a>, refonte stack Internationalisation, automatisation des builds et automatisation du contrôle qualité en collaboration avec la CI", "Mise en place de Qwant Lite, la version allégé de qwant pour robots, et anciens navigateurs en ExpressJS."],
            "contexte": ["One page app", "vanilla JS", "lightweight", "architecture 3 tiers", "CI"],
            "Environement technique": ["JavaScript", "NodeJs", "ExpressJS", "Grunt", "GIT", "PHPStorm", "Vagrant", "Docker", "Poedit"]
        }, {
            "Société": "CrossKnowledge Epistema",
            "dates": {from: "2014-04-00", to: "2014-09-00"},
            "poste": "Ingénieur Recherche et développement",
            "Réalisation": ["Dans le cadre d’une refonte de l’application web, Intégration complete du framework ExtJs pour les éléments de navigation, graphiques, calendriers"],
            "Environement technique": ["JavaScript", "PHP", "Mercurial", "ExtJS"]

        }, {
            "Société": "Air France, Sophia Antipolis",
            "dates": {from: "2013-07-00", to: "2014-03-00"},
            "poste": "Développeur informatique",
            "Réalisation": ["étude, développement et tests autour des sites Business to Client de la société"],
            "Environement technique": ["JavaScript", "jQuery", "struts", "J2EE", "Perl"]
        }, {
            "Société": "Koedia - Sophia Antipolis - (06)",
            "dates": {from: "2012-02-00", to: "2013-06-00"},
            "poste": "Développeur informatique",
            "Réalisation": ["Backend : Ajout de fonctionnalités aux WebService d’aviation : Rédaction des spécifications, développement des tests et des services.", "Frontend : Monitoring, Ajout de fonctionnalités et optimisation des sites B2B &amp; B2C.<br> Extension des fonctionnalités ticket-tracker Redmine"],
            "Environement technique": ["WebService (SOAP &amp; WSDL)", "Java J2EE", "Hibernate", "Tomcat", "Spring", "HTML", "Json", "AJAX", "Ruby &amp; Ruby on Rails"]
        }, {
            "Société": "Auto-entreprise de développement WEB",
            "dates": {from: "2009-01-00", to: "2012-01-00"},
            "poste": "Développeur informatique",
            "Réalisation": ["Réalisation d’un site portail et boutique en ligne"],
            "Environement technique": ["Ruby on rails", "Eclipse", "JavaScript", "jQuery UI", "jQuery", "Prototype", "HTML", "Json", "AJAX", "API Dropbox"]
        }, {
            "Société": "I3S, Sophia-Antipolis - (06)",
            "dates": {from: "2011-06-00", to: "2011-08-00"},
            "poste": "Développeur (Stagiaire)",
            "Réalisation": ["Réalisations d’une application de résolution de la dynamique de réseaux génétiques basée sur la logique de Hoare."],
            "Environement technique": ["Windows", "Eclipse", "Java"]

        }, {
            "Société": "Université de Nice-Sophia Antipolis, Labarotoire des Langues Appliqués - (06)",
            "dates": {from: "2010-06-00", to: "2010-08-00"},
            "poste": "Développeur (Stagiaire)",
            "Réalisation": ["Réalisations d’une application de résolution de la dynamique de réseaux génétiques basée sur la logique de Hoare.<br>Conception et Création d’un serious game s’articulant en trois parties: jeu, éditeur, serveur de<br>scénario"],
            "Environement technique": ["CMS WordPress", "PHP", "HTML5", "Python", "XML", "JavaScript", "AJAX"]
        }, {
            "Société": "Arkadia Consulting, Nice - (06)",
            "dates": {from: "2009-06-00", to: "2009-08-00"},
            "poste": "Développeur (Stagiaire)",
            "Réalisation": ["Réalisation de deux sites « vitrines » en Ruby on Rails, ces sites on été construits sous formes de CMS, afin de permettre leur maintenance sans développeur."],
            "Environement technique": ["Windows", "Netbeans", "Ruby on Rails", "jQuery", "Photoshop"]

        }],
        "Diplômes": [
            {
                date: 2011,
                "title": "Master 2 Informatique, fondements et ingénierie, - Université de Nice-Sophia Antipolis"
            },
            {date: 2009, "title": "Licence Mathématiques &amp; Informatique, Université de Nice-Sophia Antipolis"},
            {date: 2005, "title": "Baccalauréat Scientifique, Lycée Carnot, Cannes"}
        ],

        "Ouvrages &amp; lectures": [
            {title: "Tout sur le code", author: "Steve McConnell", ISBN: "2100487531"},
            {title: "JUnit in Action", author: "Peter Tahchiev", ISBN: "1935182021"},
            {title: "Learning JavaScript Design Patterns", author: "", ISBN: "1449334864"},
            {title: "97 Things Every Programmer Should Know", author: "", ISBN: "0596809485"}
        ],
        "Hobbies": [
            "Multirotor R/C",
            "Impression 3D (repRap)",
            "Électronique (microcontrôleur)"
        ],

        "µ projets": [
            {
                title: "KV-Mini host",
                desc: "server simple de stockage KEY VALUE.",
                href: "https://github.com/Julien-laville/kv-mini-host",
                url: "Github/kv-mini-host"
            },
            {
                title: "Divide",
                desc: "Mini jeu JavaScript inspiré de Super Hot (W.I.P).",
                href: "https://github.com/Julien-laville/divide/tree/gh-pages",
                url: "Github/divide"
            },
            {
                title: "jsToolBox",
                desc: "Micro lib JavaScript orienté Haute performance.",
                href: "https://github.com/Julien-laville/jsToolBox",
                url: "Github/jsToolBox"
            }
        ]
    }
}

d3.select("body")
    .selectAll("div")
    .data(getData().technologies)
    .enter()
    .append('strong')
    .text(function(technology) {
        return technology.category
    })
    .append('span')
    .text(function(technology) {
        return technology.list.join(', ')
    })
