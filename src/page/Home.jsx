import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import Navbar from "../component/common/Navbar";

function Home() {

    return (
        <>
            <Navbar/>
            <Jumbo title={"Accueil"} lead={"Bienvenue sur le front minimal pour test cov19api"}/>
            <Content>
                <h1>Accueil</h1>
            </Content>
        </>
    );
}

export default Home;