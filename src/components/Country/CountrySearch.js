import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CountrySearch = ({getQuery}) => {

    const [countryName, setCountryName] = useState('');

    const handleChange = (e) => {
        setCountryName(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault(); 
        getQuery(countryName);
    }

    return ( 
        <form class = "countrySearch">
            <input type = "text" placeholder = "Enter country name" value = {countryName} onChange = {handleChange}></input>
            <button type="submit" onClick={handleClick} className="search-btn"><span><FontAwesomeIcon icon={faSearch} /></span></button>
        </form>
     );
}
 
export default CountrySearch;