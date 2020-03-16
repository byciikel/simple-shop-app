import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage'

function AppRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </HashRouter>
  )
}

export default AppRouter
