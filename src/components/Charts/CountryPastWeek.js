import { Line } from "react-chartjs-2";

const CountryPastWeek = ({ lastWeekDates, lastWeekConfirmed, lastWeekRecovered, lastWeekDeaths }) => {
    const data = {
        labels: lastWeekDates,
        datasets: [
            {
                label: "Confirmed",
                data: lastWeekConfirmed,
                borderColor: "cornflowerblue",
                pointBorderWidth: "0"
            },
            {
                label: "Recovered",
                data: lastWeekRecovered,
                borderColor: "limegreen",
                pointBorderWidth: "0"

            },
            {
                label: "Deaths",
                data: lastWeekDeaths,
                borderColor: "tomato",
                pointBorderWidth: "0"
            }
        ]
    };


    return ( 
        <div>
            <Line data={data} height={400} width={600} options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Trends in the past 90 days',
                        font: {
                            size: 20
                        }  
                    }
                },
                maintainAspectRatio: false,
                responsive: true
            }}/>
        </div>
     );
}
 
export default CountryPastWeek;