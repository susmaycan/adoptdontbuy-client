import React from 'react'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './config/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavigationBar from './pages/Navbar'
import AddAnimal from './pages/AddAnimal'
import UpdateAnimalContainer from './pages/UpdateAnimal/UpdateAnimalContainer'
import EditPicturesContainer from './pages/EditPictures/EditPicturesContainer'
import EditUSer from './pages/EditUser'

import Search from './pages/Search'
import AnimalDetail from './pages/AnimalDetail'
import UserDetail from './pages/UserDetail'
import Home from './pages/Home'
import Login from './pages/Login'

require('dotenv').config()

const store = configureStore()

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={NavigationBar} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/animal/:animalId" component={AnimalDetail} />
                <Route exact path="/user/:userId" component={UserDetail} />
                <Route exact path="/updateAnimal/:animalId" component={UpdateAnimalContainer} />
                <Route exact path="/editPictures/:animalId" component={EditPicturesContainer} />
                <Route exact path="/addAnimal" component={AddAnimal} />
                <Route exact path="/updateUser/:userId" component={EditUSer} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
