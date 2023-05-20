
const Table = ({ cryptoData }) => {

    return(
        <div className="table-container">
            <table border="1">
                <tbody>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>SYMBOL</th>
                <th>CURRENT PRICE</th>
                <th>TOTAL VOLUME</th>
            </tr>
            {
                cryptoData.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td><img src={value.image} alt="crypto"></img></td>
                            <td>{value.symbol}</td>
                            <td>{value.current_price}</td>
                            <td>{value.total_volume}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    )

}

export default Table;