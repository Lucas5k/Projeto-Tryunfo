import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Description">
        Descrição:
        <textarea
          name="cardDescription"
          data-testid="description-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
