import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try{
            
            //url and params
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });

            //set to state
            setResults(response.data.businesses);

            //get rid that error message
            setErrorMessage("");

        } catch(err){
            setErrorMessage("Something went wrong");
        }
        
    }

    //untuk jalanin initial function
    useEffect(() =>{
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};