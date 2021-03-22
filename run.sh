#! /bin/bash

sudo docker-compose -f dm_stack.yml up -d

# on récupère le nom du dossier pour le nom du container
dirname=`basename "$PWD"`;
basename="_mongo_1"; # A MODIFIER SI PROBLEME, par exemple plusieurs containers mongo donc numéro > 1
container="${dirname,,}${basename}"; # ,, pour lowercase

if (sudo docker exec -i $container sh -c 'mongo /import/check.js --authenticationDatabase admin -u root -p example | grep yes')
then 
   	echo "La base de données contient déjà les données";
else
	echo "La base de données va recevoir les données"
   	sudo docker exec -i $container sh -c 'mongoimport --db weather_db --jsonArray --collection weather --type json --file /import/data_pays_2000-2021.json --authenticationDatabase admin -u root -p example';
   	echo "Si le nom du container n'est pas valide veuillez modifier le nom du container dans RUN.sh";
fi