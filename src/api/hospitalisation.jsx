import Api from "./Api";


const searchRegionalIntensiveCareAdmissions = function (
    region, noticeDateBegin, noticeDateEnd,
    callback
) {
    Api.request({
        url: `hospitalisation/regionalIntensiveCareAdmissions/search`,//,,
        params: {
            regionCode: region.regionCode,
            noticeDateBegin: noticeDateBegin,
            noticeDateEnd: noticeDateEnd

        }
    })
        .then(response => {
            var regionalIntensiveCareAdmissions = [];
            if (response.data._embedded !== undefined) {
                regionalIntensiveCareAdmissions = response.data._embedded.regionalIntensiveCareAdmissions;
            }
            regionalIntensiveCareAdmissions.sort((a, o) => {
                return a.noticeDate.localeCompare(o.noticeDate)
            });

            callback(region, regionalIntensiveCareAdmissions);

        })
        .catch(error => {
            console.log(error)
        })
}

export {searchRegionalIntensiveCareAdmissions}