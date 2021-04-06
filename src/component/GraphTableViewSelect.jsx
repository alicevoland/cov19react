function GraphTableViewSelect({viewOption, callback}) {

    const handleGraph = function (event) {
        callback((props) => ({...props, graph: event.target.checked}));
    }

    const handleTable = function (event) {
        callback((props) => ({...props, table: event.target.checked}));
    }

    return (

        <form>
            <label> Voir le graphique
                <input type={"checkbox"} checked={viewOption.graph} onChange={handleGraph}/>
            </label>
            <label> Voir le tableau
                <input type={"checkbox"} checked={viewOption.table} onChange={handleTable}/>
            </label>
        </form>
    );
}

export default GraphTableViewSelect;
