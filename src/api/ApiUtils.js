import axios from 'axios';
import { parseData } from './ApiNormalizers';


/**
 * Connect to Category API and fetch all the categories 
 * Logs the error if happens
 */
export const getDataFromApi = async () => {
    // Get All Gategories
    return await axios.get('https://capi.stage.9c9media.com/destinations/tsn_ios/platforms/iPad/contents/69585').then(resp => {
        return parseData(resp.data);
    }).catch(function (error) {
        // handle error
        console.log('API: Error occured in fetching data: ', error);
    });
}
