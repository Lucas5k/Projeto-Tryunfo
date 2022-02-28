import React from 'react';
import PropTypes from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const { value, handleChange, disabled } = this.props;
    return (
      <select
        data-testid="rare-filter"
        value={ value }
        onChange={ handleChange }
        disabled={ disabled }
        name="rareFilter"
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

RareFilter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.func.isRequired,
};

export default RareFilter;
