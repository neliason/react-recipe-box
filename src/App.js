import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'
import AddRecipeForm from './AddRecipeForm'

class App extends Component {

  state = {
    recipes: [
      {
        name: "Chicken Noodle Soup",
        ingredients: [
          "chicken",
          "noodles",
          "water"
        ]
      },
      {
        name: "Macaroni and Cheese",
        ingredients: [
          "noodles",
          "cheese powder",
          "milk",
          "butter"
        ]
      }
    ],
    showAddModal: false
  }

  componentDidMount() {
    //load saved recipes
  }

  onAddRecipe = (name, ingredients) => {
    this.state.recipes.push({ name: name, ingredients: ingredients });
    this.setState(this.state);
  }

  onRemoveRecipe = (index) => {
    this.state.recipes.splice(index, 1);
    this.setState(this.state);
  }

  handleOpenAddModal = () =>
    this.setState({ showAddModal: true });

  handleCloseAddModal = () =>
    this.setState({ showAddModal: false });


  render() {
    return (
      <div className="App">
        <div className="recipes">
          {this.state.recipes.map(function (recipe, index) {
            return (
              <Recipe
                name={recipe.name}
                ingredients={recipe.ingredients}
                onRemove={() => this.onRemoveRecipe(index)}
                key={index} />
            );
          }.bind(this))}
        </div>
        <AddRecipeForm 
          showModal={this.state.showAddModal} 
          handleCloseModal={this.handleCloseAddModal}
          onAdd={this.onAddRecipe} />
        <button 
          className="add-recipe-btn btn-primary btn btn-lg"
          onClick={this.handleOpenAddModal}>
          Add Recipe
        </button>
      </div>
    );
  }
}

export default App;
