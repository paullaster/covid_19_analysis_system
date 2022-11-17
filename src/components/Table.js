import TableItem from "./TableItem";

const Table = ({statistics}) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        statistics.map ( (stat) => {
                            return (
                                <TableItem stat={stat}/>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;