import React, {useEffect, useState} from 'react';
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";

// ui
import RegionChooserForm from "../component/locality/RegionChooserForm";
import CheckboxConditional from "../component/common/CheckboxConditional";

// ui
import {RegionalIntensiveCareAdmissionPlot} from "../component/hospitalisation/HospitalisationPlot";
import {RegionalIntensiveCareAdmissionTable} from "../component/hospitalisation/HospitalisationTable";

//api
import {searchRegionalIntensiveCareAdmissions} from "../api/hospitalisation";
import {findAllRegions} from "../api/locality";
import DateChooserForm from "../component/locality/DateChooserForm";
import FormContainer from "../component/common/FormContainer";

function RegionalIntensiveCareAdmission(props) {

    // STATE
    // ----------------------------------------------------------------------------------------------------------------
    const noticeDateEndInitial = new Date().toISOString().slice(0, 10);
    let noticeDateEndInitialTmp = new Date();
    noticeDateEndInitialTmp.setDate(noticeDateEndInitialTmp.getDate() - 30);
    const noticeDateBeginInitial = noticeDateEndInitialTmp.toISOString().slice(0, 10);

    const [selection, setSelection] = useState({
        noticeDateBegin: noticeDateBeginInitial,
        noticeDateEnd: noticeDateEndInitial,
        region: undefined,
        regions: []
    });

    const [data, setData] = useState({
        noticeDateBegin: noticeDateBeginInitial,
        noticeDateEnd: noticeDateEndInitial,
        admissions: [],
        status: 'expired'
    })

    // BEHAVIOUR
    // ----------------------------------------------------------------------------------------------------------------

    const handleNewRegion = function (region) {
        setSelection(prev => ({...prev, region: region}));
        setData(prev => ({...prev, status: 'expired'}));
    }

    const handleNewRegionList = function (regions) {
        setSelection(prev => ({...prev, regions: regions}));
        setData(prev => ({...prev, status: 'expired'}));
    }

    const handleNewNoticeDateBegin = function (date) {
        setSelection(prev => ({...prev, noticeDateBegin: date}));
        setData(prev => ({...prev, status: 'expired'}));
    }

    const handleNewNoticeDateEnd = function (date) {
        setSelection(prev => ({...prev, noticeDateEnd: date}));
        setData(prev => ({...prev, status: 'expired'}));
    }

    const handleNewAdmissions = function (region, admissions) {
        setData(prev => ({region: region, admissions: admissions, status: 'ok'}));
    }


    // EFFECTS
    // ----------------------------------------------------------------------------------------------------------------


    // fetch admissions when region is selected
    const requestAdmissionsUpdate = function () {
        if (selection.region) {
            searchRegionalIntensiveCareAdmissions(
                selection.region, selection.noticeDateBegin, selection.noticeDateEnd,
                handleNewAdmissions);
        }
    }
    useEffect(requestAdmissionsUpdate, [selection]);

    // fetch all regions
    useEffect(() => findAllRegions(handleNewRegionList), []);


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
                <FormContainer>
                    <RegionChooserForm regions={selection.regions}
                                       callback={handleNewRegion}/>

                    <DateChooserForm label={"Date début"}
                                     min={"2020-01-01"} max={selection.noticeDateEnd}
                                     initial={noticeDateBeginInitial}
                                     callback={handleNewNoticeDateBegin}/>

                    <DateChooserForm label={"Date fin"}
                                     min={selection.noticeDateBegin} max={noticeDateEndInitial}
                                     initial={noticeDateEndInitial}
                                     callback={handleNewNoticeDateEnd}/>
                </FormContainer>

                <CheckboxConditional initial={true}
                                     message={"Afficher le graphique"}>
                    <RegionalIntensiveCareAdmissionPlot {...data}/>
                </CheckboxConditional>

                <CheckboxConditional initial={false}
                                     message={"Afficher le tableau"}>
                    <RegionalIntensiveCareAdmissionTable {...data}/>

                </CheckboxConditional>

            </Content>

            <Footer/>
        </>
    );

}

export default RegionalIntensiveCareAdmission;