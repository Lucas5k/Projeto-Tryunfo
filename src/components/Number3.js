import React from 'react';
import PropTypes from 'prop-types';

class Number3 extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Number3">
        Attr03:
        <input
          name="cardAttr3"
          data-testid="attr3-input"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Number3.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Number3;
