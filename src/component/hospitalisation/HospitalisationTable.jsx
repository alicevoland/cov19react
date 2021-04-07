import SimpleTable from "../common/SimpleTable";

function RegionalIntensiveCareAdmissionTable({admissions}) {
    if (admissions.length === 0) {
        return (
            <p>
                Pas de données
            </p>
        )
    }
    const header = [
        'code', 'région', 'date', 'admissions'
    ];
    const rows = admissions.map(admission => {
        return {
            key: `RegionalIntensiveCareAdmission-${admission.id}`,
            items: [
                admission.region.regionCode,
                admission.region.regionName,
                admission.noticeDate,
                admission.intensiveCareAdmissionCount]
        }
    });

    return (
        <SimpleTable header={header} rows={rows}/>
    );
}

export {RegionalIntensiveCareAdmissionTable};