import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Logon}></Route>
    </Switch>
  </BrowserRouter>
)
