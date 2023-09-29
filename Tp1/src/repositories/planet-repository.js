import planetModel from '../models/observation-model.js';
import Observation from '../models/observation-model.js';
import dayjs from 'dayjs';

const ZERO_KELVIN = -273.15;

class PlanetRepository {

    retrieveAll(){
        return Planet.find();
    }

    retrieveByCriteria(criteria){

        // Skadex et > 240 et  < 500
        const testCriteria = {
            discoveredBy: "Skadex",
            temperature: {$gt: 240},
            'position.y': {$lt: 500}
        };
        
        // Skadex OU temperature > 240
        const testCriteria2 = {
            $or: [{discoveredBy: "Skadex"},
                {temperature: {$gt: 240}}]
        };

        return Observation.find(criteria);
    }

    retrieveOne(idPlanet){
        return Observation.findById(idPlanet);
    }

    create(planet){
        return Observation.create(planet);

    }

    transform(planet, transformOptions = {}){

        //2 types de transformations
        // Les optionnels
        if(transformOptions){
            if(transformOptions.unit === 'c'){
                planet.temperature = planet.temperature + ZERO_KELVIN;
            }
        }
        // Les non-optionnels (obliatoires)
        planet.discoveryDate = dayjs(planet.discoveryDate).format('YYYY-MM-DD HH:mm');

        // Pour le tp
        planet.nouvellePropriete = 0;

        // pour en supprimer une
        delete planet.nouvellePropriete;
        delete planet.__v;

        return planet
    }
}

export default new PlanetRepository();