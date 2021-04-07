import React, {useEffect, useState} from "react";
import SimplePlot from "../common/SimplePlot";

function RegionalIntensiveCareAdmissionPlot({region, admissions}) {

    const [data, setData] = useState({x: [], y: [], title: '', legend: ''})


    const updateData = function () {
        setData({
            x: admissions.map(item => item.noticeDate),
            y: admissions.map(item => item.intensiveCareAdmissionCount),
            title: `Admissions en réanimation (${region ? region.regionName : ''})`,
            legend: 'Admissions quotidiennes en réanimation'
        })
    }

    useEffect(updateData, [region, admissions]);

    return (
        <SimplePlot {...data} />
    );
}

export {RegionalIntensiveCareAdmissionPlot};