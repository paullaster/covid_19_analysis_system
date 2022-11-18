const TableItem = ({stat}) => {
    return (
        <>
        <tr>
            <td>
                {stat.id}
            </td>
            <td>
                {stat.name}
            </td>
        </tr>
        </>
    );
}
export default TableItem;