import { useEffect, useState } from 'react';
import './App.css';
import Statistics from './components/Statistics';
import Table from './components/Table';

const App = () => {
  const [statistics, setStatistics] = useState(['data1', 'data2', 'data3']);
  return (
    <>
     <Statistics>
       <Table statistics={statistics}/>
     </Statistics>
    </>
  );
}

export default App;
