function RegionChooserForm({callback, regions}) {

    const handleSelectChange = function (event) {
        let region = regions.find(r => r.regionCode === event.target.value);
        callback(region);
    }

    if (regions && regions.length > 0) {
        return (
                    <label className={"form-label"}>
                        Choisir la région :
                        <select className={"form-control"} onChange={handleSelectChange}>
                            {regions.map(region => {
                                return (
                                    <option
                                        key={region.id}
                                        value={region.regionCode}
                                    >
                                        {region.regionCode} - {region.regionName}
                                    </option>
                                );
                            })
                            }
                        </select>
                    </label>
        );
    } else {
        return (<><p>attente de la réponse du serveur...</p></>);
    }
}

export default RegionChooserForm