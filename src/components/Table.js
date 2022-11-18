import {v4 as uuidv4} from "uuid";
import TableItemBody from "./TableItemBody";
import TableItemFooter from "./TableItemFooter";
import TableItemHead from "./TableItemHead";

const Table = ({statistics}) => {
    console.log(statistics)
    return (
        <>
            <table>
                <thead>
                    <TableItemHead />
                </thead>
                <tbody>
                    {
                        statistics.map ( (stat) => {
                            return (
                                <TableItemBody key={uuidv4 ()} stat={stat}/>
                            );
                        })
                    }
                </tbody>
                <tfoot>
                    {/* <TableItemFooter /> */}
                </tfoot>
            </table>
        </>
    );
}

export default Table;