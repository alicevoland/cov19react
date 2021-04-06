function RegionChooser(props) {
    const {handleNewRegionCode, regions} = props;

    const handleSelectChange = function (event) {
        handleNewRegionCode(event.target.value);
    }

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
}

export default RegionChooser