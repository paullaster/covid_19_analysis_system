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
                                <tr>
                                    <td>{stat}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;