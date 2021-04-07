import React, {useEffect, useRef, useState} from "react";
import Chart from 'chart.js/auto';
import SimplePlot from "../common/SimplePlot";

function RegionalIntensiveCareAdmissionPlot({region, admissions}) {

    const x = admissions.map(item => item.noticeDate);
    const y = admissions.map(item => item.intensiveCareAdmissionCount);


    return (
        <SimplePlot x={x} y={y}
                    legend={"Admissions quotidiennes en réanimation"}
                    title={`Admissions en réanimation (${region ? region.regionName : ''})`}
        />
    );
}

export {RegionalIntensiveCareAdmissionPlot};