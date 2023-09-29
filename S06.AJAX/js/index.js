const SERVICE_URL = 'https://api.andromia.science/planets';

$(document).ready(() => {
    console.log('Jquery fonctionne');
    retrieveAllPlanet();
});

async function retrieveAllPlanet(){
    try{
        const response = await axios.get(SERVICE_URL);
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}