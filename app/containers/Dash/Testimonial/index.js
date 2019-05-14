/**
 *
 * Testimonial
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {makeSelectTestimonial,makeSelectTestimonialById} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { postRequest, getDataByIdRequest, putRequest } from './actions';
import * as jwt from 'jwt-decode';
import Navbar from '../navbar';
import history from 'utils/history';

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

class Testimonial extends Component {
  // useInjectReducer({ key: 'testimonial', reducer });
  // useInjectSaga({ key: 'testimonial', saga });
  constructor(props) {
    super(props);
    this.state = {
      // decoded = jwt(localStorage.getItem("token")),
      data: {
        personName: '',
        testimonialContent: '',
        organization: '',
      },
      file: null,
    };
  }

  componentDidMount() {
    const id =
      this.props.match && this.props.match.params.test_id
        ? this.props.match.params.test_id
        : null;
    if (id) this.props.dataRequest(id);
  }

  componentWillReceiveProps(data) {
    this.setState({
      data: {
        ...this.state.data,
        ...data.Testimonial.testimonialByIdData,
      },
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      personName: this.state.data.personName,
      testimonialContent: this.state.data.testimonialContent,
      organization: this.state.data.organization,
    };
    const id =
      this.props.match && this.props.match.params.test_id
        ? this.props.match.params.test_id
        : null;
    if (id) this.props.putRequest(data, this.state.file, id);
    else this.props.submit(data, this.state.file);
    history.push('/listtestimonials');
  };

  handleChange = e => {
    const { name } = e.target;
    const { data } = this.state;
    data[name] = e.target.value;
    this.setState({
      data,
    });
  };

  handleFileChange = e => {
    // console.log(e.target.files[0]);
    this.setState({
      ...this.state,
      file: e.target.files[0],
    });
  };

  render() {
    // console.log(this.props.testimonialByIdData);

    return (
      <div>
        <Navbar />
        <div className="login-form">
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Add Testimonial
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    required
                    type="text"
                    name="personName"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.data.personName}
                  />
                  <Form.TextArea
                    required
                    placeholder="Testimonial Content"
                    type="text"
                    name="testimonialContent"
                    onChange={this.handleChange}
                    value={this.state.data.testimonialContent}
                  />
                  <Form.Input
                    fluid
                    required
                    placeholder="Organization"
                    type="text"
                    name="organization"
                    onChange={this.handleChange}
                    value={this.state.data.organization}
                  />
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onSubmit={this.handleSubmit}
                  >
                    Post
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  Testimonial: makeSelectTestimonial(),
  testimonialByIdData: makeSelectTestimonialById()
});


const mapDispatchToProps = dispatch => ({
  submit: (data) => dispatch(postRequest(data)),
  dataRequest: id => dispatch(getDataByIdRequest(id)),
  putRequest: (data, file, id) => dispatch(putRequest(data, file, id)),
});

const withReducer = injectReducer({ key: 'Testimonial', reducer });
const withSaga = injectSaga({ key: 'Testimonial', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Testimonial);
