import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing';
import store from './store';
import Movie from './components/movie';
import './App.scss'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>

                        <Route exact path="/" component={Landing} />
                        <Route exact path="/movie/:id" component={Movie} />
                    </div>
                </Router>

            </Provider >

        )
    }
}
export default App;