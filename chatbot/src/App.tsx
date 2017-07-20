import * as React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import Chat from './containers/chat';

// import LoginSignup from './containers/login-signup'
import Dashboard from './containers/dashboard'

// import Login from './components/login'
// import Signup from './components/signup'
// import Profile from './components/profile'
// import NoMatch from './components/404'

interface AppProps {
}

class App extends React.Component<AppProps, any> {
    render() {
        return (<Router history={hashHistory}>

            <Route path="/dashboard" component={Dashboard}>
                <IndexRoute component={Chat} />
                <Route path="/chat" component={Chat} />
            </Route>

        </Router>)
    }
}
export default App;