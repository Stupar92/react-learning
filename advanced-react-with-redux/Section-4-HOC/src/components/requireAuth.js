import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated)
                this.context.router.push('/');
        }

        /**
         * Will get called whenever component is about to get new set of props (re-rendered)
         * i.e. when we change the state of authenticated value
         */
        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.pros} />
        };
    }

    function mapStateToProps(state) {
        return {authenticated: state.authenticated};
    }    

    return connect(mapStateToProps)(Authentication);
}