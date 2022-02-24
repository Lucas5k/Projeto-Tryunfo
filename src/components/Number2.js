import React from 'react';
import PropTypes from 'prop-types';

class Number2 extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="number2">
        Attr02:
        <input
          name="cardAttr2"
          data-testid="attr2-input"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Number2.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Number2;
