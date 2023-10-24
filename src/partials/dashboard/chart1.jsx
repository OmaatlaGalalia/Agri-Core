import  { useEffect } from 'react';
import { Chart, initTE } from 'tw-elements';

initTE({ Chart });

const dataDoughnut = {
  type: 'doughnut',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
    datasets: [
      {
        label: 'Traffic',
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        backgroundColor: [
          'rgba(63, 81, 181, 0.5)',
          'rgba(77, 182, 172, 0.5)',
          'rgba(66, 133, 244, 0.5)',
          'rgba(156, 39, 176, 0.5)',
          'rgba(233, 30, 99, 0.5)',
          'rgba(66, 73, 244, 0.4)',
          'rgba(66, 133, 244, 0.2)',
        ],
      },
    ],
  },
};

const DoughnutChart = () => {
  useEffect(() => {
    new Chart(document.getElementById('doughnut-chart'), dataDoughnut);
  }, []);

  return (
    <div className="mx-auto max-w-screen overflow-hidden">
      <canvas id="doughnut-chart" style={{ width: '100%', height: 'auto' }}></canvas>
    </div>
  );
};

export default DoughnutChart;
