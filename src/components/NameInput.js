import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="nameText">
        Nome:
        <input
          name="cardName"
          data-testid="name-input"
          value={ value }
          onChange={ handleChange }
          type="text"
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NameInput;
