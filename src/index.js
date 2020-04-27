import React from 'react'
import './styles/index.scss'
import {Provider} from 'react-redux'
import configureStore from './config/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import {render} from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Error from './components/Error'
import * as firebase from 'firebase'
import firebaseConfig from './Firebase/FirebaseConfig'
import Footer from "./components/Footer";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Pages from './pages'
require('dotenv').config()

const store = configureStore()
firebase.initializeApp(firebaseConfig)

render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="app">
                <Route path="/" component={Pages.NavigationBar}/>
                <Switch>
                    <Route exact path="/" component={Pages.Home}/>
                    <Route exact path="/login" component={Pages.Login}/>
                    <Route exact path="/search" component={Pages.Search}/>
                    <Route exact path="/animal/:animalId" component={Pages.AnimalDetail}/>
                    <Route exact path="/user/:userId" component={Pages.UserDetail}/>
                    <Route exact path="/updateAnimal/:animalId" component={Pages.EditAnimal}/>
                    <Route exact path="/editPictures/:animalId" component={Pages.EditPicturesAnimal}/>
                    <Route exact path="/addAnimal" component={Pages.AddAnimal}/>
                    <Route exact path="/updateUser/:userId" component={Pages.EditUser}/>
                    <Route component={Error}/>
                </Switch>
                <Route path="/" component={Footer}/>
                <Route path="/" component={ScrollUpButton}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
