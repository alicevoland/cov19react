import Api from "./Api";


const searchRegionalIntensiveCareAdmissions = function (
    regionCode, noticeDateBegin, noticeDateEnd,
    callback
) {
    callback((prev) => ({
        ...prev, status: 'loading'
    }));
    Api.request({
        url: `hospitalisation/regionalIntensiveCareAdmissions/search`,//,,
        params: {
            regionCode: regionCode,
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
            callback((prev) => ({
                ...prev, admissions: regionalIntensiveCareAdmissions, status: 'ok'
            }));
        })
        .catch(error => {
            callback((prev) => ({
                ...prev, status: 'error'
            }));
            console.log(error)
        })
}

export {searchRegionalIntensiveCareAdmissions}