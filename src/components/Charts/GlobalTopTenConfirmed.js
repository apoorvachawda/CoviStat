import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";


const GlobalTopTenDeaths = ({ countries }) => {

    const [topTenCountries, setTopTenCountries] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    // const [deaths, setDeaths] = useState([]);


    useEffect(() => {
        countries.sort(function (item1, item2) {
            return (item2.TotalConfirmed - item1.TotalConfirmed);
            // return (item2.TotalDeaths - item1.TotalDeaths);
        });

        const tempCountries = countries.slice(0, 10);

        setTopTenCountries(tempCountries.map(country => {
            return country.Country;
        }));

        setConfirmed(tempCountries.map(country => {
            return country.TotalConfirmed;
        }));

        // setDeaths(countries.map(country => {
        //     return country.TotalDeaths;
        // }));
    }, [countries]); //labels and corr. values have been set

    const state = {
        labels: topTenCountries,
        datasets: [
            {
                label: 'Confirmed Cases',
                backgroundColor: ['#3B8CA3', '#419AB3', '#48A9C5', '#61B7CF', '#7BC5D9', '#94D4E2', '#AEE2EC', '#C7F0F6', '#CCF1F7', '#D1F2F8'],
                data: confirmed
            }
        ]
    }

    return (
        <div>
            <Bar
                data={state}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Countries with maximum infected cases',
                            font: {
                                size: 20
                            }
                        },

                    },
                    responsive: true,
                    maintainAspectRatio: false
                }}
                height={400}
                width={600}
            />
        </div>
    );
}

export default GlobalTopTenDeaths;