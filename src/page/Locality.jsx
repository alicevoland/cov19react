import React, {useState, useEffect} from 'react';
import Api from "../api/Api";
import LocalityTable from "../component/locality/LocalityTable";
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";

function Locality(props) {

    const [state, setState] = useState({
        departments: []
    });

    useEffect(
        () => {
            Api.get('locality/departments')
                .then(response => {
                    var departments = response.data._embedded.departments;
                    departments.sort((d, o) => {
                        if (d.region.regionCode !== o.region.regionCode) {
                            return d.region.regionCode.localeCompare(o.region.regionCode)
                        } else {
                            return d.departmentCode.localeCompare(o.departmentCode)
                        }
                    });
                    setState({
                        departments: departments
                    })
                })
                .catch(error => console.log(error))
        },
        []
    );

    console.log("Will return UI")

    return (
        <>
            <Navbar/>
            <Jumbo title={"Régions et départements"} lead={"List des régions et départements de France"}/>
            <Content>
                <LocalityTable departments={state.departments}/>
            </Content>
        </>
    );
}

export default Locality;