
import { BASE_URL, API_KEY } from "./apiConfig";

function retrieveFighterJSONACB(resp) {
    if (!resp.ok) {
        throw new Error("Invalid parameter");
    }
    return resp.json();
}
function getFighter(fighter) {
    console.log("searchedWorked4:"); ///////////////////
    console.log(fighter.query);
    const requestURL = BASE_URL + "api/mma/search/" + encodeURIComponent(fighter.query);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'mmaapi.p.rapidapi.com'
        }
    };
    return fetch(requestURL, options)
        .then(retrieveFighterJSONACB);
}
function getFighterStats(id) {
    const requestURL = BASE_URL + `api/mma/team/${id}/career-statistics`;
    //const requestURL = BASE_URL + `api/mma/team/465171/career-statistics`;

    console.log("searchedWorked99:"); ///////////////////
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'mmaapi.p.rapidapi.com'
        }
    };

    return fetch(requestURL, options)
        .then(retrieveFighterJSONACB)
        .catch(error => console.log("Error fetching fighter details: ", error));
}

function getFighterDetails(id) {
    return getFighter([id]).then(arrayToDataACB);
}

function getStats(id){
    return getFighterStats([id]).then(arrayToDataACB);
}

function arrayToDataACB(resp) {
    return resp[0];
}
export {getFighter, getFighterDetails, getFighterStats, getStats}






/* test */