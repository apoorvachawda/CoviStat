import Header from "./Header";
import GlobalSection from "../Global/GlobalSection";
import GlobalDailyReport from "../Charts/GlobalDailyReport";
import GlobalPiChart from "../Charts/GlobalPiChart";
import GlobalTopTenDeaths from "../Charts/GlobalTopTenDeaths";
import GlobalTopTenConfirmed from "../Charts/GlobalTopTenConfirmed";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [newConfirmed, setNewConfirmed] = useState(0);
    const [newRecovered, setNewRecovered] = useState(0);
    const [newDeaths, setNewDeaths] = useState(0);
    const [lastUpdate, setLastUpdate] = useState('');
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://api.covid19api.com/summary';
            const response = await axios.get(url);
            const tempCountries = response.data.Countries;
            setCountries(tempCountries);
            setConfirmed(response.data.Global.TotalConfirmed);
            setRecovered(response.data.Global.TotalRecovered);
            setDeaths(response.data.Global.TotalDeaths);
            setNewConfirmed(response.data.Global.NewConfirmed);
            setNewRecovered(response.data.Global.NewRecovered);
            setNewDeaths(response.data.Global.NewDeaths);
            setLastUpdate(response.data.Global.Date);
        }

        fetchData();
    }, []);


    return ( 
        <div>
            <Header />
            <GlobalSection confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} />
            <div className="global-chart-grid">
                <GlobalDailyReport confirmed = {newConfirmed} recovered = {newRecovered} deaths = {newDeaths} />
                <GlobalPiChart deaths={deaths} recovered={recovered} confirmed={confirmed} />
                <GlobalTopTenDeaths countries={countries} />
                <GlobalTopTenConfirmed countries = {countries} />
            </div>
            <Link to="/countries"><button className="viewCountries">View Countries</button></Link>
        </div>
     );
}
 
export default Home;