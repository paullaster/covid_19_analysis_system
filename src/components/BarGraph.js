import { Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const BarGraph = ( {graphdata}) => {
    return (
        <Bar data = {graphdata}/>
    );
};
export default BarGraph;