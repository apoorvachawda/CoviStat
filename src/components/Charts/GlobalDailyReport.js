import { Bar } from "react-chartjs-2";

const GlobalDailyReport = ({confirmed, recovered, deaths}) => {
    const state = {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: 'Cases',
                backgroundColor: '#3B8CA3',
                data: [confirmed, recovered, deaths]
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
                            text: 'Daily Status',
                            font: {
                                size: 20
                            }
                        }
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
 
export default GlobalDailyReport;