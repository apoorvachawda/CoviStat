import { useEffect, useState } from "react";
import axios from 'axios';
import CountryProfile from "./CountryProfile";
import CountrySearch from "./CountrySearch";

const CountryGrid = () => {

    const [countryDetails, setCountryDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [isQuery, setIsQuery] = useState(false);
    
    //fetch country details on first render
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://api.covid19api.com/summary';
            const countries = await axios.get(url);
            setCountryDetails(countries.data.Countries);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const handleQuery = (q) => {
        if(q)
        {
            // setIsQuery(true);
            const country = countryDetails.filter(country => {
                return (country.Country.toLowerCase().includes(q.toLowerCase()));
            });
            setCountryDetails(country);
        }
    }


    return ( 
        <div>
            <CountrySearch getQuery = {(q) => handleQuery(q)} />
            {isLoading ? <h2>Loading...</h2> : <div className="country-gallery">
            {
                countryDetails.map((item) =>
                (
                    <CountryProfile name={item.Country} confirmed={item.TotalConfirmed} recovered={item.TotalRecovered} deaths={item.TotalDeaths} lastConfirmed={item.Date} slug = {item.Slug}/>
                )
                )
            }
            </div>
            }
        </div>
        
    
     );
}
 
export default CountryGrid;