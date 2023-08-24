setInterval(
    function getDecimalTime(){
        const today = new Date();
        const totalSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
        const totalDecSeconds = totalSeconds / 0.864;
        const decHours = String(Math.floor((totalDecSeconds / 10000) % 10)).padStart(2, '0');
        const decMins = String(Math.floor((totalDecSeconds / 100) % 100)).padStart(2, '0');
        const decSecs = String(Math.floor(totalDecSeconds % 100)).padStart(2, '0');
        document.getElementById("reptemps").innerHTML=decHours + ":" + decMins + ":" + decSecs;
    },864
);

setInterval(
    function getRepDate(){
        const monthNames = ["Vendémiaire","Brumaire","Frimaire","Nivôse","Pluviôse","Ventôse","Germinal","Floréal","Prairial","Messidor","Thermidor","Fructidor","Sansculottides"];
        const weekdayNames = ["Décadi","Primidi","Duodi","Tridi","Quartidi","Quintidi","Sextidi","Septidi","Octidi","Nonidi"];

        const now = new Date();
        const zero = new Date(1792, 8, 22);
        const diffTime = now - zero;
        let days = Math.floor(diffTime / (24 * 60 * 60 * 1000))+1;

        let years = 1;
        let leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
        while (leapyear == true && days > 366 || leapyear == false && days > 365) {
            if (leapyear == true) {
                days -= 366;
                years += 1;
                leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
            } else {
                days -= 365;
                years += 1;
                leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
            }
        }

        let month = 0;
        while (days > 30){
            month += 1;
            days -= 30;
        }

        const weekday = (days % 10);
        
        document.getElementById("repdate").innerHTML=weekdayNames[weekday] + ", " + days + " " + monthNames[month] + ", an " + years;
    },864
);

setInterval(
    function getSymb(){
        const autumn = ["Raisin","Safran","Châtaigne","Colchique","Cheval","Balsamine","Carotte","Amarante","Panais","Cuve","Pomme de terre","Immortelle","Potiron","Réséda","Âne","Belle-de-nuit","Citrouille","Sarrasin","Tournesol","Pressoir","Chanvre","Pêche","Navet","Amaryllis","Bœuf","Aubergine","Piment","Tomate","Orge","Tonneau","Pomme","Céleri","Poire","Betterave","Oie","Héliotrope","Figue","Scorsonère","Alisier","Charrue","Salsifis","Mâcre","Topinambour","Endive","Dindon","Chervis","Cresson","Dentelaire","Grenade","Herse","Bacchante","Azerole","Garance","Orange","Faisan","Pistache","Macjonc","Coing","Cormier","Rouleau","Raiponce","Turneps","Chicorée","Nèfle","Cochon","Mâche","Chou-fleur","Miel","Genièvre","Pioche","Cire","Raifort","Cèdre","Sapin","Chevreuil","Ajonc","Cyprès","Lierre","Sabine","Hoyau","Érable sucré","Bruyère","Roseau","Oseille","Grillon","Pignon","Liège","Truffe","Olive","Pelle"];
        const winter = ["Tourbe","Houille","Bitume","Soufre","Chien","Lave","Terre végétale","Fumier","Salpêtre","Fléau","Granit","Argile","Ardoise","Grès","Lapin","Silex","Marne","Pierre à chaux","Marbre","Van","Pierre à plâtre","Sel","Fer","Cuivre","Chat","Étain","Plomb","Zinc","Mercure","Crible","Lauréole","Mousse","Fragon","Perce neige","Taureau","Laurier thym","Amadouvier","Mézéréon","Peuplier","Cognée","Ellébore","Brocoli","Laurier","Avelinier","Vache","Buis","Lichen","If","Pulmonaire","Serpette","Thlaspi","Thymèle","Chiendent","Trainasse","Lièvre","Guède","Noisetier","Cyclamen","Chélidoine","Traîneau","Tussilage","Cornouiller","Violier","Troène","Bouc","Asaret","Alaterne","Violette","Marceau","Bêche","Narcisse","Orme","Fumeterre","Vélar","Chèvre","Épinard","Doronic","Mouron","Cerfeuil","Cordeau","Mandragore","Persil","Cochléaria","Pâquerette","Thon","Pissenlit","Sylvie","Capillaire","Frêne","Plantoir"];
        const spring = ["Primevère","Platane","Asperge","Tulipe","Poule","Bette","Bouleau","Jonquille","Aulne","Couvoir","Pervenche","Charme","Morille","Hêtre","Abeille","Laitue","Mélèze","Ciguë","Radis","Ruche","Gainier","Romaine","Marronnier","Roquette","Pigeon","Lilas","Anémone","Pensée","Myrtille","Greffoir","Rose","Chêne","Fougère","Aubépine","Rossignol","Ancolie","Muguet","Champignon","Hyacinthe","Râteau","Rhubarbe","Sainfoin","Bâton-d or","Chamérisier","Ver à soie","Consoude","Pimprenelle","Corbeille d'or","Arroche","Sarcloir","Statice","Fritillaire","Bourrache","Valériane","Carpe","Fusain","Civette","Buglosse","Sénevé","Houlette","Luzerne","Hémérocalle","Trèfle","Angélique","Canard","Mélisse","Fromental","Martagon","Serpolet","Faux","Fraise","Bétoine","Pois","Acacia","Caille","Œillet","Sureau","Pavot","Tilleul","Fourche","Barbeau","Camomille","Chèvrefeuille","Caille-lait","Tanche","Jasmin","Verveine","Thym","Pivoine","Chariot"];
        const summer = ["Seigle","Avoine","Oignon","Véronique","Mulet","Romarin","Concombre","Échalote","Absinthe","Faucille","Coriandre","Artichaut","Giroflée","Lavande","Chamois","Tabac","Groseille","Gesse","Cerise","Parc","Menthe","Cumin","Haricot","Orcanète","Pintade","Sauge","Ail","Vesce","Blé","Chalemie","Épeautre","Bouillon-blanc","Melon","Ivraie","Bélier","Prêle","Armoise","Carthame","Mûre","Arrosoir","Panic","Salicorne","Abricot","Basilic","Brebis","Guimauve","Lin","Amande","Gentiane","Écluse","Carline","Câprier","Lentille","Aunée","Loutre","Myrte","Colza","Lupin","Coton","Moulin","Prune","Millet","Lycoperdon","Escourgeon","Saumon","Tubéreuse","Sucrion","Apocyn","Réglisse","Échelle","Pastèque","Fenouil","Épine-vinette","Noix","Truite","Citron","Cardère","Nerprun","Tagette","Hotte","Églantier","Noisette","Houblon","Sorgho","Écrevisse","Bigarade","Verge d'or","Maïs","Marron","Panier"];
        const sansculottides = ["La Fête de la Vertu","La Fête du Génie","La Fête du Travail","La Fête de l'Opinion","La Fête des Récompenses","La Fête de la Révolution"];

        const now = new Date();
        const zero = new Date(1792, 8, 22);
        const diffTime = now - zero;
        let days = Math.floor(diffTime / (24 * 60 * 60 * 1000))+1;

        let years = 1;
        let leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
        while (leapyear == true && days > 366 || leapyear == false && days > 365) {
            if (leapyear == true) {
                days -= 366;
                years += 1;
                leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
            } else {
                days -= 365;
                years += 1;
                leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
            }
        }

        let month = 0;
        while (days > 30){
            month += 1;
            days -= 30;
        }

        let symbol;
        if (month < 2){
            symbol = autumn[days-1+month*30]
        } else if (month >= 2 && month < 5){
            symbol = winter[days-1+(month-3)*30]
        } else if (month >= 5 && month < 8){
            symbol = spring[days-1+(month-6)*30]
        } else if(month >= 8 && month < 11){
            symbol = summer[days-1+(month-9)*30]
        } else{
            symbol = sansculottides[days-1]
        }
        document.getElementById("symbol").innerHTML=symbol;
    },864
);

setInterval(
    function getPic(){
        const imgNames = ['<img src="images/months/Vendémiaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Brumaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Frimaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Nivôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Pluviôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Ventôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Germinal.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Floréal.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Prairial.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Messidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Thermidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Fructidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Sansculottides.jpg" alt="Image du mois." style="height:200px;">'];

        const now = new Date();
        const zero = new Date(1792, 8, 22);
        const diffTime = now - zero;
        let days = Math.floor(diffTime / (24 * 60 * 60 * 1000))+1;

        let years = 1;
        let leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
        while (leapyear == true && days > 366 || leapyear == false && days > 365) {
            if (leapyear == true) {
                days -= 366;
                years += 1;
                leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
            } else {
                days -= 365;
                years += 1;
                leapyear = (years % 4 == 0 && (years % 100 !== 0 || years % 400 == 0) && years % 4000 !== 0);
            }
        }

        let month = 0;
        while (days > 30){
            month += 1;
            days -= 30;
        }

        document.getElementById("monthimage").innerHTML=imgNames[month];
    },864

);
function ParisTime() {
    const POlongitude = 2.337229; //this is 2.337229 deg E to be exact. PO Stands for Paris Observatory

    //const ut1;

}
