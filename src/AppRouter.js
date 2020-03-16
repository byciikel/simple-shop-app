import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";

import AppPage from './App'

function AppRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ AppPage } />
      </Switch>
    </HashRouter>
  )
}

export default AppRouter
