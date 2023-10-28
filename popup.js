setInterval(
    function main(){
        getDecimalTime();
        getCurrentDate();
        getSymb();
        getPic();
        //getParisObsTime();
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

function dateCalculatorGR(day, month, year){
    const now = new Date(year, month, day, 0, 0, 0, 1);         // Make inputs a date value; this must have a nonzero time so that the subtract does not fail.
    const leap = new Date(1794, 8, 22);                         // Day of the first leap year to ensure proper leap year occurrences.

    const solarStart = new Date(2000,0,1);                                                                                                  // Start of calculation for solar year. Creates the date which the Julian centuries are determined from.
    const solarDiff = now - solarStart;                                                                                                     // Find diff. between date for calculation and above in order to determine no. of Julian centuries.
    const solarDiffSec = solarDiff/1000;                                                                                                    // Convert diff. from msec to sec
    const jCent = solarDiffSec/(86400 * 36525);                                                                                             // Multiply to find Julian centuries since 1 Jan 2000.
    const solarYearDays = 365.2421896698 - 0.00000615359 * jCent - 0.000000000729*jCent*jCent + 0.000000000264*jCent*jCent*jCent;           // McCarthy & Seidelmann (2018, p. 267) calculation for tropical year (solar year)
    const solarYear = solarYearDays * 86400000;                                                                                             // Convert solar year value from days to msec for calculations

    const diffTime = now - leap;                                // Find difference in milliseconds between now and first leap.
    const cYear = Math.floor(diffTime / solarYear);             // Divide to find the year-3, -3 because the calculation started from the first leap year, not the first year (22 Sep. 1792).
    const cMsec = diffTime - (cYear * solarYear);               // Subtract to find how many msec passed in the current year.
    const cDays = Math.ceil(cMsec / (24 * 60 * 60 * 1000));     // Divide to convert msec into days passed in the current year.
    const cMonth = Math.floor(cDays / 30);                      // Divide by the number of days/month to find current month.
    const cDay = cDays - (cMonth * 30);                         // Subtract to find how many days passed in the current month.

    const standardDay = cDay;                                   // Standardizes all values so they appear as one would see them on a calendar
    const standardMonth = cMonth+1;                             // "
    const standardYear = cYear+3;                               // "

    return [standardDay, standardMonth, standardYear];          // Returns the standardized date values as an array.
};

/*function dateCalculatorRG(day, month, year){
    const solarYear = 31556925250.7328;                         // This needs to be changed to the above
    const leap = new Date(1794, 8, 22);
    
    const cYear = year - 3;
    const cMonth = month - 1;
    const cDay = day;
    const cDays = cDay + (cMonth * 30);                         // Give the number of days passed into current year
    const cMsecYear = cYear * solarYear;
    const cMsecDays = cDays * (24 * 60 * 60 * 1000);                // Give the number of msec for days into current year
    const netMsec = cMsecDays + cMsecYear;
    const output = leap.getTime + netMsec;
    const result = new Date(output);

    const standardDay = result.getDate();                                    // Splits up today into day, month, and year in seperate vars so they can be put into the date calculator.
    const standardMonth = result.getMonth();                                 // "
    const standardYear = result.getFullYear();

    return [standardDay, standardMonth, standardYear];          // Returns the standardized date values as an array.
};*/

function getCurrentDate(){
    const monthNames = ["Vendémiaire","Brumaire","Frimaire","Nivôse","Pluviôse","Ventôse","Germinal","Floréal","Prairial","Messidor","Thermidor","Fructidor","Sansculottides"];
    const weekdayNames = ["Décadi","Primidi","Duodi","Tridi","Quartidi","Quintidi","Sextidi","Septidi","Octidi","Nonidi"];

    const today = new Date();                                       // Makes today a date value.
    const day = today.getDate();                                    // Splits up today into day, month, and year in seperate vars so they can be put into the date calculator.
    const month = today.getMonth();                                 // "
    const year = today.getFullYear();                               // "

    const resultArray = dateCalculatorGR(day, month, year);           // Runs the date calculator for the entered date.
    const standardDay = resultArray[0];                             // Unpacks the output values for day, month, and year.
    const standardMonth = resultArray[1];                           // "
    const standardYear = resultArray[2];                            // "

    const weekday = (standardDay % 10);
    
    //document.getElementById("repdate").innerHTML=weekdayNames[weekday] + ", " + standardDay + " " + monthNames[standardMonth-1] + ", an " + standardYear;
    document.getElementById("repdate").innerHTML=data
}

function getSymb(){
    const ruralCalendar = [
        ["Raisin","Safran","Châtaigne","Colchique","Cheval","Balsamine","Carotte","Amarante","Panais","Cuve","Pomme de terre","Immortelle","Potiron","Réséda","Âne","Belle-de-nuit","Citrouille","Sarrasin","Tournesol","Pressoir","Chanvre","Pêche","Navet","Amaryllis","Bœuf","Aubergine","Piment","Tomate","Orge","Tonneau","Pomme","Céleri","Poire","Betterave","Oie","Héliotrope","Figue","Scorsonère","Alisier","Charrue","Salsifis","Mâcre","Topinambour","Endive","Dindon","Chervis","Cresson","Dentelaire","Grenade","Herse","Bacchante","Azerole","Garance","Orange","Faisan","Pistache","Macjonc","Coing","Cormier","Rouleau","Raiponce","Turneps","Chicorée","Nèfle","Cochon","Mâche","Chou-fleur","Miel","Genièvre","Pioche","Cire","Raifort","Cèdre","Sapin","Chevreuil","Ajonc","Cyprès","Lierre","Sabine","Hoyau","Érable sucré","Bruyère","Roseau","Oseille","Grillon","Pignon","Liège","Truffe","Olive","Pelle"],
        ["Tourbe","Houille","Bitume","Soufre","Chien","Lave","Terre végétale","Fumier","Salpêtre","Fléau","Granit","Argile","Ardoise","Grès","Lapin","Silex","Marne","Pierre à chaux","Marbre","Van","Pierre à plâtre","Sel","Fer","Cuivre","Chat","Étain","Plomb","Zinc","Mercure","Crible","Lauréole","Mousse","Fragon","Perce neige","Taureau","Laurier thym","Amadouvier","Mézéréon","Peuplier","Cognée","Ellébore","Brocoli","Laurier","Avelinier","Vache","Buis","Lichen","If","Pulmonaire","Serpette","Thlaspi","Thymèle","Chiendent","Trainasse","Lièvre","Guède","Noisetier","Cyclamen","Chélidoine","Traîneau","Tussilage","Cornouiller","Violier","Troène","Bouc","Asaret","Alaterne","Violette","Marceau","Bêche","Narcisse","Orme","Fumeterre","Vélar","Chèvre","Épinard","Doronic","Mouron","Cerfeuil","Cordeau","Mandragore","Persil","Cochléaria","Pâquerette","Thon","Pissenlit","Sylvie","Capillaire","Frêne","Plantoir"],
        ["Primevère","Platane","Asperge","Tulipe","Poule","Bette","Bouleau","Jonquille","Aulne","Couvoir","Pervenche","Charme","Morille","Hêtre","Abeille","Laitue","Mélèze","Ciguë","Radis","Ruche","Gainier","Romaine","Marronnier","Roquette","Pigeon","Lilas","Anémone","Pensée","Myrtille","Greffoir","Rose","Chêne","Fougère","Aubépine","Rossignol","Ancolie","Muguet","Champignon","Hyacinthe","Râteau","Rhubarbe","Sainfoin","Bâton-d or","Chamérisier","Ver à soie","Consoude","Pimprenelle","Corbeille d'or","Arroche","Sarcloir","Statice","Fritillaire","Bourrache","Valériane","Carpe","Fusain","Civette","Buglosse","Sénevé","Houlette","Luzerne","Hémérocalle","Trèfle","Angélique","Canard","Mélisse","Fromental","Martagon","Serpolet","Faux","Fraise","Bétoine","Pois","Acacia","Caille","Œillet","Sureau","Pavot","Tilleul","Fourche","Barbeau","Camomille","Chèvrefeuille","Caille-lait","Tanche","Jasmin","Verveine","Thym","Pivoine","Chariot"],
        ["Seigle","Avoine","Oignon","Véronique","Mulet","Romarin","Concombre","Échalote","Absinthe","Faucille","Coriandre","Artichaut","Giroflée","Lavande","Chamois","Tabac","Groseille","Gesse","Cerise","Parc","Menthe","Cumin","Haricot","Orcanète","Pintade","Sauge","Ail","Vesce","Blé","Chalemie","Épeautre","Bouillon-blanc","Melon","Ivraie","Bélier","Prêle","Armoise","Carthame","Mûre","Arrosoir","Panic","Salicorne","Abricot","Basilic","Brebis","Guimauve","Lin","Amande","Gentiane","Écluse","Carline","Câprier","Lentille","Aunée","Loutre","Myrte","Colza","Lupin","Coton","Moulin","Prune","Millet","Lycoperdon","Escourgeon","Saumon","Tubéreuse","Sucrion","Apocyn","Réglisse","Échelle","Pastèque","Fenouil","Épine-vinette","Noix","Truite","Citron","Cardère","Nerprun","Tagette","Hotte","Églantier","Noisette","Houblon","Sorgho","Écrevisse","Bigarade","Verge d'or","Maïs","Marron","Panier"],
        ["La Fête de la Vertu","La Fête du Génie","La Fête du Travail","La Fête de l'Opinion","La Fête des Récompenses","La Fête de la Révolution"]
    ];

    const today = new Date();                                       // Makes today a date value.
    const day = today.getDate();                                    // Splits up today into day, month, and year in seperate vars so they can be put into the date calculator.
    const month = today.getMonth();                                 // "
    const year = today.getFullYear();                               // "

    const resultArray = dateCalculatorGR(day, month, year);           // Runs the date calculator for today's date.
    const standardDay = resultArray[0];                             // Unpacks the output values for day and month.
    const standardMonth = resultArray[1];                           // "
    
    const symbol = ruralCalendar[Math.floor((standardMonth-1)/3)][(standardDay-1)+(((standardMonth-1) % 3) * 30)];
    
    document.getElementById("symbol").innerHTML=symbol;
}

function getPic(){
    const imgNames = ['<img src="images/months/Vendémiaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Brumaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Frimaire.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Nivôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Pluviôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Ventôse.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Germinal.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Floréal.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Prairial.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Messidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Thermidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Fructidor.jpg" alt="Image du mois." style="height:200px;">','<img src="images/months/Sansculottides.jpg" alt="Image du mois." style="height:200px;">'];
    
    const today = new Date();                                       // Makes today a date value.
    const day = today.getDate();                                    // Splits up today into day, month, and year in seperate vars so they can be put into the date calculator.
    const month = today.getMonth();                                 // "
    const year = today.getFullYear();                               // "
    
    const resultArray = dateCalculatorGR(day, month, year);           // Runs the date calculator for today's date.
    const standardMonth = resultArray[1];                           // Unpacks the output value for month.

    document.getElementById("monthimage").innerHTML=imgNames[standardMonth-1];
}

function convertToRepublican(){
    const day = parseInt(document.getElementById('day').value);         // Takes in the input values by pulling from html fields.
    const month = (parseInt(document.getElementById('month').value))-1; // "
    const year = parseInt(document.getElementById('year').value);       // "

    const resultArray = dateCalculatorGR(day, month, year);               // Runs the date calculator for the entered date.
    const standardDay = resultArray[0];                                 // Unpacks the output values for day, month, and year.
    const standardMonth = resultArray[1];                               // "
    const standardYear = resultArray[2];                                // "

    document.getElementById("conv").innerHTML=standardDay + "/" + standardMonth + "/" + standardYear;
};

function convertToGregorian(){
    /*const day = parseInt(document.getElementById('day').value);         // Takes in the input values by pulling from html fields.
    const month = (parseInt(document.getElementById('month').value))-1; // "
    const year = parseInt(document.getElementById('year').value);       // "

    const resultArray = dateCalculatorRG(day, month, year);               // Runs the date calculator for the entered date.
    const standardDay = resultArray[0];                                 // Unpacks the output values for day, month, and year.
    const standardMonth = resultArray[1];                               // "
    const standardYear = resultArray[2];                                // "
*/
    document.getElementById("conv").innerHTML="Désolé, travail en cours.";
};

/*starting the logic behind Time at the Paris observatory.
function getParisObsTime() {
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