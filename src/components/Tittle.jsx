import React from 'react';
import PropTypes from 'prop-types';

class Tittle extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Tittle.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Tittle;
