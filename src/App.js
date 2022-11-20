import { useEffect, useState } from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import Error from './components/Error';
import Form from './components/Form';
import Select from './components/Select';
import Statistics from './components/Statistics';
import Table from './components/Table';


const App = () => {
  const [statistics, setStatistics] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const FetchPreferredCountryList = () => {
    fetch ('https://covid-193.p.rapidapi.com/countries', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      }
    })
    .then ( (response) => {
      return response.json ();
    })
    .then ( (data) => {
      setCountryList (data.response);
      setIsLoading (false);
    })
    .catch ( (err) => {
      setIsError (true);
    } );
  };

  const FetchStatistics = () => {
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

  };



  useEffect ( () => {
    setIsLoading (true);
    FetchStatistics ();
    FetchPreferredCountryList ();
  }, [])
  return (
    <>
    <Error error={isError}/>
    { isLoading && <p> Loading...</p>}
    <Form>
      <Select countryList={countryList}/>
    </Form>
     <Statistics>
       <Table statistics={statistics}/>
     </Statistics>

    {/* Bargraph */}
    <BarGraph />

    </>
  );
}

export default App;
