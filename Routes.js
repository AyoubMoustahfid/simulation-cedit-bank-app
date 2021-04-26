import React from 'react'
import {View} from 'react-native'
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'

// Import All Component
import Register from './component/Register'

export default function Routes() {
    return (
        <NativeRouter>
          <Switch>
            <Route path="/" exact component={Register} />
          </Switch>  
        </NativeRouter>
    )
}

