/**
 *
 * Dash
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDash from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Navbar from './navbar';
import Sidebar from './sidebar';

/* eslint-disable react/prefer-stateless-function */
export class Dash extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

Dash.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dash: makeSelectDash(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dash', reducer });
const withSaga = injectSaga({ key: 'dash', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dash);
