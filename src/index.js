import React from 'react'
import './styles/index.scss'
import { Provider } from 'react-redux'
import configureStore from './config/configureStore'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './components/Error'
import * as firebase from 'firebase'
import firebaseConfig from './Firebase/FirebaseConfig'
import Footer from './components/Footer'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import Pages from './pages'

require('dotenv').config()

const store = configureStore()
firebase.initializeApp(firebaseConfig)

render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Pages.NavigationBar} />
        <Route path="/user/:userId" component={Pages.UserDetail.UserTabs} />
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route exact path="/login" component={Pages.Login} />
          <Route exact path="/signup" component={Pages.SignUp} />
          <Route
            exact
            path="/recoverPassword"
            component={Pages.RecoverPassword}
          />
          <Route exact path="/search" component={Pages.Search} />
          <Route
            exact
            path="/animal/:animalId"
            component={Pages.AnimalDetail}
          />
          <Route
            exact
            path="/editPictures/:animalId"
            component={Pages.EditPicturesAnimal}
          />
          <Route
            exact
            path="/updateAnimal/:animalId"
            component={Pages.EditAnimal}
          />
          <Route exact path="/addAnimal" component={Pages.AddAnimal} />
          <Route exact path="/updateUser/:userId" component={Pages.EditUser} />
          <Route
            exact
            path="/user/:userId"
            component={Pages.UserDetail.UserInformation}
          />
          <Route
            exact
            path="/user/:userId/pets"
            component={Pages.UserDetail.Pets}
          />
          <Route
            exact
            path="/user/:userId/fav"
            component={Pages.UserDetail.Favourites}
          />
          <Route
            exact
            path="/user/:userId/reviews"
            component={Pages.UserDetail.Reviews}
          />
          <Route
            exact
            path="/user/:userId/adopted"
            component={Pages.UserDetail.Adopted}
          />
          <Route
            exact
            path="/user/:userId/reserved"
            component={Pages.UserDetail.Reserved}
          />
          <Route
            exact
            path="/user/:userId/contact"
            component={Pages.UserDetail.Contact}
          />
          <Route component={Error} />
        </Switch>
        <Route path="/" component={Footer} />
        <Route path="/" component={ScrollUpButton} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
