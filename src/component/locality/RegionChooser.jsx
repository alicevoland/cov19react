function RegionChooser(props) {
    const {callback, regions} = props;

    const handleSelectChange = function (event) {
        let region = regions.find(r => r.regionCode === event.target.value);
        callback({
            region: region,
            status: 'ok'
        });
    }
    if (regions && regions.length > 0) {
        return (
            <>
                <form>
                    <label>
                        Choisir la région :
                        <select onChange={handleSelectChange}>
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
                </form>
            </>
        );
    } else {
        return (<></>);
    }
}

export default RegionChooser