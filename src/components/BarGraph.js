import { Bar} from 'react-chartjs-2';
import {} from 'chart.js';

const BarGraph = ( {graphdata}) => {
    return (
        <>
        <Bar graphdata = {graphdata}/>
        </>
    );
};
export default BarGraph;