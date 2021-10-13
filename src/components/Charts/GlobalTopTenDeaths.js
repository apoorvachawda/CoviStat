import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";


const GlobalTopTenDeaths = ({countries}) => {

    const [topTenCountries, setTopTenCountries] = useState([]);
    // const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);

    
    useEffect(() => {
        countries.sort(function (item1, item2) {
            // return (item2.TotalConfirmed - item1.TotalConfirmed);
            return (item2.TotalDeaths - item1.TotalDeaths);
        });

        const tempCountries = countries.slice(0, 10);

        setTopTenCountries(tempCountries.map(country => {
            return country.Country;
        }));

        // setConfirmed(countries.map(country => {
        //     return country.TotalConfirmed;
        // }));

        setDeaths(tempCountries.map(country => {
            return country.TotalDeaths;
        }));
    }, [countries]); //labels and corr. values have been set

    const state = {
        labels: topTenCountries,
        datasets: [
            {
                label: 'Reported Deaths',
                backgroundColor: ['#ef6351', '#f38375', '#F7A399', '#FBC3BC', '#FFE3E0', '#FFE6E3', '#FFE8E6', '#FFEAE8', '#FFECEA','#FFEEEC'],
                data: deaths
            }
        ]
    }

    return ( 
        <div>
            <Bar 
                data = {state}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Countries with maximum death toll',
                            font: {
                                size: 20
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }}
                height= {400}
                width = {600}
            />
        </div>
     );
}
 
export default GlobalTopTenDeaths;