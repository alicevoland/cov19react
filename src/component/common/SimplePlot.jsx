import React, {useEffect, useRef, useState} from "react";
import Chart from 'chart.js/auto';

function Plot({x, y, title, legend}) {
    const canvasRef = useRef(null);

    const [chart, setChart] = useState({chart: undefined});

    const createChart = function () {
        const data = {
            labels: x,
            datasets: [{
                label: legend,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: y
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
                        text: title
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
    useEffect(createChart, [x]);

    return (
        <>
            <div className={"py-4"}>
                <h1>Graphique</h1>
                <canvas ref={canvasRef}/>
            </div>
        </>
    );
}

function SimplePlot({x, y, title, legend}) {
    if (x && x.length > 0) {
        return (
            <Plot x={x} y={y} title={title} legend={legend}/>
        );
    } else {
        return (
            <>
                <p>Pas de données</p>
            </>
        );
    }
}

export default SimplePlot;