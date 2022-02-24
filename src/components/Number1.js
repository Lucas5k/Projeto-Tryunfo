import React from 'react';
import PropTypes from 'prop-types';

class Number1 extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="number1">
        Attr01:
        <input
          name="cardAttr1"
          data-testid="attr1-input"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Number1.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Number1;
