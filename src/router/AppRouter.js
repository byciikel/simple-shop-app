import React, { useEffect } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { observer } from 'mobx-react'

import Store from '../store/Store'

import HomePage from '../pages/HomePage'

function AppRouter() {
  useEffect(() => {
    Store.fetchProduct()
  }, [])

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </HashRouter>
  )
}

export default observer(AppRouter)
