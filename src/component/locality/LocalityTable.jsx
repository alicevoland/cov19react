import SimpleTable from "../common/SimpleTable";

function LocalityTable({departments}) {
    if (departments.length === 0) {
        return (
            <p>
                Pas de données
            </p>
        )
    }
    const header = [
        'code', 'région', 'code', 'département'
    ];
    const rows = departments.map(department => {
        return {
            key: `RegionalIntensiveCareAdmission-${department.id}`,
            items: [
                department.region.regionCode,
                department.region.regionName,
                department.departmentCode,
                department.departmentName]
        }
    });

    return (
        <SimpleTable header={header} rows={rows}/>
    );

}

export default LocalityTable;