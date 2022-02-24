import React from 'react';
import PropTypes from 'prop-types';

class RareInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <p>Raridade:</p>
        <select
          data-testid="rare-input"
          value={ value }
          onChange={ handleChange }
          name="cardRare"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}

RareInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RareInput;
