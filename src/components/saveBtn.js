import React from 'react';
import PropTypes from 'prop-types';

class SaveBtn extends React.Component {
  render() {
    const { handleChange, disabled } = this.props;
    return (
      <button
        data-testid="save-button"
        onClick={ handleChange }
        disabled={ disabled }
        type="submit"
      >
        Salvar
      </button>
    );
  }
}

SaveBtn.propTypes = {
  disabled: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SaveBtn;
