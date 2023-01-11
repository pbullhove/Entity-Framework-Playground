import http from './httpService'; 
import serviceConfig from './serviceConfig.json'; 

export function getGenres() {
    return http.get(serviceConfig.apiEndpoint)
}