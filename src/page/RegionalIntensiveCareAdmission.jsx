import React, {useState, useEffect} from 'react';
import Api from "../api/Api";
import Jumbo from "../component/common/Jumbo";
import Navbar from "../component/common/Navbar";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";
import Loading from "../component/common/Loading";
import RegionalIntensiveCareAdmissionTable from "../component/hospitalisation/RegionalIntensiveCareAdmissionTable";

function RegionalIntensiveCareAdmission(props) {

    const [data, setData] = useState({admissions: []})
    const [loading, setLoading] = useState({isLoading: true})
    const [region, setRegion] = useState({regionCode: props.regionCode})


    useEffect(
        () => {
            const params = {};
            Api.get(
                `/hospitalisation/regionalIntensiveCareAdmissions/search?regionCode=${region.regionCode}&noticeDateBegin=2021-03-01&noticeDateEnd=2022-03-01`//,
                // {
                //     params: {
                //         regionCode: '11', noticeDateBegin: '2021-04-05', noticeDateEnd: '2021-04-03'
                //     }
                // }
            )
                .then(response => {
                    var regionalIntensiveCareAdmissions = response.data._embedded.regionalIntensiveCareAdmissions;
                    console.log(regionalIntensiveCareAdmissions)

                    regionalIntensiveCareAdmissions.sort((a, o) => {
                        return o.noticeDate.localeCompare(a.noticeDate)
                    });
                    setData({admissions: regionalIntensiveCareAdmissions})
                    setLoading({isLoading: false});
                })
                .catch(error => console.log(error))
        },
        [region]
    );

    console.log("Will return UI")

    const handleChange = function (event) {
        setRegion({regionCode: event.target.value})
        event.preventDefault();
    };

    const handleSubmit = function (event) {
        alert('A name was submitted: ' + region.regionCode);
        event.preventDefault();
    };

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Régions et départements"}
                lead={"Liste des régions et départements de France"}
            />
            <Content>
                <form onSubmit={handleSubmit}><label>
                    Code région :
                    <input type="text" value={region.regionCode} onChange={handleChange}/> </label>
                    {/*<input type="submit" value="Submit"/>*/}
                </form>
                <Loading isLoading={loading.isLoading}>
                    <RegionalIntensiveCareAdmissionTable
                        admissions={data.admissions}
                    />
                </Loading>
            </Content>
            <Footer/>
        </>
    );
}

export default RegionalIntensiveCareAdmission;