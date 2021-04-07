import React, {useEffect, useState} from 'react';
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";

// ui
import RegionChooser from "../component/locality/RegionChooser";
import CheckboxConditional from "../component/common/CheckboxConditional";

// ui
import {RegionalIntensiveCareAdmissionPlot} from "../component/hospitalisation/HospitalisationPlot";
import {RegionalIntensiveCareAdmissionTable} from "../component/hospitalisation/HospitalisationTable";

//api
import {searchRegionalIntensiveCareAdmissions} from "../api/hospitalisation";
import {findAllRegions} from "../api/locality";
import DateChooser from "../component/locality/DateChooser";

function RegionalIntensiveCareAdmission(props) {

    // STATE
    // ----------------------------------------------------------------------------------------------------------------

    // All regions
    const [regions, setRegions] = useState({regions: [], status: 'initial'});

    // Selected region
    const [selectedRegion, setSelectedRegion] = useState({region: undefined, status: 'initial'});

    // Notice date window
    const initialBegin = new Date();
    initialBegin.setDate(initialBegin.getDate() - 30);
    const [noticeDateBegin, setNoticeDateBegin] = useState({
        dateString: initialBegin.toISOString().slice(0, 10)
    })
    const [noticeDateEnd, setNoticeDateEnd] = useState({dateString: new Date().toISOString().slice(0, 10)})

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
                <DateChooser label={"Date début"}
                             min={"2020-01-01"} max={noticeDateEnd.dateString}
                             initial={noticeDateBegin.dateString}
                             callback={setNoticeDateBegin}
                />
                <DateChooser label={"Date fin"}
                             min={noticeDateBegin.dateString} max={new Date().toISOString().slice(0, 10)}
                             initial={noticeDateEnd.dateString}
                             callback={setNoticeDateEnd}
                />
                <CheckboxConditional initial={true} message={"Afficher le graphique"}>
                    <RegionalIntensiveCareAdmissionPlot region={selectedRegion.region}
                                                        admissions={admissions.admissions}/>
                </CheckboxConditional>
                <CheckboxConditional initial={false} message={"Afficher le tableau"}>
                    <RegionalIntensiveCareAdmissionTable region={selectedRegion.region}
                                                         admissions={admissions.admissions}/>
                </CheckboxConditional>
            </Content>
            <Footer/>
        </>
    );

}

export default RegionalIntensiveCareAdmission;