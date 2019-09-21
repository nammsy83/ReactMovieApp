import React, { Component } from 'react';
import InputForm from './inputForm';
import MovieContainer from './movieContainer';
import { connect } from 'react-redux';

class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="row">
                <div className="container">
                    <h1 className="text-center">Movie App</h1>
                    <InputForm />
                    {
                        loading ? 'loading...' : <MovieContainer />
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);
