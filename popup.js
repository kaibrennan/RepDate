setInterval(
    function main(){
        getDecimalTime();
        getCurrentDate();
        getSymb();
        getPic();
        //getParisObsTime();
    },864);

var equinoxList = ['1792, 9, 22',  '1793, 9, 22',  '1794, 9, 22',  '1795, 9, 23',  '1796, 9, 22',  '1797, 9, 22',  '1798, 9, 22',  '1799, 9, 23',  '1800, 9, 23',  '1801, 9, 23',  '1802, 9, 23',  '1803, 9, 24',  '1804, 9, 23',  '1805, 9, 23',  '1806, 9, 23',  '1807, 9, 24',  '1808, 9, 23',  '1809, 9, 23',  '1810, 9, 23',  '1811, 9, 23',  '1812, 9, 23',  '1813, 9, 23',  '1814, 9, 23',  '1815, 9, 23',  '1816, 9, 23',  '1817, 9, 23',  '1818, 9, 23',  '1819, 9, 23',  '1820, 9, 23',  '1821, 9, 23',  '1822, 9, 23',  '1823, 9, 23',  '1824, 9, 23',  '1825, 9, 23',  '1826, 9, 23',  '1827, 9, 23',  '1828, 9, 23',  '1829, 9, 23',  '1830, 9, 23',  '1831, 9, 23',  '1832, 9, 23',  '1833, 9, 23',  '1834, 9, 23',  '1835, 9, 23',  '1836, 9, 23',  '1837, 9, 23',  '1838, 9, 23',  '1839, 9, 23',  '1840, 9, 23',  '1841, 9, 23',  '1842, 9, 23',  '1843, 9, 23',  '1844, 9, 22',  '1845, 9, 23',  '1846, 9, 23',  '1847, 9, 23',  '1848, 9, 22',  '1849, 9, 23',  '1850, 9, 23',  '1851, 9, 23',  '1852, 9, 22',  '1853, 9, 23',  '1854, 9, 23',  '1855, 9, 23',  '1856, 9, 22',  '1857, 9, 23',  '1858, 9, 23',  '1859, 9, 23',  '1860, 9, 22',  '1861, 9, 23',  '1862, 9, 23',  '1863, 9, 23',  '1864, 9, 22',  '1865, 9, 23',  '1866, 9, 23',  '1867, 9, 23',  '1868, 9, 22',  '1869, 9, 23',  '1870, 9, 23',  '1871, 9, 23',  '1872, 9, 22',  '1873, 9, 22',  '1874, 9, 23',  '1875, 9, 23',  '1876, 9, 22',  '1877, 9, 22',  '1878, 9, 23',  '1879, 9, 23',  '1880, 9, 22',  '1881, 9, 22',  '1882, 9, 23',  '1883, 9, 23',  '1884, 9, 22',  '1885, 9, 22',  '1886, 9, 23',  '1887, 9, 23',  '1888, 9, 22',  '1889, 9, 22',  '1890, 9, 23',  '1891, 9, 23',  '1892, 9, 22',  '1893, 9, 22',  '1894, 9, 23',  '1895, 9, 23',  '1896, 9, 22',  '1897, 9, 22',  '1898, 9, 23',  '1899, 9, 23',  '1900, 9, 23',  '1901, 9, 23',  '1902, 9, 24',  '1903, 9, 24',  '1904, 9, 23',  '1905, 9, 23',  '1906, 9, 23',  '1907, 9, 24',  '1908, 9, 23',  '1909, 9, 23',  '1910, 9, 23',  '1911, 9, 24',  '1912, 9, 23',  '1913, 9, 23',  '1914, 9, 23',  '1915, 9, 24',  '1916, 9, 23',  '1917, 9, 23',  '1918, 9, 23',  '1919, 9, 24',  '1920, 9, 23',  '1921, 9, 23',  '1922, 9, 23',  '1923, 9, 24',  '1924, 9, 23',  '1925, 9, 23',  '1926, 9, 23',  '1927, 9, 24',  '1928, 9, 23',  '1929, 9, 23',  '1930, 9, 23',  '1931, 9, 24',  '1932, 9, 23',  '1933, 9, 23',  '1934, 9, 23',  '1935, 9, 24',  '1936, 9, 23',  '1937, 9, 23',  '1938, 9, 23',  '1939, 9, 23',  '1940, 9, 23',  '1941, 9, 23',  '1942, 9, 23',  '1943, 9, 24',  '1944, 9, 23',  '1945, 9, 23',  '1946, 9, 23',  '1947, 9, 23',  '1948, 9, 23',  '1949, 9, 23',  '1950, 9, 23',  '1951, 9, 23',  '1952, 9, 23',  '1953, 9, 23',  '1954, 9, 23',  '1955, 9, 23',  '1956, 9, 23',  '1957, 9, 23',  '1958, 9, 23',  '1959, 9, 23',  '1960, 9, 23',  '1961, 9, 23',  '1962, 9, 23',  '1963, 9, 23',  '1964, 9, 23',  '1965, 9, 23',  '1966, 9, 23',  '1967, 9, 23',  '1968, 9, 23',  '1969, 9, 23',  '1970, 9, 23',  '1971, 9, 23',  '1972, 9, 22',  '1973, 9, 23',  '1974, 9, 23',  '1975, 9, 23',  '1976, 9, 22',  '1977, 9, 23',  '1978, 9, 23',  '1979, 9, 23',  '1980, 9, 22',  '1981, 9, 23',  '1982, 9, 23',  '1983, 9, 23',  '1984, 9, 22',  '1985, 9, 23',  '1986, 9, 23',  '1987, 9, 23',  '1988, 9, 22',  '1989, 9, 23',  '1990, 9, 23',  '1991, 9, 23',  '1992, 9, 22',  '1993, 9, 23',  '1994, 9, 23',  '1995, 9, 23',  '1996, 9, 22',  '1997, 9, 23',  '1998, 9, 23',  '1999, 9, 23',  '2000, 9, 22',  '2001, 9, 23',  '2002, 9, 23',  '2003, 9, 23',  '2004, 9, 22',  '2005, 9, 23',  '2006, 9, 23',  '2007, 9, 23',  '2008, 9, 22',  '2009, 9, 22',  '2010, 9, 23',  '2011, 9, 23',  '2012, 9, 22',  '2013, 9, 22',  '2014, 9, 23',  '2015, 9, 23',  '2016, 9, 22',  '2017, 9, 22',  '2018, 9, 23',  '2019, 9, 23',  '2020, 9, 22',  '2021, 9, 22',  '2022, 9, 23',  '2023, 9, 23',  '2024, 9, 22',  '2025, 9, 22',  '2026, 9, 23',  '2027, 9, 23',  '2028, 9, 22',  '2029, 9, 22',  '2030, 9, 23',  '2031, 9, 23',  '2032, 9, 22',  '2033, 9, 22',  '2034, 9, 23',  '2035, 9, 23',  '2036, 9, 22',  '2037, 9, 22',  '2038, 9, 23',  '2039, 9, 23',  '2040, 9, 22',  '2041, 9, 22',  '2042, 9, 22',  '2043, 9, 23',  '2044, 9, 22',  '2045, 9, 22',  '2046, 9, 22',  '2047, 9, 23',  '2048, 9, 22',  '2049, 9, 22',  '2050, 9, 22',  '2051, 9, 23',  '2052, 9, 22',  '2053, 9, 22',  '2054, 9, 22',  '2055, 9, 23',  '2056, 9, 22',  '2057, 9, 22',  '2058, 9, 22',  '2059, 9, 23',  '2060, 9, 22',  '2061, 9, 22',  '2062, 9, 22',  '2063, 9, 23',  '2064, 9, 22',  '2065, 9, 22',  '2066, 9, 22',  '2067, 9, 23',  '2068, 9, 22',  '2069, 9, 22',  '2070, 9, 22',  '2071, 9, 22',  '2072, 9, 22',  '2073, 9, 22',  '2074, 9, 22',  '2075, 9, 22',  '2076, 9, 22',  '2077, 9, 22',  '2078, 9, 22',  '2079, 9, 22',  '2080, 9, 22',  '2081, 9, 22',  '2082, 9, 22',  '2083, 9, 22',  '2084, 9, 22',  '2085, 9, 22',  '2086, 9, 22',  '2087, 9, 22',  '2088, 9, 22',  '2089, 9, 22',  '2090, 9, 22',  '2091, 9, 22',  '2092, 9, 22',  '2093, 9, 22',  '2094, 9, 22',  '2095, 9, 22',  '2096, 9, 22',  '2097, 9, 22',  '2098, 9, 22',  '2099, 9, 22',  '2100, 9, 23',  '2101, 9, 23',  '2102, 9, 23',  '2103, 9, 23',  '2104, 9, 22',  '2105, 9, 23',  '2106, 9, 23',  '2107, 9, 23',  '2108, 9, 22',  '2109, 9, 23',  '2110, 9, 23',  '2111, 9, 23',  '2112, 9, 22',  '2113, 9, 23',  '2114, 9, 23',  '2115, 9, 23',  '2116, 9, 22',  '2117, 9, 23',  '2118, 9, 23',  '2119, 9, 23',  '2120, 9, 22',  '2121, 9, 23',  '2122, 9, 23',  '2123, 9, 23',  '2124, 9, 22',  '2125, 9, 23',  '2126, 9, 23',  '2127, 9, 23',  '2128, 9, 22',  '2129, 9, 23',  '2130, 9, 23',  '2131, 9, 23',  '2132, 9, 22',  '2133, 9, 22',  '2134, 9, 23',  '2135, 9, 23',  '2136, 9, 22',  '2137, 9, 22',  '2138, 9, 23',  '2139, 9, 23',  '2140, 9, 22',  '2141, 9, 22',  '2142, 9, 23',  '2143, 9, 23',  '2144, 9, 22',  '2145, 9, 22',  '2146, 9, 23',  '2147, 9, 23',  '2148, 9, 22',  '2149, 9, 22'];

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
    const input = new Date(year, month, day); // Make inputs a date value.
    const start = new Date(1792, 8, 22);      // Day of the first  year to ensure correct calculations.

    if(input < start){
        return [-1, -1, -1]; //this is invalid input and should not have been entered. This error will be addressed once this method proves successful for current date.
    }

    //the following loop's goal is to find the year one is currently in.
    let cYear = -1;
    let dayZero = new Date(null, null, null);
    for (let i = 1; i <= (equinoxList.length + 1); i++){
        let wipYear = new Date (equinoxList[i]);
        if(input <= wipYear){
            cYear = i;
            dayZero = new Date (equinoxList[i-1]);
            break;
        }
    }

    const cDays = Math.ceil((input - dayZero)/(24 * 60 * 60 * 1000))+1;
    const cMonth = Math.ceil(cDays / 30);
    const cDay = Math.ceil(cDays % 30);

    const standardDay = cDay;     // Standardizes all values so they appear as one would see them on a calendar
    const standardMonth = cMonth; // "
    const standardYear = cYear;   // "

    return [standardDay, standardMonth, standardYear]; // Returns the standardized date values as an array.
};

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
    
    document.getElementById("repdate").innerHTML=weekdayNames[weekday] + ", " + standardDay + " " + monthNames[standardMonth-1] + ", an " + standardYear;
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