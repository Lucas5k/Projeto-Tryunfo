import React from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends React.Component {
  render() {
    const { checked, handleChange, disabled } = this.props;
    return (
      <label htmlFor="trunfo">
        Super Trunfo:
        <input
          data-testid="trunfo-filter"
          id="trunfoFilter"
          name="trunfoFilter"
          type="checkbox"
          checked={ checked }
          disabled={ disabled }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.func.isRequired,
};

export default TrunfoFilter;
