import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './components/redux-base-logic/lib/store'
import {Header} from "./components/Header";
import {DropZone} from "./components/DropZone";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import "./bootstrap.min.css"
import TableLoad from "./components/TableLoad";
import ProfilePage from "./components/pages/ProfilePage";



function App() {
    return (
        <Router>
            <Provider store={store}>
                    <Header/>
                        <Switch>
                            <Route path="/" component={DropZone} exact/>
                            <Route path="/table" component={TableLoad} exact/>
                            <Route path="/register" component={RegisterPage} exact />
                            <Route path="/login" component={LoginPage} exact />
                            <Route path="/profile" component={ProfilePage} exact />
                        </Switch>
            </Provider>
        </Router>
    );
}

export default App;
