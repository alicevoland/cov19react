import {NavLink} from 'react-router-dom';

function Navbar(props) {
    let links = [
        <NavLink key="home" className="nav-item nav-link" to="/"> Accueil </NavLink>,
        <NavLink key="locality" className="nav-item nav-link" to="/locality"> Départements </NavLink>,
        <NavLink key="icadminreg" className="nav-item nav-link" to="/regionalIntensiveCareAdmissions"> Admissions Réa par
            région </NavLink>,
    ]
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"> Covid 19 UI </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        {links}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
