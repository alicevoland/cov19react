import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import {Link} from "react-router-dom";
import React from "react";
import A from "../component/common/A";


function Home() {

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Covid 19 UI"}
                lead={"Bienvenue sur le front de démo pour Covid 19 API"}
            />
            <Content>
                <h1>Motivation</h1>

                <p>
                    La plateforme <A to={"https://www.data.gouv.fr"}> www.data.gouv.fr </A> qui propose en open
                    data plusieurs jeux de données, regroupe en particulier des
                    <A to={"https://www.data.gouv.fr/fr/pages/donnees-coronavirus"}> statistiques sur le covid</A>.
                </p>
                <p>
                    Ces données sont proposées via des fichiers CSV mis à jour régulièrement. Afin de faciliter la
                    réutilisation de ces données, le projet <A to={"https://cov19spring.herokuapp.com"}>Covid 19
                    API</A> se propose de
                    définir une API plus simple d'utilisation
                    pour un frontend en Javascript. La documentation plus détaillée de l'API est disponible sur le site
                    (en anglais).
                </p>
                <p>
                    Le code source du projet Covid 19 API ainsi que celui de ce site sont accessible en open source sur
                    Github :
                    <A to={"https://github.com/mvoland/cov19spring"}> cov19spring </A> et
                    <A to={"https://github.com/mvoland/cov19react"}> cov19react </A>
                </p>

                <h1>Exemples d'utilisation</h1>
                <ul>
                    <li><Link to={"/locality"}>Liste des départements français</Link></li>
                    <li><Link to={"/regionalIntensiveCareAdmissions"}>Admission en réanimation par région</Link></li>
                </ul>

            </Content>
            <Footer/>
        </>
    );
}

export default Home;