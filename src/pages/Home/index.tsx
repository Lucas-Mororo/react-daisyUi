import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Registre os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Home: React.FC = () => {
    // Dados do gráfico
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Opções do gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,  // Corrige o problema de tipo
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
            },
        },
    };

    return (
        <div className='w-64 h-64'>
            <Pie data={data} options={options} />
        </div>
    );
};

export default Home;
