function LocalityTable(props) {

    const {departments} = props;
    console.log("PROPS");
    console.log(departments);

    return (
        <div>
            <table className="table">
                <thead>
                <th>
                    Code
                </th>
                <th>
                    Région
                </th>
                <th>
                    Code
                </th>
                <th>
                    Département
                </th>

                </thead>
                <tbody>
                {
                    departments.map((item) =>
                        <tr key={item.id}>
                            <td>
                                {item.region.regionCode}
                            </td>
                            <td>
                                {item.region.regionName}
                            </td>
                            <td>
                                {item.departmentCode}
                            </td>
                            <td>
                                {item.departmentName}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default LocalityTable;