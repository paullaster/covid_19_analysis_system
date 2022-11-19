import { useEffect, useState } from 'react';
import './App.css';
import Error from './components/Error';
import Statistics from './components/Statistics';
import Table from './components/Table';

const App = () => {
  const [statistics, setStatistics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect ( () => {
    setIsLoading (true);
    fetch ( 'https://covid-193.p.rapidapi.com/statistics', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      }
    })
    .then ( (response) => {
      return response.json();
    })
    .then ( (data) => {
      setStatistics (data.response);
      setIsLoading (false); 
     })
    .catch ( () => {
      setIsError ( true);
    })
  }, [])
  return (
    <>
    <Error error={isError}/>
    { isLoading && <p> Loading...</p>}
     <Statistics>
       <Table statistics={statistics}/>
     </Statistics>
    </>
  );
}

export default App;
