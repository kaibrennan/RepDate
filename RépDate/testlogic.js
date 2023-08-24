function main() {
    getParisObsTime()
}

function getParisObsTime() {
    const POlongitude = 2.337229; //this is 2.337229 deg E to be exact. PO Stands for Paris Observatory
    time_diff = getTimeDiffsec(POlongitude);
    UT1 = new Date();
    console.log(time_diff)
    console.log(UT1)
}

function getTimeDiffSec(longitude){
    const formula = (1/15);
    difference = longitude * formula;
    return difference;
};