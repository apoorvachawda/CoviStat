import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';


const CountryPie = ({ confirmed, recovered, deaths }) => {

    const infected = confirmed - recovered - deaths;

    const data = {
        maintainAspectRatio: false,
        responsive: true,
        labels: ['Recovered', 'Deaths', 'Infected'],
        datasets: [
            {
                data: [recovered, deaths, infected],
                backgroundColor: [
                    // 'rgba(50, 205, 50, 1)',
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(255, 140, 0, 1)'
                    'rgba(50, 205, 50, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 140, 0, 0.5)'

                ],
                borderColor: [
                    'rgba(50, 205, 50, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 140, 0, 0.2)'
                ],
                borderWidth: 1
            }
        ]
    };



    return ( 
        <div>
            <Doughnut data={data} height={400} width={400} options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Status',
                        font: {
                            size: 20
                        }
                    }

                },
                responsive: true
            }}/>
        </div> 
     );
}
 
export default CountryPie;

