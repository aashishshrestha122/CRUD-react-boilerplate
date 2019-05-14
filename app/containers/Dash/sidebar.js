import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import history from 'utils/history';
import { Redirect, Switch } from 'react-router-dom';

class Sidebar extends Component {
  handlePageChange = () => {
    history.push('/testimonial');
  };
  handlePageChangeGet = () => {
    history.push('/listtestimonials');
  };
  render() {
    return (
      <div>
        <Button color="blue" className="px-4" onClick={this.handlePageChange}>
          Add Testimonial
        </Button>
        <br />
        <br />
        <Button
          color="green"
          className="px-4"
          onClick={this.handlePageChangeGet}
        >
          List Testimonials
        </Button>
      </div>
    );
  }
}
export default Sidebar;
