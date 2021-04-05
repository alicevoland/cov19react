function LocalityTable(props) {

    const {departments} = props;

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
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
                </tr>

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