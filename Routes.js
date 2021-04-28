import React from 'react'
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'

// Import All Component
import Register from './component/Register'
import ActivationAccount from './component/ActivationAccount'

export default function Routes() {
    return (
        <NativeRouter>
          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/active-account" exact component={ActivationAccount} />
          </Switch>  
        </NativeRouter>
    )
}

