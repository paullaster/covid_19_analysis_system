import {v4 as uuidv4} from "uuid";
import TableItemBody from "./TableItemBody";
import TableItemFooter from "./TableItemFooter";
import TableItemHead from "./TableItemHead";
import '../assets/table.css';

const Table = ({statistics}) => {
    return (
        <>
            <table>
                <thead>
                    <TableItemHead key={uuidv4 ()} />
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