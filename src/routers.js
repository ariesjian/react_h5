import React from 'react'
import {HashRouter, Route} from 'react-router-dom';
import home from './pages/home';
class RouteMap extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={home}/>
                </div>
            </HashRouter>
        )
    }
}

export default RouteMap