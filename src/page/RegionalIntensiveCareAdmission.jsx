import React, {useEffect, useState} from 'react';
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";
import RegionChooser from "../component/locality/RegionChooser";
import RegionalIntensiveCareAdmissionPlot from "../component/hospitalisation/RegionalIntensiveCareAdmissionPlot";
import {searchRegionalIntensiveCareAdmissions} from "../api/hospitalisation";
import {findAllRegions} from "../api/locality";
import GraphTableViewSelect from "../component/GraphTableViewSelect";
import RegionalIntensiveCareAdmissionTable from "../component/hospitalisation/RegionalIntensiveCareAdmissionTable";
import Conditional from "../component/common/Conditional";

function RegionalIntensiveCareAdmission(props) {

    // STATE
    // ----------------------------------------------------------------------------------------------------------------

    // All regions
    const [regions, setRegions] = useState({regions: [], status: 'initial'});

    // Selected region
    const [selectedRegion, setSelectedRegion] = useState({region: undefined, status: 'initial'});

    // Notice date window
    const [noticeDateBegin, setNoticeDateBegin] = useState({dateString: "2021-03-01"})
    const [noticeDateEnd, setNoticeDateEnd] = useState({dateString: "2022-03-01"})

    // Admissions
    const [admissions, setAdmissions] = useState({admissions: [], status: 'initial'});

    // View
    const [viewOption, setViewOption] = useState({graph: true, table: false})


    // EFFECTS
    // ----------------------------------------------------------------------------------------------------------------

    // fetch admissions when region is selected
    useEffect(
        () => {
            if (selectedRegion.status === 'ok') {
                searchRegionalIntensiveCareAdmissions(
                    selectedRegion.region.regionCode, noticeDateBegin.dateString, noticeDateEnd.dateString,
                    setAdmissions);
            }
        },
        [selectedRegion, noticeDateEnd, noticeDateBegin]);

    // fetch all regions
    useEffect(() => findAllRegions(setRegions), []);


    // UI
    // ----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Admissions en réanimation"}
                lead={"Admissions quotidienne en réanimation par région"}
            />
            <Content>
                <RegionChooser regions={regions.regions} callback={setSelectedRegion}/>
                <GraphTableViewSelect viewOption={viewOption} callback={setViewOption}/>
                <Conditional showCondition={viewOption.graph}>
                    <RegionalIntensiveCareAdmissionPlot region={selectedRegion.region}
                                                        admissions={admissions.admissions}/>
                </Conditional>
                <Conditional showCondition={viewOption.table}>
                    <RegionalIntensiveCareAdmissionTable region={selectedRegion.region}
                                                         admissions={admissions.admissions}/>
                </Conditional>
            </Content>
            <Footer/>
        </>
    );

}

export default RegionalIntensiveCareAdmission;