import { useEffect, useState } from 'react';
import './App.css';
import Error from './components/Error';
import Statistics from './components/Statistics';
import Table from './components/Table';

const App = () => {
  const [statistics, setStatistics] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect ( () => {
    fetch ( 'https://covid-193.p.rapidapi.com/statistics', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    })
    .then ( (response) => {
      return response.json();
    })
    .then ( (data) => {
      setStatistics (data)
    })
    .catch ( () => {
      setIsError ( true);
    })
  }, [])
  return (
    <>
    <Error error={isError}/>
     <Statistics>
       <Table statistics={statistics}/>
     </Statistics>
    </>
  );
}

export default App;
