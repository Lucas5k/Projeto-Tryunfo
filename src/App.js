/* eslint-disable no-lone-blocks */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      nameFilter: '',
      rareFilter: 'todas',
      cards: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleSaveBtn, this.hasValidation);
  }

  handleSaveBtn = () => {
    const { cardName, cardDescription,
      cardImage, cardRare, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;

    const min = 0;
    const max = 90;
    const sum = 210;

    if (
      cardName.length > min && cardDescription.length > min
      && cardImage.length > min && cardRare.length !== ''
      && Number(cardAttr1) >= min && Number(cardAttr1) <= max
      && Number(cardAttr2) >= min && Number(cardAttr2) <= max
      && Number(cardAttr3) >= min && Number(cardAttr3) <= max
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sum
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  handleSaveInfo = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;

    const Carta = { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo };

    this.setState((state) => {
      const { cards } = state;
      return {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        cards: [...cards, Carta],
      };
    });
  }

  hasValidation = () => {
    const { cards } = this.state;

    const hasTryunfo = cards.some((has) => has.cardTrunfo);

    if (hasTryunfo) {
      this.state.hasTrunfo = true;
    } else {
      this.state.hasTrunfo = false;
    }
  }

  renderizar = () => {
    const { cards, nameFilter, rareFilter } = this.state;
    // rareFilter
    if (cards.length) {
      const cardsToRender = rareFilter === 'todas' ? cards
        : cards.filter((c) => c.cardRare === rareFilter);
      return cardsToRender
        .filter((card) => card.cardName.includes(nameFilter))
        .map((car) => (
          <Card
            key={ car }
            { ...car }
          />
        ));
    }
  }

  saveCards = () => this.setState({ cards: [] })

  render() {
    this.hasValidation();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      nameFilter,
      rareFilter,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveInfo }
          deleteClick={ this.saveCards }
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveInfo }
        />
        { this.renderizar() }
      </div>
    );
  }
}

export default App;
