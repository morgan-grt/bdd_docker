GUERET Morgan  
CARDOSO Simon  

***

# DM Base de données


Le site web interractif est accessible à l'url [localhost](http://localhost)  
Si le site tourne sur une vm en pont il est accessible grâce à l'ip de la vm ex : [http://192.168.1.15](http://192.168.1.15)  
  
La base de données est appelée *weather_db* avec pour collection principale *weather* et traite la météo  
entre *2000* et *2021* pour 10 villes d'*Europe*:
- 4 en *France* ( *Bordeaux*, *Caen*, *Nice* et *Paris* )
- 3 en Allemagne ( *Hambourg*, *Nuremberg* et *Sarrebruck* )
- 3 en Espagne ( *Barcelone*, *Madrid* et *Seville* )

Les villes sont sélectionnées selon la quantité de données disponible

## Organisation :

Le dossier contient:
- *app/* : le server nodejs pour faire tourner le site, il est lancé sur le port 8080  
qui est transformé en port 80 par *Docker-compose*
- *graphql/* : le serveur nodejs pour faire tourner graphql, le playground est actif, il tourne sur le port 4000
- *data/* : sera partagé avec le conteneur mongo, il contient le fichier json représentant la base de données  
ainsi qu'un fichier check.js pour vérifier si la base de données *weather_db* contient les données ou non  
(utilisé par *run.sh*)
- *dockerfiles/* : deux fichiers pour créer les conteneurs des serveurs nodejs
- *dm_stack.yml* : permet de démarrer la pile de conteneurs, il y en a 4 (mongo, mong-express, graphql et app)
- *run.sh* : permet de démarrer la pile grâce à *dm_stack.yml* mais aussi de vérifier si la base *mongo* contient des données  
sinon importe les données à partir du fichier json partagé par *data/*
- *stop.sh* : permet de stopper la pile grâce à *dm_stack.yml*
- *util.txt* : ensemble de commandes utiles pour  le bon fonctionnement au cas où

## Lancement :

Le plus simple est d'exécuter le fichier *run.sh* et d'arrêter avec le fichier *stop.sh*  
A noter : il peut y avoir un problème avec le nom du docker mongo lors de la création,  
Notamment si plusieurs conteneurs mongo sont créés dans le même dossier.

Pour contrer : il suffit de modifier dans *run.sh* la variable *basename* avec le numéro du conteneur  
ou la variable *container* avec le nom du conteneur en dur