import { startDB } from './mongoDB.js';

class Loaders {
    start(){
        startDB()
    }
}

 export default new Loaders()