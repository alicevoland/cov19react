function SimpleTable({header, rows}) {


    if (rows.length === 0) {
        return (
            <p>
                Pas de données
            </p>
        )
    }

    return (
        <>
            <div className={"py-4"}>
                <h1>Tableau</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {header.map((columnName) =>
                            <th>{columnName}</th>
                        )}
                    </tr>

                    </thead>
                    <tbody>
                    {rows.map(row => (
                        <tr>
                            {row.map(item =>
                                <td>{item}</td>)}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SimpleTable;