import { useEffect, useState } from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import Error from './components/Error';
import Form from './components/Form';
import Statistics from './components/Statistics';
import Table from './components/Table';

const App = () => {

  const [statistics, setStatistics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [graphdata, setGraphData] = useState({});
 
  let ChartData = {};

  const CovidHistoryData = () => {
    fetch ( 'https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        }
    }) 
    .then ( (response) => {
        return response.json ();
    })
    .then ( (data) => {
      ChartData.labels = ['2017', '2020', '2021'];
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

 console.log (graphdata)
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
    FetchPreferredCountryList ();
    CovidHistoryData ();
  }, []);

 // Handling Selected country:
 const handleSelectedCountry = ( event) => {
    setSelectedCountry (event.target.value);
 };

  return (
    <>
    <Error error={isError}/>
    { isLoading && <p> Loading...</p>}
    <Form>

    </Form>
     <Statistics>
       <Table statistics={statistics}/>
     </Statistics>

    <div>
      {selectedCountry}
    </div>
    {/* Bargraph */}
    {/* <BarGraph graphdata ={graphdata} /> */}

    </>
  );
}

export default App;
