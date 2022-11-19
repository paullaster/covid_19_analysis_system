const TableItem = ({stat}) => {
    return (
        <>
        <tr>
            <td>
                {stat.continent}
            </td>
            <td>
             { stat.country}
            </td>
            <td>
                {stat.population}
            </td>
            <td>
                <ul>
                    <li>
                        New:  {stat.cases.new === null ? '0' : stat.cases.new }
                    </li>
                    <li>
                        Active:  {stat.cases.active === null ? '0' : stat.cases.active}
                    </li>
                    <li>
                        Critical:  { stat.cases.critical === null ? '0' : stat.cases.critical }
                    </li>
                    <li>
                        Recovered:  { stat.cases.recovered === null ? '0' : stat.cases.recovered}
                    </li>
                    <li>
                        1M_pop:  { stat.cases['1M_pop'] === null ? '0' : stat.cases['1M_pop']}
                    </li>
                    <li>
                        Total:  { stat.cases.total === null ? '0' : stat.cases.total }
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        New: {stat.deaths.new === null ? '0' : stat.deaths.new }
                    </li>
                    <li>
                       1M_pop : { stat.deaths['1M_pop'] === null ? '0' : stat.deaths['1M_pop']}
                    </li>
                    <li>
                        Total: { stat.deaths.total === null ? '0' : stat.deaths.total }
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        1M_pop: { stat.tests['1M_pop'] === null ? '0' : stat.tests['1M_pop']}
                    </li>
                    <li>
                        Total: { stat.tests.total === null ? '0' : stat.tests.total}
                    </li>
                </ul>
            </td>
            <td>
                {stat.day}
            </td>
            <td>
                {stat.time}
            </td>
        </tr>
        </>
    );
}
export default TableItem;