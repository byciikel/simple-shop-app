import React, { useEffect } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { observer } from 'mobx-react'

import Store from '../store/Store'

import HomePage from '../pages/HomePage'
import CheckoutPage from '../pages/CheckoutPage'

const AppRouter = () => {
  useEffect(() => {
    Store.fetchProduct()
  }, [])

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/checkout" component={ CheckoutPage } />
      </Switch>
    </HashRouter>
  )
}

export default observer(AppRouter)
