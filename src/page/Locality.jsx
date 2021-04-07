import React, {useState, useEffect} from 'react';
import Api from "../api/Api";
import LocalityTable from "../component/locality/LocalityTable";
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";
import Loading from "../component/common/Loading";

function Locality(props) {

    const [state, setState] = useState({
        departments: [],
        isLoading: true
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
                        departments: departments,
                        isLoading: false
                    })
                })
                .catch(error => console.log(error))
        },
        []
    );

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Régions et départements"}
                lead={"Liste des régions et départements de France"}
            />
            <Content>
                <Loading isLoading={state.isLoading} message={"Chargement en cours...."}>
                    <LocalityTable
                        departments={state.departments}
                    />
                </Loading>
            </Content>
            <Footer/>
        </>
    );
}

export default Locality;