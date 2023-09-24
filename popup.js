//import solstice from 'astronomia';

setInterval(
    function main(){
        getPic();
        getRepDate();
        getSymb();
        getDecimalTime();
        //getParisObsTime();
        //calcDate();
    },864);

function getDecimalTime(){
    const today = new Date();
    const totalSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
    const totalDecSeconds = totalSeconds / 0.864;
    const decHours = String(Math.floor((totalDecSeconds / 10000) % 10)).padStart(2, '0');
    const decMins = String(Math.floor((totalDecSeconds / 100) % 100)).padStart(2, '0');
    const decSecs = String(Math.floor(totalDecSeconds % 100)).padStart(2, '0');
    document.getElementById("reptemps").innerHTML=decHours + ":" + decMins + ":" + decSecs;
}

function getRepDate(){
    const monthNames = ["Vendémiaire","Brumaire","Frimaire","Nivôse","Pluviôse","Ventôse","Germinal","Floréal","Prairial","Messidor","Thermidor","Fructidor","Sansculottides"];
    const weekdayNames = ["Décadi","Primidi","Duodi","Tridi","Quartidi","Quintidi","Sextidi","Septidi","Octidi","Nonidi"];

    const resultArray = calcDate();
    const standardDay = resultArray[0];
    const standardMonth = resultArray[1];
    const standardYear = resultArray[2];

    const weekday = (standardDay % 10);
    
    document.getElementById("repdate").innerHTML=weekdayNames[weekday] + ", " + standardDay + " " + monthNames[standardMonth] + ", an " + standardYear;
}

function getSymb(){
    const ruralCalendar = [
        ["Raisin","Safran","Châtaigne","Colchique","Cheval","Balsamine","Carotte","Amarante","Panais","Cuve","Pomme de terre","Immortelle","Potiron","Réséda","Âne","Belle-de-nuit","Citrouille","Sarrasin","Tournesol","Pressoir","Chanvre","Pêche","Navet","Amaryllis","Bœuf","Aubergine","Piment","Tomate","Orge","Tonneau","Pomme","Céleri","Poire","Betterave","Oie","Héliotrope","Figue","Scorsonère","Alisier","Charrue","Salsifis","Mâcre","Topinambour","Endive","Dindon","Chervis","Cresson","Dentelaire","Grenade","Herse","Bacchante","Azerole","Garance","Orange","Faisan","Pistache","Macjonc","Coing","Cormier","Rouleau","Raiponce","Turneps","Chicorée","Nèfle","Cochon","Mâche","Chou-fleur","Miel","Genièvre","Pioche","Cire","Raifort","Cèdre","Sapin","Chevreuil","Ajonc","Cyprès","Lierre","Sabine","Hoyau","Érable sucré","Bruyère","Roseau","Oseille","Grillon","Pignon","Liège","Truffe","Olive","Pelle"],
        ["Tourbe","Houille","Bitume","Soufre","Chien","Lave","Terre végétale","Fumier","Salpêtre","Fléau","Granit","Argile","Ardoise","Grès","Lapin","Silex","Marne","Pierre à chaux","Marbre","Van","Pierre à plâtre","Sel","Fer","Cuivre","Chat","Étain","Plomb","Zinc","Mercure","Crible","Lauréole","Mousse","Fragon","Perce neige","Taureau","Laurier thym","Amadouvier","Mézéréon","Peuplier","Cognée","Ellébore","Brocoli","Laurier","Avelinier","Vache","Buis","Lichen","If","Pulmonaire","Serpette","Thlaspi","Thymèle","Chiendent","Trainasse","Lièvre","Guède","Noisetier","Cyclamen","Chélidoine","Traîneau","Tussilage","Cornouiller","Violier","Troène","Bouc","Asaret","Alaterne","Violette","Marceau","Bêche","Narcisse","Orme","Fumeterre","Vélar","Chèvre","Épinard","Doronic","Mouron","Cerfeuil","Cordeau","Mandragore","Persil","Cochléaria","Pâquerette","Thon","Pissenlit","Sylvie","Capillaire","Frêne","Plantoir"],
        ["Primevère","Platane","Asperge","Tulipe","Poule","Bette","Bouleau","Jonquille","Aulne","Couvoir","Pervenche","Charme","Morille","Hêtre","Abeille","Laitue","Mélèze","Ciguë","Radis","Ruche","Gainier","Romaine","Marronnier","Roquette","Pigeon","Lilas","Anémone","Pensée","Myrtille","Greffoir","Rose","Chêne","Fougère","Aubépine","Rossignol","Ancolie","Muguet","Champignon","Hyacinthe","Râteau","Rhubarbe","Sainfoin","Bâton-d or","Chamérisier","Ver à soie","Consoude","Pimprenelle","Corbeille d'or","Arroche","Sarcloir","Statice","Fritillaire","Bourrache","Valériane","Carpe","Fusain","Civette","Buglosse","Sénevé","Houlette","Luzerne","Hémérocalle","Trèfle","Angélique","Canard","Mélisse","Fromental","Martagon","Serpolet","Faux","Fraise","Bétoine","Pois","Acacia","Caille","Œillet","Sureau","Pavot","Tilleul","Fourche","Barbeau","Camomille","Chèvrefeuille","Caille-lait","Tanche","Jasmin","Verveine","Thym","Pivoine","Chariot"],
        ["Seigle","Avoine","Oignon","Véronique","Mulet","Romarin","Concombre","Échalote","Absinthe","Faucille","Coriandre","Artichaut","Giroflée","Lavande","Chamois","Tabac","Groseille","Gesse","Cerise","Parc","Menthe","Cumin","Haricot","Orcanète","Pintade","Sauge","Ail","Vesce","Blé","Chalemie","Épeautre","Bouillon-blanc","Melon","Ivraie","Bélier","Prêle","Armoise","Carthame","Mûre","Arrosoir","Panic","Salicorne","Abricot","Basilic","Brebis","Guimauve","Lin","Amande","Gentiane","Écluse","Carline","Câprier","Lentille","Aunée","Loutre","Myrte","Colza","Lupin","Coton","Moulin","Prune","Millet","Lycoperdon","Escourgeon","Saumon","Tubéreuse","Sucrion","Apocyn","Réglisse","Échelle","Pastèque","Fenouil","Épine-vinette","Noix","Truite","Citron","Cardère","Nerprun","Tagette","Hotte","Églantier","Noisette","Houblon","Sorgho","Écrevisse","Bigarade","Verge d'or","Maïs","Marron","Panier"],
        ["La Fête de la Vertu","La Fête du Génie","La Fête du Travail","La Fête de l'Opinion","La Fête des Récompenses","La Fête de la Révolution"]
    ];

    const resultArray = calcDate();
    const standardDay = resultArray[0];
    const standardMonth = resultArray[1];
    
    const symbol = ruralCalendar[Math.floor(standardMonth/3)][(standardDay-1)+((standardMonth % 3) * 30)];
    
    document.getElementById("symbol").innerHTML=symbol;
}

function getPic(){
    const imgNames = ['<img src="images/months/Vendémiaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Brumaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Frimaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Nivôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Pluviôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Ventôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Germinal.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Floréal.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Prairial.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Messidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Thermidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Fructidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Sansculottides.jpg" alt="Image du mois." style="height:200px;">'];
    
    const resultArray = calcDate();
    const standardMonth = resultArray[1];
    document.getElementById("monthimage").innerHTML=imgNames[standardMonth];
}

//starting the logic behind Time at the Paris observatory.
/*function getParisObsTime() {
    const POlongitude = 2.337229; //this is 2.337229 deg E to be exact. PO Stands for Paris Observatory
    const today = new Date();
    const currentYear = today.getFullYear();
    const startYear = new Date.UTC(currentYear, 0, 1);
    const SecInYear = (today - startYear)/1000;
    //const AutumnSol = solstice.september2 // working on this TODO

    time_diff = getTimeDiffsec(POlongitude);
    Sec = timeSec();
    timePO = SecInYear - time_diff //time of the paris Observatory in seconds
    document.getElementById("testequinox").innerHTML=currentYear;
}
function timeSec(){ //currently working on
    const datesec = Date.now() / 1000; // not how this works Date in ms, is ms from jan 1 1970. figure out how to use that
    return datesec;
}

function getTimeDiffSec(longitude){ // currently working on
    const formula = (1/15);
    difference = longitude * formula;
    return difference;
};*/

function calcDate(){
    const now = new Date();                                 // today's date in millieconds and the start day of the calendar
    const zero = new Date(1792, 8, 22);                     // start day of calendar in msec, (which =  1 Vendémiaire an I)
    const diffTime = now - zero;                            // finds difference in milliseconds between the two dates
    const year = Math.ceil(diffTime / 31556925129.6);       // divide by a precise solar year value to find year
    const msec = diffTime - ((year - 1) * 31556925129.6);   // subtract to find how many msec passed in the current year 
    const days = Math.ceil(msec / (24 * 60 * 60 * 1000));   // divide to convert msec into days passed in the current year
    const month = Math.floor(days/30);                      // divide by the number of days/month to find current month
    const day = days - (month * 30);                        // subtract to find how many days passed in the current month
    /*let days = Math.floor(diffTime / (24 * 60 * 60 * 1000))+1; // divide by 

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
    }*/

    const standardDay = day;
    const standardMonth = month;
    const standardYear = year;
    return [standardDay, standardMonth, standardYear];
};

function convertToRepublican() {
    const d = parseInt(document.getElementById('day').value);   // Takes in the input values by pulling from html fields
    const m = parseInt(document.getElementById('month').value); // "
    const y = parseInt(document.getElementById('year').value);  // "
    const now = new Date(y, m - 1, d, 0, 0, 0, 1);              // makes them a date value. Must have a time value that is 
                                                                // nonzero so that the subtract does not fail.
    
    const leap = new Date(1794, 8, 22);                         // instead of start day of calendar, use the day of the first leap year in msec to avoid errors in leap year calculations
    const zero = new Date(1792, 8, 22);                         // calendar start day in ms
    const diffTime = now - leap;                                // finds difference in milliseconds between now and first leap
    const addval = leap - zero;                                 // find the difference between leap & zero to get accurate date val
    const year = Math.floor(diffTime / 31556925129.6);          // divide by a precise solar year value to find year
    const msec = diffTime - (year * 31556925129.6);             // subtract to find how many msec passed in the current year 
    const days = Math.ceil(msec / (24 * 60 * 60 * 1000));       // divide to convert msec into days passed in the current year
    const month = Math.floor(days / 30);                        // divide by the number of days/month to find current month
    const day = days - (month * 30);                            // subtract to find how many days passed in the current month

    const standardDay = day;
    const standardMonth = month+1;
    const standardYear = year+3;

    /*const monthNames = ["Vendémiaire","Brumaire","Frimaire","Nivôse","Pluviôse","Ventôse","Germinal","Floréal","Prairial","Messidor","Thermidor","Fructidor","Sansculottides"];
    const weekdayNames = ["Décadi","Primidi","Duodi","Tridi","Quartidi","Quintidi","Sextidi","Septidi","Octidi","Nonidi"];

    const weekday = (standardDay % 10);*/
    
    document.getElementById("conv").innerHTML=standardDay + "/" + standardMonth + "/" + standardYear;
};