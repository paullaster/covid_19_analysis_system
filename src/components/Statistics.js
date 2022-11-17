const Statistics = ({statistics}) => {
    return (
        <div>
            <ul>
                {
                    statistics.map ( (stat) => {
                       return  <li>{stat}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default Statistics;