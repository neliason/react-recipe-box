import React, { Component } from 'react';
import PropTypes from "prop-types";
import ReactModal from 'react-modal';

/*
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    
  }
}; */

export default class AddRecipeForm extends Component {

  state = {
    recipeName: '',
    recipeIngredientsString: ''
  }

  static propTypes = {
      showModal: PropTypes.bool.isRequired,
      handleCloseModal: PropTypes.func.isRequired,
      onAdd: PropTypes.func.isRequired
  }

  onNameChange = (event) => {
    const recipeName = event.target.value;
    this.setState({ recipeName: recipeName });
  }

  onIngredientsChange = (event) => {
    const ingredientString = event.target.value;
    this.setState({ recipeIngredientsString: ingredientString })
    //var ingredientArray = ingredientString.split(",").trim();
    //this.setState({ recipeIngredients: ingredientArray }); 
  }

  onSubmit = (event) => {
    if (event) event.preventDefault();
    const ingredientArray = this.state.recipeIngredientsString.split(",");
    this.props.onAdd(this.state.recipeName, ingredientArray);
    //this.props.onAdd(this.state.name);
    this.setState({ 
      recipeName: '',
      recipeIngredientsString: ''
    });
    this.props.handleCloseModal();
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal} 
        //style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="add-modal">
          <div className="add-title bold">
            Add a Receipe
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="add-recipe-name">
              <div className="bold">Recipe</div>
              <input 
                type="text" 
                className="add-recipe-name-input" 
                onChange={this.onNameChange}
                value={this.state.recipeName}
                placeholder="Recipe Name" />
            </div>
            <div className="add-ingredients-input">
              <div className="bold">Ingredients</div>
              <textarea
                className="add-textarea"
                onChange={this.onIngredientsChange}
                value={this.state.recipeIngredientsString}
                placeholder="Enter Ingredients, separated, by, commas" />
            </div>
            <div className="add-modal-buttons">
              <input type="submit" value="Add Recipe" className="btn btn-primary btn-md" />
              <button className="btn btn-md" onClick={this.props.handleCloseModal}>Close</button>
            </div>
          </form>
        </div>
      </ReactModal>
    );
  }

}