import { graphClient, GraphClient } from '../utils/graphClient';
import { myFirstQuery } from  '../../myFirstQuery'

export async function fetchCountries() {
    try {
        const data = await graphClient.request(myFirstQuery);
        return data.countries || [];
        }
        catch {
            return [];
        }
}