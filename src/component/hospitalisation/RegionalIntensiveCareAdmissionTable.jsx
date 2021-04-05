function RegionalIntensiveCareAdmissionTable(props) {
    const {admissions} = props;

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
                        Date
                    </th>
                    <th>
                        Admissions en réanimation
                    </th>
                </tr>

                </thead>
                <tbody>
                {
                    admissions.map((item) =>
                        <tr key={item.id}>
                            <td>
                                {item.region.regionCode}
                            </td>
                            <td>
                                {item.region.regionName}
                            </td>
                            <td>
                                {item.noticeDate}
                            </td>
                            <td>
                                {item.intensiveCareAdmissionCount}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );}

export default RegionalIntensiveCareAdmissionTable;