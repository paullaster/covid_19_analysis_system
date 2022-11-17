import { useEffect, useState } from 'react';
import './App.css';
import Statistics from './components/Statistics';

const App = () => {
  const [statistics, setStatistics] = useState(['data1', 'data2', 'data3']);
  return (
    <>
     <Statistics statistics={statistics}/>
    </>
  );
}

export default App;
