import Api from "./Api";

function findAllRegions(
    callback
) {

    Api
        .request({
            url: `locality/regions`,
        })

        .then(response => {
            const regions = response.data._embedded.regions;
            regions.sort((a, b) => a.regionCode.localeCompare(b.regionCode));

            callback(regions);
        })

        .catch(error => {
            console.log(error)
        });
}

export {findAllRegions}