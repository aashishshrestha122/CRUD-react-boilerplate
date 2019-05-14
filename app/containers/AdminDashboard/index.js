import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import jwtDecode from 'jwt-decode';
import { makeSelectUser, makeSelectLocation } from '../App/selectors';
import AdminRoutes from './Routes';

const mapStateToProps = createStructuredSelector({
    location: makeSelectLocation(),
    // user: makeSelectUser()
});

const mapDispatchToProps = (dispatch) => ({
    // logout: () => dispatch(logoutRequest()),
    // clearDistributorState: () => dispatch(clearAllStates()),
    navigateToProfilePage: () => dispatch(push('/admin/dashboard/profile'))
});

class AdminDashboard extends React.Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return(
            <div>
                Admin Dashboard
            </div>
        )
    }
}
  
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
);