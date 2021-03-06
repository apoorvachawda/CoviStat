import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import CountryPie from "../Charts/CountryPie";
import CountryPastWeek from "../Charts/CountryPastWeek";
import StatCard from "../UI/StatCard";

const CountryPage = () => {

    const { country } = useParams();

    //for pie chart
    const [sumConfirmed, setSumConfirmed] = useState(0);
    const [sumRecovered, setSumRecovered] = useState(0);
    const [sumDeaths, setSumDeaths] = useState(0);

    //for line graph
    const [lastWeek, setLastWeek] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lastWeekConfirmed, setLastWeekConfirmed] = useState([]);
    const [lastWeekRecovered, setLastWeekRecovered] = useState([]);
    const [lastWeekDeaths, setLastWeekDeaths] = useState([]);
    const [lastWeekDates, setLastWeekDates] = useState([]);
    const days = 90;

    


    useEffect(() => {
        const getCountryData = async() => {
            const url = `https://api.covid19api.com/country/${country}`;
            let response = await axios.get(url);
            setLastWeek(response.data.slice(Math.max(response.data.length - days, 0))); //past week info of that country is stored in last week
            setIsLoading(false);
        }
        getCountryData();

    }, [country]);

    useEffect(() => {

        //for line graph of last month's activities
        const setValuesLineGraph = () => {
            let confirmed = [], recovered = [], deaths = [], dates = [];
            if (!isLoading) {
                for (let i = 0; i < days; i++) {
                    confirmed[i] = lastWeek[i].Confirmed;
                }
                setLastWeekConfirmed(confirmed);

                for (let i = 0; i < days; i++) {
                    recovered[i] = lastWeek[i].Recovered;
                }
                setLastWeekRecovered(recovered);

                for (let i = 0; i < days; i++) {
                    deaths[i] = lastWeek[i].Deaths;
                }
                setLastWeekDeaths(deaths);

                for (let i = 0; i < days; i++) {
                    let currDate = new Date(lastWeek[i].Date);
                    let month = currDate.toLocaleString('default', { month: 'long' });
                    dates.push(`${currDate.getDate()} ${month}`);
                }
                setLastWeekDates(dates);
            }

        }

        //for Pie chart showing infected, deaths and recovered
        const setValuesPieChart = async () => {
            const url = `https://api.covid19api.com/summary`;
            const response = await axios.get(url);
            const values = response.data.Countries;
            const targetCountry = values.find(item => {
                return item.Slug === country;
            });
            setSumConfirmed(targetCountry.TotalConfirmed);
            setSumRecovered(targetCountry.TotalRecovered);
            setSumDeaths(targetCountry.TotalDeaths);
        }

        setValuesLineGraph();
        setValuesPieChart();


    }, [lastWeek, isLoading, country]);
    

    

    return ( 
        
            <>
                <h1 className='country-title'>{country}</h1>
                <div className = "statcard-gallery" >
                    <StatCard value={sumConfirmed} title="Confirmed" color="CornflowerBlue" />
                    <StatCard value={sumRecovered} title="Recovered" color="Limegreen" />
                    <StatCard value={sumDeaths} title="Deaths" color="Tomato" />
                </div>
                <div className = "global-chart-grid">
                    <CountryPastWeek lastWeekDates={lastWeekDates} lastWeekConfirmed={lastWeekConfirmed} lastWeekRecovered={lastWeekRecovered} lastWeekDeaths={lastWeekDeaths} />
                    <CountryPie confirmed={sumConfirmed} recovered={sumRecovered} deaths={sumDeaths} />
                </div>
                <div className = "button-holder">
                <Link to="/countries"><button className="viewCountries">Back to countries</button></Link>
                </div>
            </>
     );
}
 
export default CountryPage;
