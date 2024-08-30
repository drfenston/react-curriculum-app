import React, { FunctionComponent } from 'react';
import CVList from './pages/cv-list';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
import CVDetail from './pages/cv-detail';
import CVEdit from './pages/cv-edit';
import AuthenticationService from './services/authentication-service';

const App: FunctionComponent = () => {

    const disconnect = () => {
        console.log("disconnect")
        localStorage.setItem('token', "")
    }

    return (
        <Router>
            
            <div>
                {/*La barre de navigation commun à toutes les pages*/}
                <nav className="navbar navbar-expand-lg text-primary bg-light">
                    <div className="container">
                        <a className="navbar-brand text-primary" href="/">CyrilMaquaire.com</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {AuthenticationService.token !== "" ? 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-primary" aria-current="page" href="/cv/all">Liste</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-primary" onClick={disconnect} href="/" >Déconnecter</a>
                                </li>
                            </ul>
                        </div>
                         : 
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-primary" href="/login" >Connecter</a>
                                </li>
                            </ul>
                        </div>
                         }
                    </div>
                </nav>

                {/*Le système de gestion des routes de notre application*/}
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={CVDetail} />
                    <PrivateRoute exact path="/cv/all" component={CVList} />
                    <Route path="/cv/edit/:id" component={CVEdit} />
                    <Route path="/cv/:id" component={CVDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;