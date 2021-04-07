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
                        {header.map((column, i) =>
                            <th key={i}>{column}</th>
                        )}
                    </tr>

                    </thead>
                    <tbody>
                    {rows.map(row => (
                        <tr key={row.key}>
                            {row.items.map((item, i) =>
                                <td key={i}>{item}</td>)}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SimpleTable;