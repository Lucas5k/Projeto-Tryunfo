import React from 'react';
import PropTypes from 'prop-types';
import NameInput from './NameInput';
import Description from './Description';
import Number1 from './Number1';
import Number2 from './Number2';
import Number3 from './Number3';
import Image from './Image';
import RareInput from './RareInput';
import SaveBtn from './saveBtn';
import Tryunfo from './Tryunfo';
import DeleteBtn from './DeleteBtn';
import FilterCards from './FilterCards';
import RareFilter from './RareFilter';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      deleteClick,
      nameFilter,
      rareFilter,
    } = this.props;
    return (
      <section>
        <form>
          <RareFilter value={ rareFilter } handleChange={ onInputChange } />
          <FilterCards value={ nameFilter } handleChange={ onInputChange } />
          <NameInput value={ cardName } handleChange={ onInputChange } />
          <Description value={ cardDescription } handleChange={ onInputChange } />
          <Number1 value={ cardAttr1 } handleChange={ onInputChange } />
          <Number2 value={ cardAttr2 } handleChange={ onInputChange } />
          <Number3 value={ cardAttr3 } handleChange={ onInputChange } />
          <Image value={ cardImage } handleChange={ onInputChange } />
          <RareInput value={ cardRare } handleChange={ onInputChange } />
          {hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
            : (
              <Tryunfo checked={ cardTrunfo } handleChange={ onInputChange } />
            )}
          <SaveBtn disabled={ isSaveButtonDisabled } handleChange={ onSaveButtonClick } />
          <DeleteBtn handleChange={ deleteClick } />
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default Form;
