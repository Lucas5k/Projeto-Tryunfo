import React from 'react';
import PropTypes from 'prop-types';

class Tryunfo extends React.Component {
  render() {
    const { checked, handleChange } = this.props;
    return (
      <label htmlFor="tryunfo">
        <input
          data-testid="trunfo-input"
          id="cardTrunfo"
          name="cardTrunfo"
          type="checkbox"
          checked={ checked }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Tryunfo.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Tryunfo;
