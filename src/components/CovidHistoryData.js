const CovidHistoryData = () => {
    fetch ( 'https://covid-193.p.rapidapi.com/history', {
        method: 'GET',
        params: {
            country:'usa',
            day: '2020-06-06',
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        }
    }) 
    .then ( (response) => {
        return response.json ();
    })
    .then ( (data) => {
        console.log ( data.response );
    })
};
export default CovidHistoryData;