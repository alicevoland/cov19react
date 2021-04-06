import React, {useEffect, useRef, useState} from "react";
import Chart from 'chart.js/auto';

function Plot(props) {
    const {admissions, region} = props;
    const canvasRef = useRef(null);


    const [chart, setChart] = useState({chart: undefined});

    const createChart = function () {
        const admissionsX = admissions.map(item => item.noticeDate);
        const admissionsY = admissions.map(item => item.intensiveCareAdmissionCount);
        const data = {
            labels: admissionsX,
            datasets: [{
                label: 'Admissions en réanimation',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: admissionsY
            }]
        };
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: `Admission en réanimation (${region.regionName})`
                    }
                }
            },
        };
        if (chart.chart) {
            chart.chart.destroy();
        }
        setChart({chart: new Chart(canvasRef.current, config)});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(createChart, [admissions]);

    return (
        <>
            <div className={"py-4"}>
                <h1>Graphique</h1>
                <canvas ref={canvasRef}/>
            </div>
        </>
    );
}

function RegionalIntensiveCareAdmissionPlot(props) {
    const {admissions} = props;
    if (admissions && admissions.length > 0) {
        return (
            <Plot {...props} />
        );
    } else {
        return (
            <>
                <p>Pas de données</p>
            </>
        );
    }
}

export default RegionalIntensiveCareAdmissionPlot;