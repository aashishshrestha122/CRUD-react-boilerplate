import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from './selectors';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage';
import AdminDashboard from 'containers/AdminDashboard/Loadable';
import Testimonial from 'containers/Dash/Testimonial/Loadable';
import Dash from 'containers/Dash/Loadable';
import Gettestimonial from 'containers/Dash/Gettestimonial/Loadable';
import Logincontainer from 'containers/Logincontainer/Loadable';
// import Dash from 'containers/Dash/Loadable';

import GuestRoute from '../../components/Routes/GuestRoute';
import UserRoute from '../../components/Routes/UserRoute';

const mapStateToProps = createStructuredSelector({
 
});

class Routes extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
      key: PropTypes.string,
    }).isRequired,
  };

  render() {
      const token = localStorage.getItem('token');
    //   console.log(token);
    return (
      <Switch location={this.props.location}>
        <Route
          exact
          path="/"
          render={props => (
            // <HomePage {...props} />
            <Logincontainer {...props} />
          )}
        />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route
          path="/dash"
          render={() => (token ? <Dash /> : <Redirect to="/" />)}
        />
        <Route
          path="/edit-testimonial/:test_id"
          render={props =>
            token ? <Testimonial {...props} /> : <Redirect to="/" />
          }
        />
        <Route exact path="/listtestimonials" component={Gettestimonial} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route
          path="/admin"
          render={props => (
            // <AdminDashboardLayout {...props}><AdminDashboard {...props} /></AdminDashboardLayout>}
            <AdminDashboard {...props} />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Routes);
