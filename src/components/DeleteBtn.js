import React from 'react';
import PropTypes from 'prop-types';

class DeleteBtn extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <button
        type="reset"
        data-testid="delete-button"
        onClick={ handleChange }
      >
        Excluir
      </button>
    );
  }
}

DeleteBtn.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default DeleteBtn;
