import { useEffect, useState } from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import Error from './components/Error';
import Form from './components/Form';
import InputLabel from './components/InputLabel';
import Statistics from './components/Statistics';
import Table from './components/Table';

const App = () => {

  const [statistics, setStatistics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [graphdata, setGraphData] = useState({});
  const [search, setSearch] = useState([]);
  const [date, setDate] = useState('2022-06-06');
 
  let ChartData = {};

  const CovidHistoryData = () => {
    fetch ( 'https://covid-193.p.rapidapi.com/history?country='+search+'&day='+date, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        }
    }) 
    .then ( (response) => {
        return response.json ();
    })
    .then ( (data) => {
      ChartData.labels = [data.parameters.day];
      ChartData.datasets = [
        {
          label: 'cases',
          data:[data.response[0].cases.total], 
        },
        {
          label: 'deaths',
          data:[data.response[0].deaths.total], 
        },
        {
          label: 'tests',
          data:[data.response[0].tests.total], 
        }
      ]
       setGraphData (ChartData);
    })
    
};

  //Fetching COVID data for countries:
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
    CovidHistoryData ();
  }, []);

 // Handling Selected country:
 const handleSearch = ( event) => {
  setSearch (event.target.value);
 };
console.log ()
  const FilteredTable = statistics.filter ( (data) => {
   return data.country.toLowerCase ().includes (search);
  });

const handleDate = (event) => {
  setDate (event.target.value);
};
  return (
    <>
    <Error error={isError}/>
    { isLoading && <p> Loading...</p>}
    <Form>
     <InputLabel onChange={handleSearch}>
     Search:
     </InputLabel>
     <InputLabel type='date' onChange={ handleDate }>
     Date:
     </InputLabel>
    </Form>
     <Statistics>
       <Table statistics={FilteredTable}/>
     </Statistics>

    
    {/* Bargraph */}
    {/* <BarGraph graphdata ={graphdata} /> */}

    </>
  );
}

export default App;
