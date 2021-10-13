import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const GlobalPiChart = ({confirmed, deaths, recovered}) => {

    const data = {
        labels : ['Recovered', 'Deaths', 'Infected'], //diagnosed - confirmed but not recovered/died
        datasets : [
            {
                label: 'Category',
                data: [recovered, deaths, (confirmed - recovered - deaths)],
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
    }


    return ( 
        <div>
            <Doughnut data={data} options={{
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Global Status',
                        font: {
                            size: 20
                        }
                    }
                }}} height= {400} width ={400}/>
        </div>
     );
}
 
export default GlobalPiChart;