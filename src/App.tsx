import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Form from './screens/Form'
import Menu from './screens/Menu'
import PageNotFound from './screens/PageNotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/menu/1' />
        </Route>
        <Route exact path='/menu/:id' component={Menu} />
        <Route exact path='/form/:id' component={Form} />
        <Route exact path='*' component={PageNotFound} status={404} />
      </Switch>
    </Router>
  )
}

export default App
