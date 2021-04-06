import Api from "./Api";

function findAllRegions(
    callback
) {

    callback((prev) => ({
        ...prev, status: 'loading'
    }));

    Api
        .request({
            url: `locality/regions`,
        })

        .then(response => {
            const regions = response.data._embedded.regions;
            regions.sort((a, b) => a.regionCode.localeCompare(b.regionCode));

            callback((prev) => ({
                ...prev, regions: regions, status: 'ok',
            }));
        })

        .catch(error => {
            callback((prev) => ({
                ...prev, status: 'error'
            }));

            console.log(error)
        });
}

export {findAllRegions}