import React, {useState, useEffect} from 'react';
import Api from "../api/Api";
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";
import Loading from "../component/common/Loading";
import RegionalIntensiveCareAdmissionTable from "../component/hospitalisation/RegionalIntensiveCareAdmissionTable";
import RegionChooser from "../component/locality/RegionChooser";

function RegionalIntensiveCareAdmission(props) {

    const [admissions, setAdmissions] = useState({admissions: []});
    const [admissionsLoading, setAdmissionsLoading] = useState({isLoading: true});

    const [regions, setRegions] = useState({regions: []});
    const [regionsLoading, setRegionsLoading] = useState({isLoading: true});

    const [selectedRegion, setSelectedRegion] = useState({});

    const handleNewRegionCode = function (regionCode) {
        console.log("Selected regionCode ");
        console.log(regionCode);
        setSelectedRegion({regionCode: regionCode});
    }

    const fetchRegions = function () {
        setRegionsLoading({isLoading: true});
        Api
            .get('locality/regions')
            .then(response => {
                const regions = response.data._embedded.regions;
                regions.sort((a, b) => a.regionCode.localeCompare(b.regionCode));
                setRegions({regions: regions});
                setRegionsLoading({isLoading: false});
            })
            .catch(error =>
                console.log(error)
            );
    }
    useEffect(fetchRegions, []);

    const fetchAdmissions = function () {
        setAdmissionsLoading({isLoading: true});
        Api.get(
            `/hospitalisation/regionalIntensiveCareAdmissions/search?regionCode=${selectedRegion.regionCode}&noticeDateBegin=2021-03-01&noticeDateEnd=2022-03-01`//,
        )
            .then(response => {
                console.log(response);
                var regionalIntensiveCareAdmissions = [];
                if (response.data._embedded !== undefined) {
                    regionalIntensiveCareAdmissions = response.data._embedded.regionalIntensiveCareAdmissions;
                }
                regionalIntensiveCareAdmissions.sort((a, o) => {
                    return o.noticeDate.localeCompare(a.noticeDate)
                });
                setAdmissions({admissions: regionalIntensiveCareAdmissions})
                setAdmissionsLoading({isLoading: false});
            })
            .catch(error => console.log(error))
    }
    useEffect(fetchAdmissions, [selectedRegion]);

    console.log("Will return UI")


    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Admissions en réanimation"}
                lead={"Admissions quotidienne en réanimation par région"}
            />
            <Content>
                <Loading isLoading={regionsLoading.isLoading}>
                    <RegionChooser
                        regions={regions.regions}
                        handleNewRegionCode={handleNewRegionCode}
                    />
                </Loading>
                <Loading isLoading={admissionsLoading.isLoading}>
                    <RegionalIntensiveCareAdmissionTable
                        admissions={admissions.admissions}
                    />
                </Loading>
            </Content>
            <Footer/>
        </>
    );
}

export default RegionalIntensiveCareAdmission;