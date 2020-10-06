import TokenService from './token-service';
import config from '../config';

const LanguageApiService = {
    async getLanguage() {
        const res = await fetch(`${config.API_ENDPOINT}/language`, {
            headers: {
                "Authorization": `Bearer ${TokenService.getAuthToken()}`
            }
        })
        if (!res.ok) {
            res.json().then(e => Promise.reject(e))
        }
        // console.log(res.json(), "Line 14")
        return res.json();
// getAuthToken to confirm authentication and parseJwt for user.id ?        
    },

 async getWords() {
    const res = await fetch(`${config.API_ENDPOINT}/language/head`, {
        headers: {
            "Authorization": `Bearer ${TokenService.getAuthToken()}`
        }
    })
    if (!res.ok) {
        res.json().then(e => Promise.reject(e))
    }
    console.log(res.json(), "words")
    return res.json();

 }
}

export default LanguageApiService;