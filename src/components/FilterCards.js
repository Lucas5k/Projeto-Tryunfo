import React from 'react';
import PropTypes from 'prop-types';

class FilterName extends React.Component {
  render() {
    const { handleChange, value, disabled } = this.props;
    return (
      <label htmlFor="name-filter">
        Filtros de busca:
        <input
          data-testid="name-filter"
          name="nameFilter"
          type="text"
          onChange={ handleChange }
          value={ value }
          disabled={ disabled }
        />
      </label>
    );
  }
}

FilterName.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterName;
